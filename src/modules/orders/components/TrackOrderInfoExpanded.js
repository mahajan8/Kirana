import React from 'react';
import {View, Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GreenCheck from '../../../assets/images/green_circle_tick.svg';
import {orderStatus} from '../../../utils/values/Values';
import {styles} from '../styles/trackOrderInfoStyles';
import moment from 'moment';
import {commonStyles} from '../../commons/styles/commonStyles';
import UpArrow from '../../../assets/images/green_up_arrow.svg';

const TrackOrderInfoExpanded = (props) => {
  const {trackingList, status, status_history, toggleCollapsed} = props;

  let trackingArray = trackingList.slice(0, 5);
  let {
    ORDER_UPDATED,
    ORDER_REJECTED,
    ORDER_CANCELLED,
    ORDER_PARTIALLY_ACCEPTED,
    ORDER_ACCEPTED,
  } = orderStatus;

  let currentObj = trackingList.find((obj) => obj.orderStatus === status);

  if (status === ORDER_UPDATED) {
    trackingArray.splice(1, 0, currentObj);
  } else if (status === ORDER_REJECTED || status === ORDER_CANCELLED) {
    trackingArray.splice(1, trackingArray.length, currentObj);
  }

  if (status === ORDER_PARTIALLY_ACCEPTED) {
    currentObj = trackingArray.findIndex(
      (obj) => obj.orderStatus === ORDER_ACCEPTED,
    );
  } else {
    currentObj = trackingArray.findIndex((obj) => obj.orderStatus === status);
  }

  return (
    <View style={styles.expandedContainer}>
      {trackingArray.map((item, index) => {
        let current = currentObj === index ? true : false;
        let statusHistory = status_history.find((obj) => obj.status === status);

        let updatedAt = statusHistory
          ? moment(statusHistory.status_changed_on).format('lll')
          : null;
        return (
          <View
            style={[styles.expandedStatusContainer]}
            key={`OrderTrackStatus${index}`}>
            <View style={styles.trackingCircleContainer}>
              {current ? (
                <View style={styles.outerCircle}>
                  <View style={styles.innerCircle} />
                  <View style={styles.transparentCurrentCircle} />
                </View>
              ) : index < currentObj ? (
                <GreenCheck
                  width={EStyleSheet.value('14rem')}
                  height={EStyleSheet.value('14rem')}
                />
              ) : (
                <View style={styles.upcomingStatusCircle} />
              )}
              {index !== trackingArray.length - 1 && (
                <View style={current ? styles.dottedLine : styles.line} />
              )}
            </View>
            <View>
              <Text
                style={
                  current ? styles.expandedCurrentStatus : styles.expandedStatus
                }>
                {item.title}
              </Text>
              {current && (
                <Text style={styles.expandedCurrentSub}>
                  {item.subTitle ? item.subTitle : updatedAt}
                </Text>
              )}
            </View>
          </View>
        );
      })}
      <Pressable
        hitSlop={commonStyles.hitSlop}
        style={styles.expandedArrowIcon}
        onPress={toggleCollapsed}>
        <UpArrow style={styles.downArrow} />
      </Pressable>
    </View>
  );
};

export default TrackOrderInfoExpanded;
