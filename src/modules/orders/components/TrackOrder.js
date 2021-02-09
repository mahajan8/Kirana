/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/trackOrderStyles';
import TrackOrderInfo from './TrackOrderInfo';
import {connect} from 'react-redux';
import MapOrderRejectedModal from './MapOrderRejectedModal';
import {getOrderDetails} from '../Api';
import TrackInfoShimmer from './TrackInfoShimmer';
import {setOrderDetails} from '../OrderActions';
import {Actions} from 'react-native-router-flux';
import Tracking from './Tracking';
import PubNub from 'pubnub';
import {AppConfig} from '../../../config/AppConfig';
import {environment} from '../../../config/EnvConfig';
import {orderStatus} from '../../../utils/values/Values';
import store from '../../../utils/Store';

// TrackingStatus ->
// 0 - Placed
// 1 - Accepted
// 2 - Rider On the Way
// 3 - Picked Up
// 4 - Delivered
// 5 - Rejected

const statusUpdate = 'ORDER_STATUS_UPDATE';
const driverStatus = 'DRIVER_STATUS_UPDATE';

// Socket Config
const pubnub = new PubNub({
  publishKey: AppConfig[environment].pubnubPublishKey,
  subscribeKey: AppConfig[environment].pubnutSubscribeKey,
  subscribeRequestTimeout: 60000,
  presenceTimeout: 122,
});

const TrackOrder = (props) => {
  let {orderDetails, selectedOrderId} = props.orderReducer;
  let {store_name} = orderDetails ? orderDetails : {};
  let publishTimerId = useRef(null);

  const [showRejectedModal, setShowRejectedModal] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [channels] = useState([props.userDetails.id]);

  useEffect(() => {
    // getPolyline();
    let pars = {
      order_id: selectedOrderId,
    };
    props.getOrderDetails(pars, (startTime) => {
      //pubnub history call for getting latest location of already dispatched/on the way order's
      pubnub.fetchMessages(
        {
          channels: [channels],
          // start: startTime,
          // end: moment().unix() * 10000000,
          count: 200,
        },
        (status, response) => {
          if (!status.error && response) {
            let {id} = store.getState().orderReducer.orderDetails;
            let payload = response.channels[channels];
            payload = payload.filter(
              (item) =>
                item.message.type === driverStatus &&
                item.message.payload.order.id === id,
            );
            if (payload.length) {
              const latestPayload = payload.reduce((prev, current) =>
                +prev.timetoken > +current.timetoken ? prev : current,
              );
              const {latitude, longitude} = latestPayload.message.payload;
              setCurrentLocation({
                latitude,
                longitude,
              });
            }
          }
        },
      );
    });

    return () => {
      let detailsRoute = Actions.state.routes.some(
        (obj) => obj.routeName === 'orderDetails',
      );
      if (!detailsRoute) {
        props.setOrderDetails(null);
      }
    };
  }, []);

  useEffect(() => {
    // pubnub periodic publish for we fast
    if (
      (orderDetails?.status === orderStatus.ORDER_DELIVERY_ASSIGNED ||
        orderDetails?.status === orderStatus.ORDER_OUT_FOR_DELIVERY) &&
      orderDetails?.delivery.call_for_driver_status &&
      !publishTimerId.current
    ) {
      publishTimerId.current = setInterval(() => {
        pubnub.publish({
          message: {
            type: 'GET_DRIVER_LOCATION',
            payload: {
              delivery: orderDetails.delivery,
              user_id: props.userDetails.id,
            },
          },
          channel: orderDetails.channel,
        });
      }, 30000);
    }
  }, [orderDetails]);
  useEffect(() => {
    // Subscribe to channels and add listener for Socket Change
    let listener = {message: handleMessage};
    pubnub.subscribe({channels});
    pubnub.addListener(listener);

    return () => {
      // Unsubscribe channels and remove listener when component unmounts
      clearInterval(publishTimerId.current);
      pubnub.unsubscribe({channels});
      pubnub.removeListener(listener);
    };
  }, [pubnub, channels]);

  const handleMessage = (event) => {
    // Handler function for Socket Order Changes
    const {type, payload} = event.message;
    let {id} = store.getState().orderReducer.orderDetails;
    if (payload.order.id === id) {
      if (type === statusUpdate) {
        props.setOrderDetails(payload.order);

        if (payload.order.status === orderStatus.ORDER_REJECTED) {
          setShowRejectedModal(true);
        }
      } else if (type === driverStatus) {
        const {latitude, longitude} = payload;
        if (latitude && longitude) {
          setCurrentLocation({
            latitude: payload.latitude,
            longitude: payload.longitude,
          });
        }
      }
    }
  };

  return (
    <SafeArea>
      <Header
        type={1}
        titleComp={
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{Strings.trackOrder}</Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {store_name}
            </Text>
          </View>
        }
        headerRight={<Text style={styles.needHelp}>{Strings.needHelp}</Text>}
      />

      <Tracking storeName={store_name} currentLocation={currentLocation} />

      {orderDetails ? <TrackOrderInfo /> : <TrackInfoShimmer />}
      {/* <Button onPress={getPolyline} /> */}
      <MapOrderRejectedModal
        visible={showRejectedModal}
        setVisible={setShowRejectedModal}
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  orderReducer: state.orderReducer,
  userDetails: state.homeReducer.userDetails,
});

const mapDispatchToProps = {
  getOrderDetails,
  setOrderDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackOrder);
