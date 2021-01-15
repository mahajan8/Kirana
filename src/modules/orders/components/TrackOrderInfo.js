import React, {useState} from 'react';
import {View, Text, Pressable, Animated, Easing} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/trackOrderInfoStyles';
import UpArrow from '../../../assets/images/green_up_arrow.svg';
import GreenCheck from '../../../assets/images/green_circle_tick.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {orderStatus, paymentStatus} from '../../../utils/values/Values';
import {useEffect} from 'react/cjs/react.development';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {setSelectedOrderId} from '../OrderActions';
import {commonStyles} from '../../commons/styles/commonStyles';

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
  {
    orderStatus: orderStatus.ORDER_CANCELLED,
    title: Strings.orderCancelled,
    subTitle: null,
  },
  {
    orderStatus: orderStatus.ORDER_UPDATED,
    title: Strings.awaitingConfirmation,
    subTitle: null,
  },
];

const TrackOrderInfo = (props) => {
  let {order} = props;

  let {
    item_quantity_count,
    final_amount,
    status,
    status_history,
    payment,
    id,
  } = order;

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

  const getOrderTrackingStatus = () => {
    return (
      <Animated.View style={{maxHeight: maxHeight}}>
        {trackStatus >= 0
          ? collapsed
            ? showCollapsedState()
            : showExpandedState()
          : null}
      </Animated.View>
    );
  };

  const showCollapsedState = () => {
    let {title, subTitle} = trackingList[trackStatus];
    let statusHistory = status_history.find((obj) => obj.status === status);

    let updatedAt = statusHistory
      ? moment(statusHistory.status_changed_on).format('lll')
      : null;

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
          onPress={toggleCollapsedState}
          hitSlop={commonStyles.hitSlop}>
          <UpArrow />
        </Pressable>
      </View>
    );
  };

  const showExpandedState = () => {
    let trackingArray = trackingList.slice(0, 5);
    let {ORDER_UPDATED, ORDER_REJECTED, ORDER_CANCELLED} = orderStatus;

    let currentObj = trackingList.find((obj) => obj.orderStatus === status);

    if (status === ORDER_UPDATED) {
      trackingArray.splice(1, 0, currentObj);
    } else if (status === ORDER_REJECTED || status === ORDER_CANCELLED) {
      trackingArray.splice(1, trackingArray.length, currentObj);
    }

    currentObj = trackingArray.findIndex((obj) => obj.orderStatus === status);

    return (
      <View style={styles.expandedContainer}>
        {trackingArray.map((item, index) => {
          let current = currentObj === index ? true : false;
          let statusHistory = status_history.find(
            (obj) => obj.status === status,
          );

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
          hitSlop={commonStyles.hitSlop}
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
    outputRange: [EStyleSheet.value('73vrem'), EStyleSheet.value('225vrem')],
  });

  const getPaymentStatus = () => {
    let {SUCCESS, REFUNDED, REFUND_IN_PROGRESS} = paymentStatus;

    switch (payment.status) {
      case SUCCESS:
        return Strings.paidSuccessfully;
      case REFUND_IN_PROGRESS:
        return Strings.refundInProgress;
      case REFUNDED:
        return Strings.refundComplete;
      default:
        return Strings.paidSuccessfully;
    }
  };

  return (
    <View style={styles.container}>
      {getOrderTrackingStatus()}

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
          <Pressable
            onPress={() => {
              props.setSelectedOrderId(id);
              Actions.orderDetails();
            }}>
            <Text style={styles.orderDetails}>
              {Strings.orderDetails} {'>'}
            </Text>
          </Pressable>
        </View>

        <View>
          {payment ? (
            <Text style={styles.paymentStatus}>{getPaymentStatus()}</Text>
          ) : null}
          {/* TODO: Add Check Image */}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setSelectedOrderId,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackOrderInfo);
