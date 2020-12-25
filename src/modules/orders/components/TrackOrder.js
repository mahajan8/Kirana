import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
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

let trackStatus = 1;

const TrackOrder = () => {
  let map = useRef(null);
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
        </MapView>
      </View>
      <TrackOrderInfo trackStatus={trackStatus} />
    </SafeArea>
  );
};

export default TrackOrder;
