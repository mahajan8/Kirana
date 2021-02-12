/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Dimensions, Animated, Platform} from 'react-native';
import {styles} from '../styles/trackingStyles';
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import TrackMarker from '../../../assets/images/track_marker.svg';
import StoreIcon from '../../../assets/images/map_store.svg';
import Bike from '../../../assets/images/bike.svg';
import HomeIcon from '../../../assets/images/map_home.svg';
import {decodePolyline, getKeyByValue} from '../../../utils/utility/Utils';
import {connect} from 'react-redux';
import {getDirectionsPolyline} from '../Api';
import {addressTypes, orderStatus} from '../../../utils/values/Values';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import {Colors} from '../../../utils/values/Colors';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.35012;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Tracking = (props) => {
  let {orderDetails, currentLocation} = props;
  let map = useRef(null);
  let marker = useRef(null);
  let pickedUp = useRef(null);
  const [currentRotation, setCurrentRotation] = useState('0deg');
  const [newRotation, setNewRotation] = useState('0deg');
  const [rotation] = useState(new Animated.Value(0));
  const [storeLocation, setStoreLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [deliveryLocation, setDeliveryLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [deliveryPolyline, setDeliveryPolyline] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [pickupPolyline, setPickupPolyline] = useState([]);
  const [pickupTime, setPickupTime] = useState('');

  const [markerCoordinate] = useState(
    new AnimatedRegion({
      latitude: 0,
      longitude: 0,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  );

  let {
    delivery_address_location,
    store_location,
    status,
    delivery_address_type,
  } = orderDetails ? orderDetails : {};
  let orderPicked =
    status === orderStatus.ORDER_OUT_FOR_DELIVERY ? true : false;
  let orderDelivered = status === orderStatus.ORDER_DELIVERED ? true : false;

  useEffect(() => {
    if (!pickedUp.current && orderPicked && deliveryLocation.latitude) {
      focusMap();
      getDirectionsFromCurrent();
    }
    pickedUp.current = orderPicked;
  }, [status]);

  useEffect(() => {
    if (orderDetails) {
      setStoreLocation({
        latitude: store_location.lat,
        longitude: store_location.lng,
      });
      setDeliveryLocation({
        latitude: delivery_address_location.lat,
        longitude: delivery_address_location.lng,
      });

      if (orderDelivered) {
        focusMap(true);
      }
      // getDirectionsFromCurrent();
    }

    return () => markerCoordinate.stopAnimation();
  }, [orderDetails]);

  useEffect(() => {
    if (storeLocation.latitude && deliveryLocation.latitude) {
      focusMap(true);
    }
  }, [deliveryLocation, storeLocation]);

  useEffect(() => {
    if (currentLocation.latitude) {
      if (markerCoordinate.latitude._value) {
        markerCoordinate.stopAnimation();
        focusMap();
        animateToCurrent();
      } else {
        markerCoordinate
          .timing({
            ...currentLocation,
            duration: 10,
            useNativeDriver: false,
          })
          .start(() => {
            focusMap();
            getDirectionsFromCurrent();
          });
      }
    }
  }, [currentLocation]);

  const focusMap = (full = false) => {
    let current = {
      latitude: markerCoordinate.latitude._value,
      longitude: markerCoordinate.longitude._value,
    };

    let coords1 = full ? storeLocation : current;
    let coords2 = full
      ? deliveryLocation
      : orderPicked
      ? deliveryLocation
      : storeLocation;

    map.current.fitToCoordinates([coords1, coords2], {
      edgePadding:
        Platform.OS === 'ios'
          ? {top: 150, right: 150, bottom: 150, left: 150}
          : {top: 300, right: 300, bottom: 300, left: 300},
    });
  };

  const bearingBetweenLocations = (latLng1, latLng2) => {
    let PI = Math.PI;
    let lat1 = (latLng1.lat * PI) / 180;
    let long1 = (latLng1.lng * PI) / 180;
    let lat2 = (latLng2.lat * PI) / 180;
    let long2 = (latLng2.lng * PI) / 180;

    let dLon = long2 - long1;

    let y = Math.sin(dLon) * Math.cos(lat2);
    let x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

    let brng = Math.atan2(y, x);

    brng = brng * (180 / PI);
    brng = brng % 360;

    return brng;
  };

  const animate = (endCoords, duration, bearing) => {
    setNewRotation(bearing);
    Animated.timing(rotation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setCurrentRotation(bearing);
      rotation.setValue(0);
    });

    const newCoordinate = {
      latitude: endCoords.lat,
      longitude: endCoords.lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };

    markerCoordinate
      .timing({
        ...newCoordinate,
        duration: duration,
        useNativeDriver: false,
      })
      .start();
  };

  // Animate Marker on Polyline
  const animateLeg = (steps) => {
    let totalDuration = 0;
    steps.forEach((step, index) => {
      let {start_location, end_location, duration} = step;
      let bearing = bearingBetweenLocations(start_location, end_location);
      let delay = duration.value * 50 + 300;

      setTimeout(() => {
        animate(end_location, delay, bearing + 'deg');
      }, totalDuration);

      totalDuration += delay;
    });

    setTimeout(() => {
      getDirectionsFromCurrent();
    }, totalDuration);
  };

  const animateToCurrent = () => {
    let initial = {
      latitude: markerCoordinate.latitude._value,
      longitude: markerCoordinate.longitude._value,
    };

    let pars = {
      initial,
      final: currentLocation,
    };

    props.getDirectionsPolyline(pars, (res) => {
      let {legs} = res.routes[0];

      animateLeg(legs[0].steps);
    });
  };

  const getDirectionsFromCurrent = () => {
    let current = {
      latitude: markerCoordinate.latitude._value,
      longitude: markerCoordinate.longitude._value,
    };

    let pars = {
      initial: current,
      final: orderPicked ? deliveryLocation : storeLocation,
    };

    props.getDirectionsPolyline(pars, (res) => {
      let {overview_polyline, legs} = res.routes[0];
      let polyline = decodePolyline(overview_polyline.points);
      let time = legs[0].duration.text;

      if (orderPicked) {
        setDeliveryPolyline(polyline);
        setDeliveryTime(time);
      } else {
        setPickupPolyline(polyline);
        setPickupTime(time);
      }
    });
  };

  const getMarker = (type = 0) => {
    let duration = orderPicked ? deliveryTime : pickupTime;
    let showTime =
      duration &&
      !orderDelivered &&
      ((type === 0 && !orderPicked) || (type === 1 && orderPicked));
    // Get marker by address type.
    return (
      <Marker coordinate={type === 0 ? storeLocation : deliveryLocation}>
        <View style={styles.markerContainer}>
          <View>
            <TrackMarker />
            <View style={styles.markerInnerContainer}>
              {showTime ? (
                <Text style={styles.deliveryTime}>
                  {duration.split(' ')[0]}
                  {'\n'}
                  <Text style={styles.minutes}>{duration.split(' ')[1]}</Text>
                </Text>
              ) : type === 0 ? (
                <StoreIcon style={styles.markerIcon} />
              ) : (
                <HomeIcon style={styles.markerIcon} />
              )}
            </View>
          </View>

          <View style={styles.markerLabelContainer}>
            <Text style={styles.markerLabel}>
              {type === 0
                ? Strings.store
                : getKeyByValue(addressTypes, delivery_address_type)}
            </Text>
          </View>
        </View>
      </Marker>
    );
  };

  const markerRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: [currentRotation, newRotation],
  });

  const getDriver = () =>
    markerCoordinate.latitude._value ? (
      <Marker.Animated
        coordinate={markerCoordinate}
        style={[{transform: [{rotate: markerRotation}]}]}
        ref={marker}>
        <View style={styles.driverMarker}>
          <Bike
            width={EStyleSheet.value('$spacingLessHuge')}
            height={EStyleSheet.value('$spacingLessHuge')}
          />
        </View>
      </Marker.Animated>
    ) : null;

  return (
    <View style={styles.mapView}>
      {/* <TouchableOpacity onPress={navigate}>
        <Text style={{alignSelf: 'center'}}>Press</Text>
      </TouchableOpacity> */}
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={styles.map}
        ref={map}
        initialRegion={{
          latitude: 19.093229,
          longitude: 72.877053,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        {(deliveryPolyline.length || pickupPolyline.length) &&
        !orderDelivered ? (
          <Polyline
            coordinates={orderPicked ? deliveryPolyline : pickupPolyline}
            strokeWidth={4}
            strokeColor={Colors.themeGreen}
          />
        ) : null}

        {!orderDelivered && getDriver()}

        {deliveryLocation.latitude && getMarker(1)}

        {storeLocation.latitude && getMarker(0)}
      </MapView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  orderDetails: state.orderReducer.orderDetails,
});

const mapDispatchToProps = {
  getDirectionsPolyline,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);
