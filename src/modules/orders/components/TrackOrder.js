import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/trackOrderStyles';
import TrackOrderInfo from './TrackOrderInfo';
import TrackMarker from '../../../assets/images/track_marker.svg';

// TrackingStatus ->
// 0 - Placed
// 1 - Accepted
// 2 - Rider On the Way
// 2 - Picked Up
// 3 - Delivered
// 5 - Rejected
let url =
  'https://maps.googleapis.com/maps/api/directions/json?origin=30.678186,76.740683&destination=30.712063,76.745232&key=AIzaSyCaZ-qdhBgi_kndrL-2CCzLCL8rLn86eUY';
let trackStatus = 2;

const TrackOrder = () => {
  let map = useRef(null);
  const [line, setLine] = useState([]);

  const buttonPress = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let data = decode(res.routes[0].overview_polyline.points);
        console.log(data);
        setLine(data);
      });
  };

  const decode = (t, e) => {
    for (
      var n,
        o,
        u = 0,
        l = 0,
        r = 0,
        d = [],
        h = 0,
        i = 0,
        a = null,
        c = Math.pow(10, e || 5);
      u < t.length;

    ) {
      (a = null), (h = 0), (i = 0);
      do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
      while (a >= 32);
      (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
      do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
      while (a >= 32);
      (o = 1 & i ? ~(i >> 1) : i >> 1),
        (l += n),
        (r += o),
        d.push([l / c, r / c]);
    }
    return (d = d.map(function (t) {
      return {latitude: t[0], longitude: t[1]};
    }));
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
          provider={PROVIDER_GOOGLE}
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
          <Marker coordinate={{latitude: 30.677655, longitude: 76.745384}}>
            <TrackMarker />
          </Marker>
          <Marker coordinate={{latitude: 30.72961, longitude: 76.702469}}>
            <TrackMarker />
          </Marker>
          {line.length ? (
            <Polyline
              coordinates={[
                {latitude: '30.678186', longitude: '76.740683'},
                ...line,
                {latitude: '30.712063', longitude: '76.745232'},
              ]}
              strokeWidth={2}
            />
          ) : null}
        </MapView>
      </View>
      {/* <TrackOrderInfo trackStatus={trackStatus} /> */}
      <Button
        onPress={() => {
          buttonPress();
        }}
      />
    </SafeArea>
  );
};

export default TrackOrder;
