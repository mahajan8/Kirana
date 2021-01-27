import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {orderStatus} from '../../../utils/values/Values';
import {styles} from '../styles/trackOrderInfoStyles';
import moment from 'moment';
import {commonStyles} from '../../commons/styles/commonStyles';
import UpArrow from '../../../assets/images/green_up_arrow.svg';

const TrackOrderInfoCollapsed = (props) => {
  const {
    trackingList,
    status,
    status_history,
    toggleCollapsed,
    trackStatus,
  } = props;
  let currentObj = {};

  if (status === orderStatus.ORDER_PARTIALLY_ACCEPTED) {
    // Display order Accepted in case of Partially accepted.
    currentObj = trackingList.find(
      (obj) => obj.orderStatus === orderStatus.ORDER_ACCEPTED,
    );
  } else {
    // Set currentObj to object from trackingList with corresponding status to display.
    currentObj = trackingList[trackStatus];
  }
  let {title, subTitle} = currentObj;
  let statusHistory = status_history.find((obj) => obj.status === status);

  let updatedAt = statusHistory
    ? moment(statusHistory.status_changed_on).format('lll')
    : null;

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
    <View style={[styles.rowContainer, styles.trackingInfoContainer]}>
      {renderTrackingCircle()}
      <View style={styles.trackingStatus}>
        <Text style={styles.trackingStatusLabel}>{title}</Text>
        <Text style={styles.trackingStatusSub}>
          {subTitle ? subTitle : updatedAt}
        </Text>
      </View>
      <Pressable
        style={styles.arrowIcon}
        onPress={toggleCollapsed}
        hitSlop={commonStyles.hitSlop}>
        <UpArrow />
      </Pressable>
    </View>
  );
};

export default TrackOrderInfoCollapsed;
