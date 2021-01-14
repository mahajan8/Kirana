import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Dimensions, Platform} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
  Polyline,
} from 'react-native-maps';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/trackOrderStyles';
import TrackOrderInfo from './TrackOrderInfo';
import TrackMarker from '../../../assets/images/track_marker.svg';
import {decodePolyline} from '../../../utils/utility/Utils';
import {poly} from 'react-native/Libraries/Animated/src/Easing';

// TrackingStatus ->
// 0 - Placed
// 1 - Accepted
// 2 - Rider On the Way
// 2 - Picked Up
// 3 - Delivered
// 5 - Rejected

let trackStatus = 2;
let url =
  'https://maps.googleapis.com/maps/api/directions/json?origin=30.678186,76.740683&destination=30.712063,76.745232&key=AIzaSyCaZ-qdhBgi_kndrL-2CCzLCL8rLn86eUY';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 30.702598;
const LONGITUDE = 76.7357713;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let start = {latitude: 30.678186, longitude: 76.740683};
let end = {latitude: 30.712063, longitude: 76.745232};

const TrackOrder = () => {
  let map = useRef(null);
  let marker = useRef(null);

  const [markerCoordinate, setMarkerCoordinate] = useState(
    new AnimatedRegion({
      latitude: 30.677655,
      longitude: 76.745384,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  );

  const [polyline, setPolyline] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState('');

  useEffect(() => {
    // getPolyline();
  }, []);

  const animate = (endCoords, duration) => {
    const newCoordinate = {
      latitude: endCoords.lat,
      longitude: endCoords.lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };

    if (Platform.OS === 'android') {
      if (marker.current) {
        marker.current.animateMarkerToCoordinate(newCoordinate, duration);
      }
    } else {
      markerCoordinate
        .timing({
          ...newCoordinate,
          duration: duration,
          useNativeDriver: false,
        })
        .start();
    }
  };

  const animateLegs = (legs) => {
    legs.map((obj) => {
      obj.steps.forEach(async (step, index) => {
        let {start_location, end_location} = step;
        await animate(end_location, 1000);
      });
    });
  };

  const getPolyline = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPolyline(decodePolyline(res.routes[0].overview_polyline.points));
        // animateLegs(res.routes[0].legs);
        setDeliveryTime(res.routes[0].legs[0].duration.text);
      });
  };

  return (
    <SafeArea>
      <Header
        type={1}
        titleComp={
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{Strings.trackOrder}</Text>
            <Text style={styles.subTitle}>The Baker’s Dozen</Text>
          </View>
        }
        headerRight={<Text style={styles.needHelp}>{Strings.needHelp}</Text>}
      />
      <View style={styles.mapView}>
        <MapView
          // provider={PROVIDER_GOOGLE}
          style={styles.map}
          ref={map}
          region={{
            latitude: 30.702598,
            longitude: 76.7357713,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
          // onRegionChange={(region) => setRegion(region)}
        >
          {polyline.length ? (
            <Polyline
              coordinates={[
                start, // optional
                ...polyline,
                end, // optional
              ]}
              strokeWidth={2}
            />
          ) : null}
          {/* <Marker.Animated coordinate={markerCoordinate} ref={marker}>
            <View style={styles.markerContainer}>
              <TrackMarker />
            </View>
          </Marker.Animated> */}
          {/* <Marker coordinate={start}>
            <View style={styles.markerContainer}>
              <TrackMarker style={styles.marker} />
            </View>
            <View style={styles.markerLabelContainer}>
              <Text style={styles.markerLabel}>The Baker’s Dozen</Text>
            </View>
          </Marker>

          <Marker coordinate={end}>
            <View style={styles.markerContainer}>
              <TrackMarker style={styles.marker} />
              <View style={styles.deliveryTimeContainer}>
                <Text style={styles.deliveryTime}>
                  {deliveryTime.split(' ')[0]}{' '}
                  <Text style={styles.minutes}>
                    {deliveryTime.split(' ')[1]}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.markerLabelContainer}>
              <Text style={styles.markerLabel}>Home</Text>
            </View>
          </Marker> */}

          <Marker coordinate={end}>
            <View style={styles.markerContainer}>
              <TrackMarker style={styles.marker} />
            </View>
            <View style={styles.deliveryTimeContainer}>
              <Text style={styles.deliveryTime}>
                {deliveryTime.split(' ')[0]}{' '}
                <Text style={styles.minutes}>{deliveryTime.split(' ')[1]}</Text>
              </Text>
            </View>
            <View style={styles.markerLabelContainer}>
              <Text style={styles.markerLabel}>Home</Text>
            </View>
          </Marker>
        </MapView>
      </View>
      <TrackOrderInfo trackStatus={trackStatus} />
      {/* <Button onPress={getPolyline} /> */}
    </SafeArea>
  );
};

export default TrackOrder;
