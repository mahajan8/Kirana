/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
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
import {PubNubProvider} from 'pubnub-react';
import {AppConfig} from '../../../config/AppConfig';
import {environment} from '../../../config/EnvConfig';

// TrackingStatus ->
// 0 - Placed
// 1 - Accepted
// 2 - Rider On the Way
// 3 - Picked Up
// 4 - Delivered
// 5 - Rejected
let trackStatus = 2;

const pubnub = new PubNub({
  publishKey: AppConfig[environment].pubnubPublishKey,
  subscribeKey: AppConfig[environment].pubnutSubscribeKey,
});

const TrackOrder = (props) => {
  let {store_name} = props.orderDetails ? props.orderDetails : {};

  const [showRejectedModal, setShowRejectedModal] = useState(false);

  useEffect(() => {
    // getPolyline();
    let pars = {
      order_id: props.orderId,
    };
    props.getOrderDetails(pars);

    return () => {
      let detailsRoute = Actions.state.routes.some(
        (obj) => obj.routeName === 'orderDetails',
      );
      if (!detailsRoute) {
        props.setOrderDetails(null);
      }
    };
  }, []);

  return (
    <SafeArea>
      <PubNubProvider client={pubnub}>
        <Header
          type={1}
          titleComp={
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{Strings.trackOrder}</Text>
              <Text style={styles.subTitle}>{store_name}</Text>
            </View>
          }
          headerRight={<Text style={styles.needHelp}>{Strings.needHelp}</Text>}
        />

        <Tracking trackStatus={trackStatus} storeName={store_name} />

        {props.orderDetails ? (
          <TrackOrderInfo trackStatus={trackStatus} order={props.order} />
        ) : (
          <TrackInfoShimmer />
        )}
        {/* <Button onPress={getPolyline} /> */}
        <MapOrderRejectedModal
          visible={showRejectedModal}
          setVisible={setShowRejectedModal}
        />
      </PubNubProvider>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  orderDetails: state.orderReducer.orderDetails,
});

const mapDispatchToProps = {
  getOrderDetails,
  setOrderDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackOrder);
