import React, {useState, useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {styles} from '../styles/trackingStyles';
import MapView, {Marker, AnimatedRegion, Polyline} from 'react-native-maps';
import TrackMarker from '../../../assets/images/track_marker.svg';
import StoreIcon from '../../../assets/images/map_store.svg';
import HomeIcon from '../../../assets/images/map_home.svg';
import {decodePolyline} from '../../../utils/utility/Utils';
import {connect} from 'react-redux';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 30.702598;
const LONGITUDE = 76.7357713;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let start = {latitude: 19.0996905, longitude: 72.9142052};
let end = {latitude: 19.108459, longitude: 72.924694};

let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${start.latitude},${start.longitude}&destination=${end.latitude},${end.longitude}&key=AIzaSyCaZ-qdhBgi_kndrL-2CCzLCL8rLn86eUY`;

const Tracking = (props) => {
  let {trackStatus, storeName} = props;
  let map = useRef(null);
  let marker = useRef(null);

  const [markerCoordinate, setMarkerCoordinate] = useState(
    new AnimatedRegion({
      latitude: start.latitude,
      longitude: start.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  );

  const [polyline, setPolyline] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState('');

  const animate = (endCoords, duration) => {
    // markerCoordinate.stopAnimation();
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

  const animateLeg = (steps) => {
    let totalDuration = 0;
    steps.forEach((step, index) => {
      let {end_location, duration} = step;
      setTimeout(() => {
        animate(end_location, duration.value * 50);
      }, totalDuration);

      totalDuration += duration.value * 50;
    });
  };

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

  const getDriver = () => (
    <Marker.Animated coordinate={markerCoordinate} ref={marker}>
      <View style={styles.driverMarker}>
        <TrackMarker />
      </View>
    </Marker.Animated>
  );

  return (
    <View style={styles.mapView}>
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={styles.map}
        ref={map}
        region={{
          latitude: (start.latitude + end.latitude) / 2,
          longitude: (start.longitude + end.longitude) / 2,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
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