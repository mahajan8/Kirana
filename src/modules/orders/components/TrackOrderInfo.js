/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Animated, Easing} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/trackOrderInfoStyles';
import GreenPaidCheck from '../../../assets/images/map_paid_successful.svg';
import PurpleCheck from '../../../assets/images/purple_check.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {orderStatus, paymentStatus} from '../../../utils/values/Values';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {setOrderDetails, setSelectedOrderId} from '../OrderActions';
import {usePubNub} from 'pubnub-react';
import TrackOrderInfoExpanded from './TrackOrderInfoExpanded';
import TrackOrderInfoCollapsed from './TrackOrderInfoCollapsed';

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

const statusUpdate = 'ORDER_STATUS_UPDATE';

const TrackOrderInfo = (props) => {
  let {orderDetails} = props;
  const PubNubClient = usePubNub();

  let {
    item_quantity_count,
    final_amount,
    status,
    status_history,
    payment,
    id,
  } = orderDetails ? orderDetails : {};

  const [collapsed, setCollapsed] = useState(true);
  const [animCollapsed] = useState(new Animated.Value(0));
  const [trackStatus, setTrackStatus] = useState(-1);
  const [channels] = useState([props.userDetails.id]);

  useEffect(() => {
    let i = trackingList.findIndex((obj) => obj.orderStatus === status);
    setTrackStatus(i);
  }, [status]);

  useEffect(() => {
    let listener = {message: handleMessage};
    PubNubClient.subscribe({channels});
    PubNubClient.addListener(listener);

    return () => {
      PubNubClient.unsubscribe({channels});
      PubNubClient.removeListener(listener);
    };
  }, [PubNubClient, channels]);

  const handleMessage = (event) => {
    // Handler function for Socket Order Changes
    const {type, payload} = event.message;

    if (type === statusUpdate && payload.order.id === id) {
      props.setOrderDetails(payload.order);

      if (payload.order.status === orderStatus.ORDER_REJECTED) {
        props.orderRejected();
      }
    }
  };

  const getOrderTrackingStatus = () => {
    return (
      <Animated.View style={{maxHeight: maxHeight}}>
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
    // Render payment status
    let {SUCCESS, REFUNDED, REFUND_IN_PROGRESS} = paymentStatus;
    let Icon = GreenPaidCheck;
    let label = Strings.paidSuccessfully;

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

    return (
      <View style={styles.rowContainer}>
        <Text style={styles.paymentStatus}>{label}</Text>

        <Icon
          style={styles.checkIcon}
          width={EStyleSheet.value('26rem')}
          height={EStyleSheet.value('26rem')}
        />
      </View>
    );
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
