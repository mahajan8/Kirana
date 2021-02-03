/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Dimensions, Animated, Platform} from 'react-native';
import {styles} from '../styles/trackingStyles';
import MapView, {Marker, AnimatedRegion, Polyline} from 'react-native-maps';
import TrackMarker from '../../../assets/images/track_marker.svg';
import StoreIcon from '../../../assets/images/map_store.svg';
import Bike from '../../../assets/images/bike.svg';
import HomeIcon from '../../../assets/images/map_home.svg';
import {decodePolyline} from '../../../utils/utility/Utils';
import {connect} from 'react-redux';
import {getDirectionsPolyline} from '../Api';
import {orderStatus} from '../../../utils/values/Values';
import EStyleSheet from 'react-native-extended-stylesheet';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
// const LATITUDE = 30.702598;
// const LONGITUDE = 76.7357713;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// let start = {latitude: 30.690865, longitude: 76.757489};
// let end = {latitude: 30.724522, longitude: 76.768347};

// let route = [
//   {latitude: 30.689255, longitude: 76.752116},
//   {latitude: 30.694215, longitude: 76.760036},
//   {latitude: 30.698167, longitude: 76.766196},
//   {latitude: 30.701152, longitude: 76.771036},
//   {latitude: 30.703926, longitude: 76.770596},
//   {latitude: 30.708592, longitude: 76.768494},
//   {latitude: 30.713762, longitude: 76.776658},
//   {latitude: 30.719773, longitude: 76.773823},
// ];

const Tracking = (props) => {
  let {trackStatus, storeName, orderDetails, currentLocation} = props;
  let map = useRef(null);
  let marker = useRef(null);
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

  const [markerCoordinate] = useState(
    new AnimatedRegion({
      latitude: 0,
      longitude: 0,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  );

  let {delivery_address_location, store_location, status} = orderDetails
    ? orderDetails
    : {};
  let orderPicked =
    status === orderStatus.ORDER_OUT_FOR_DELIVERY ? true : false;

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

      // getDirectionsFromCurrent();
    }

    return () => markerCoordinate.stopAnimation();
  }, [orderDetails]);

  useEffect(() => {
    if (storeLocation.latitude && deliveryLocation.latitude) {
      map.current.fitToCoordinates([storeLocation, deliveryLocation], {
        edgePadding:
          Platform.OS === 'ios'
            ? {top: 150, right: 150, bottom: 150, left: 150}
            : {top: 300, right: 300, bottom: 300, left: 300},
      });
    }
  }, [deliveryLocation, storeLocation]);

  useEffect(() => {
    if (currentLocation.latitude) {
      if (markerCoordinate.latitude._value) {
        markerCoordinate.stopAnimation();

        animateToCurrent();
      } else {
        markerCoordinate
          .timing({
            ...currentLocation,
            duration: 10,
            useNativeDriver: false,
          })
          .start();
      }
    }
  }, [currentLocation]);

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

  const [polyline, setPolyline] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState('');

  const animate = (endCoords, duration, bearing) => {
    // markerCoordinate.stopAnimation();
    // console.log(bearing);
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

    getDirectionsPolyline(pars, (res) => {
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

    getDirectionsPolyline(pars, (res) => {
      let {overview_polyline, legs} = res.routes[0];

      setPolyline(decodePolyline(overview_polyline.points));
      setDeliveryTime(legs[0].duration.text);
    });
  };

  const getMarker = (type = 0) => {
    let showTime =
      (trackStatus === 2 && type === 0) || (trackStatus === 3 && type === 1);
    // Get marker by address type.
    return (
      <Marker coordinate={type === 0 ? storeLocation : deliveryLocation}>
        <View style={styles.markerContainer}>
          <View>
            <TrackMarker />
            {showTime ? (
              <Text style={styles.deliveryTime}>
                {deliveryTime.split(' ')[0]}
                {'\n'}
                <Text style={styles.minutes}>{deliveryTime.split(' ')[1]}</Text>
              </Text>
            ) : type === 0 ? (
              <StoreIcon style={styles.markerIcon} />
            ) : (
              <HomeIcon style={styles.markerIcon} />
            )}
          </View>

          <View style={styles.markerLabelContainer}>
            <Text style={styles.markerLabel}>
              {type === 0 ? storeName : 'Home'}
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

  const getDriver = () => (
    <Marker.Animated
      coordinate={markerCoordinate}
      // style={{}}
      style={[{transform: [{rotate: markerRotation}]}]}
      ref={marker}>
      <View style={styles.driverMarker}>
        <Bike
          width={EStyleSheet.value('30rem')}
          height={EStyleSheet.value('30rem')}
        />
      </View>
    </Marker.Animated>
  );

  return (
    <View style={styles.mapView}>
      {/* <TouchableOpacity onPress={navigate}>
        <Text style={{alignSelf: 'center'}}>Press</Text>
      </TouchableOpacity> */}
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={styles.map}
        ref={map}
        // region={{
        //   latitude: (start.latitude + end.latitude) / 2,
        //   longitude: (start.longitude + end.longitude) / 2,
        //   latitudeDelta: 0.03,
        //   longitudeDelta: 0.03,
        // }}
        // onRegionChange={(region) => setRegion(region)}
      >
        {polyline.length ? (
          <Polyline coordinates={polyline} strokeWidth={2} />
        ) : null}

        {getDriver()}

        {deliveryLocation.latitude && getMarker(1)}

        {storeLocation.latitude && getMarker(0)}
      </MapView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  orderDetails: state.orderReducer.orderDetails,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);
