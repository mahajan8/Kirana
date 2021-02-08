/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Animated, Easing, Linking} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/trackOrderInfoStyles';
import GreenPaidCheck from '../../../assets/images/map_paid_successful.svg';
import PurpleCheck from '../../../assets/images/purple_check.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {orderStatus, paymentStatus} from '../../../utils/values/Values';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {setOrderDetails, setSelectedOrderId} from '../OrderActions';
import TrackOrderInfoExpanded from './TrackOrderInfoExpanded';
import TrackOrderInfoCollapsed from './TrackOrderInfoCollapsed';
import Phone from '../../../assets/images/order_detail_call.svg';

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
    orderStatus: orderStatus.ORDER_DELIVERY_ASSIGNED,
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
  {
    orderStatus: orderStatus.ORDER_PARTIALLY_ACCEPTED,
    title: Strings.orderAccepted,
    subTitle: null,
  },
];

const TrackOrderInfo = (props) => {
  let {orderDetails} = props;

  let {
    item_quantity_count,
    final_amount,
    status,
    status_history,
    payment,
    delivery,
  } = orderDetails ? orderDetails : {};

  const [collapsed, setCollapsed] = useState(true);
  const [animCollapsed] = useState(new Animated.Value(0));
  const [trackStatus, setTrackStatus] = useState(-1);

  useEffect(() => {
    let i = trackingList.findIndex((obj) => obj.orderStatus === status);
    setTrackStatus(i);
  }, [status]);

  const getOrderTrackingStatus = () => {
    return (
      <Animated.View
        style={[{maxHeight: maxHeight}, styles.collapsibleContainer]}>
        {trackStatus >= 0 ? (
          collapsed ? (
            <TrackOrderInfoCollapsed
              trackingList={trackingList}
              status={status}
              status_history={status_history}
              toggleCollapsed={toggleCollapsedState}
              trackStatus={trackStatus}
            />
          ) : (
            <TrackOrderInfoExpanded
              trackingList={trackingList}
              status={status}
              status_history={status_history}
              toggleCollapsed={toggleCollapsedState}
            />
          )
        ) : null}
      </Animated.View>
    );
  };

  const toggleCollapsedState = () => {
    if (collapsed) {
      setCollapsed(false);
    }
    // Toggle Collapsed status and animate maxHeight of Order status view.

    Animated.timing(animCollapsed, {
      toValue: animCollapsed._value ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => !collapsed && setCollapsed(true));
  };

  const maxHeight = animCollapsed.interpolate({
    inputRange: [0, 1],
    outputRange: [EStyleSheet.value('100vrem'), EStyleSheet.value('250vrem')],
  });

  const getPaymentStatus = () => {
    // Render payment status
    let {SUCCESS, REFUNDED, REFUND_IN_PROGRESS} = paymentStatus;
    let Icon = GreenPaidCheck;
    let label = Strings.paidSuccessfully;

    // Set icon and label w.r.t payment status
    if (payment) {
      switch (payment.status) {
        case SUCCESS:
          Icon = GreenPaidCheck;
          label = Strings.paidSuccessfully;
          break;
        case REFUND_IN_PROGRESS:
          Icon = PurpleCheck;
          label = Strings.refundInProgress;
          break;
        case REFUNDED:
          Icon = PurpleCheck;
          label = Strings.refundComplete;
          break;
      }
    }

    // Return selected icon and label to display payment status
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.paymentStatus}>{label}</Text>

        {Icon && (
          <Icon
            style={styles.checkIcon}
            width={EStyleSheet.value('26rem')}
            height={EStyleSheet.value('26rem')}
          />
        )}
      </View>
    );
  };

  const deliveryInfo = () => {
    // Render Delivery Agent Info
    let {ORDER_DELIVERY_ASSIGNED, ORDER_OUT_FOR_DELIVERY} = orderStatus;
    if (
      (status === ORDER_DELIVERY_ASSIGNED ||
        status === ORDER_OUT_FOR_DELIVERY) &&
      delivery.property
    ) {
      let {rider_name, rider_contact} = delivery.property;
      return (
        <View style={[styles.deliveryPartnerInfo, styles.rowContainer]}>
          {/* <Image
            source={{uri: getMediaUrl(null)}}
            style={styles.deliveryPartnerImage}
          /> */}
          <View style={styles.deliveryPartnerNameContainer}>
            <Text style={styles.deliveryPartnerName}>{rider_name}</Text>
            <Text style={styles.deliveryPartner}>
              {Strings.deliveryPartner}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              Linking.openURL(`tel:+91${rider_contact}`);
            }}>
            <Phone
              width={EStyleSheet.value('14rem')}
              height={EStyleSheet.value('14rem')}
            />
          </Pressable>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {getOrderTrackingStatus()}
      {deliveryInfo()}

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
              Actions.orderDetails();
            }}>
            <Text style={styles.orderDetails}>
              {Strings.orderDetails} {'>'}
            </Text>
          </Pressable>
        </View>

        <View>{payment ? getPaymentStatus() : null}</View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  orderDetails: state.orderReducer.orderDetails,
  userDetails: state.homeReducer.userDetails,
});

const mapDispatchToProps = {
  setSelectedOrderId,
  setOrderDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackOrderInfo);
