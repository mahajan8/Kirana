import React, {useState} from 'react';
import {View, Text, Pressable, Animated, Easing} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/trackOrderInfoStyles';
import UpArrow from '../../../assets/images/green_up_arrow.svg';
import GreenCheck from '../../../assets/images/green_circle_tick.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {orderStatus} from '../../../utils/values/Values';
import {useEffect} from 'react/cjs/react.development';
import moment from 'moment';

let trackingList = [
  {
    orderStatus: orderStatus.ORDER_PLACED,
    title: Strings.orderPlaced,
    subTitle: null,
  },
  {
    orderStatus: orderStatus.ORDER_ACCEPTED,
    title: Strings.orderAccepted,
    subTitle: Strings.orderAcceptedSub,
  },
  {
    orderStatus: orderStatus.ORDER_DISPATCHED,
    title: Strings.partnedOnWay,
    subTitle: Strings.onTheWaySub,
  },
  {
    orderStatus: orderStatus.ORDER_OUT_FOR_DELIVERY,
    title: Strings.orderPicked,
    subTitle: Strings.orderPickedSub,
  },
  {
    orderStatus: orderStatus.ORDER_DELIVERED,
    title: Strings.orderDelivered,
    subTitle: null,
  },
  {
    orderStatus: orderStatus.ORDER_REJECTED,
    title: Strings.orderRejected,
    subTitle: null,
  },
];

const TrackOrderInfo = (props) => {
  let {order} = props;

  let {item_quantity_count, final_amount, status, status_history} = order;

  const [collapsed, setCollapsed] = useState(true);
  const [animCollapsed, setAnimCollapsed] = useState(new Animated.Value(0));
  const [trackStatus, setTrackStatus] = useState(-1);

  useEffect(() => {
    let i = trackingList.findIndex((obj) => obj.orderStatus === status);
    setTrackStatus(i);
  }, [status]);

  const renderTrackingCircle = () => (
    <View style={styles.trackingCircleContainer}>
      <View style={styles.line} />
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.dottedLine} />
    </View>
  );

  const showCollapsedState = () => {
    let {title, subTitle} = trackingList[trackStatus];
    let statusHistory = status_history.find((obj) => obj.status === status);

    let updatedAt = moment(statusHistory.status_changed_on).format('lll');

    return (
      <View style={[styles.rowContainer, styles.trackingInfoContainer]}>
        {renderTrackingCircle()}
        <View style={styles.trackingStatus}>
          <Text style={styles.trackingStatusLabel}>{title}</Text>
          <Text style={styles.trackingStatusSub}>
            {subTitle ? subTitle : updatedAt}
          </Text>
        </View>
        <Pressable style={styles.arrowIcon} onPress={toggleCollapsedState}>
          <UpArrow />
        </Pressable>
      </View>
    );
  };

  const showExpandedState = () => {
    let trackingArray = trackingList.slice(0, 5);
    return (
      <View style={styles.expandedContainer}>
        {trackingArray.map((item, index) => {
          let current = trackStatus === index ? true : false;
          let statusHistory = status_history.find(
            (obj) => obj.status === status,
          );

          let updatedAt = moment(statusHistory.status_changed_on).format('lll');
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
                ) : index < trackStatus ? (
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
                    current
                      ? styles.expandedCurrentStatus
                      : styles.expandedStatus
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
          style={styles.expandedArrowIcon}
          onPress={toggleCollapsedState}>
          <UpArrow style={styles.downArrow} />
        </Pressable>
      </View>
    );
  };

  const toggleCollapsedState = () => {
    if (collapsed) {
      setCollapsed(false);
    }

    Animated.timing(animCollapsed, {
      toValue: animCollapsed._value ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => !collapsed && setCollapsed(true));
  };

  const maxHeight = animCollapsed.interpolate({
    inputRange: [0, 1],
    outputRange: [EStyleSheet.value('73vrem'), EStyleSheet.value('200vrem')],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{maxHeight: maxHeight}}>
        {collapsed && trackStatus >= 0
          ? showCollapsedState()
          : showExpandedState()}
      </Animated.View>

      <View style={[styles.rowContainer, styles.orderInfoContainer]}>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.itemCountText}>
              {item_quantity_count} items
            </Text>
            <View style={styles.dot} />
            <Text style={styles.price}>
              {Strings.currency} {final_amount}
            </Text>
          </View>

          {/* TODO: Add Right arrow image if needed */}
          <Text style={styles.orderDetails}>
            {Strings.orderDetails} {'>'}
          </Text>
        </View>

        <View>
          <Text style={styles.paymentStatus}>Paid Sucessfully</Text>
          {/* TODO: Add Check Image */}
        </View>
      </View>
    </View>
  );
};

export default TrackOrderInfo;
