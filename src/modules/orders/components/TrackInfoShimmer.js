import React from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/trackInfoShimmerStyles';
import UpArrow from '../../../assets/images/green_up_arrow.svg';

const TrackInfoShimmer = () => {
  const renderTrackingCircle = () => (
    <View style={styles.trackingCircleContainer}>
      <View style={styles.line} />
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.dottedLine} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.rowContainer, styles.trackingInfoContainer]}>
        {renderTrackingCircle()}

        <View style={styles.trackingStatus}>
          <View style={styles.trackingStatusLabel} />

          <View style={styles.trackingStatusSub} />
        </View>

        <UpArrow style={styles.arrowIcon} />
      </View>

      <View style={[styles.rowContainer, styles.orderInfoContainer]}>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.itemCountText} />

            <View style={styles.dot} />

            <View style={styles.price} />
          </View>

          <Text style={styles.orderDetails}>
            {Strings.orderDetails} {'>'}
          </Text>
        </View>

        <View style={styles.paymentStatus} />
      </View>
    </View>
  );
};

export default TrackInfoShimmer;
