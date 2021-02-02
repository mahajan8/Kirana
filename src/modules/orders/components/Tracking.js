/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Dimensions, Animated, Platform} from 'react-native';
import {styles} from '../styles/trackingStyles';
import MapView, {Marker, AnimatedRegion, Polyline} from 'react-native-maps';
import TrackMarker from '../../../assets/images/track_marker.svg';
import StoreIcon from '../../../assets/images/map_store.svg';
import Car from '../../../assets/images/car.svg';
import HomeIcon from '../../../assets/images/map_home.svg';
import {decodePolyline} from '../../../utils/utility/Utils';
import {connect} from 'react-redux';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 30.702598;
const LONGITUDE = 76.7357713;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let start = {latitude: 30.690865, longitude: 76.757489};
let end = {latitude: 30.724522, longitude: 76.768347};

let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${start.latitude},${start.longitude}&destination=${end.latitude},${end.longitude}&key=AIzaSyCaZ-qdhBgi_kndrL-2CCzLCL8rLn86eUY`;

const Tracking = (props) => {
  let {trackStatus, storeName} = props;
  let map = useRef(null);
  let marker = useRef(null);
  const [currentRotation, setCurrentRotation] = useState('0deg');
  const [newRotation, setNewRotation] = useState('0deg');
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    map.current.fitToCoordinates([start, end], {
      edgePadding:
        Platform.OS === 'ios'
          ? {top: 150, right: 150, bottom: 150, left: 150}
          : {top: 300, right: 300, bottom: 300, left: 300},
    });
    // getPolyline();
    return markerCoordinate.stopAnimation();
  }, []);

  const [markerCoordinate, setMarkerCoordinate] = useState(
    new AnimatedRegion({
      latitude: start.latitude,
      longitude: start.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  );

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
  };

  // Get Polyline for Map between 2 points
  const getPolyline = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let {overview_polyline, legs} = res.routes[0];

        setPolyline(decodePolyline(overview_polyline.points));
        animateLeg(legs[0].steps);
        setDeliveryTime(legs[0].duration.text);
      });
  };

  const getMarker = (type = 0) => {
    let showTime =
      (trackStatus === 2 && type === 0) || (trackStatus === 3 && type === 1);
    // Get marker by address type.
    return (
      <Marker coordinate={type === 0 ? start : end}>
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
        <Car width={50} height={50} rotate={40} />
      </View>
    </Marker.Animated>
  );

  return (
    <View style={styles.mapView}>
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

        {/* {getDriver()} */}

        {getMarker(1)}

        {getMarker(0)}
      </MapView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  orderDetails: state.orderReducer.orderDetails,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);
