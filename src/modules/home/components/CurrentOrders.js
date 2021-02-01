import React from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {getKeyByValue} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {orderStatus, orderStatusLabels} from '../../../utils/values/Values';
import Button from '../../commons/components/Button';
import {setSelectedOrderId} from '../../orders/OrderActions';
import {styles} from '../styles/currentOrdersStyle';

const CurrentOrders = (props) => {
  const renderTrackingCircle = () => (
    <View style={styles.trackingCircleContainer}>
      <View style={styles.line} />
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.dottedLine} />
    </View>
  );

  let {currentOrders} = props;

  if (currentOrders.length) {
    let multiple = currentOrders.length > 1 ? true : false;

    let singleOrder = currentOrders[0];

    let awaitingConfirmation = currentOrders.some(
      (obj) => obj.status === orderStatus.ORDER_UPDATED,
    );

    const getTitle = () => {
      const {
        ORDER_PLACED,
        ORDER_ACCEPTED,
        ORDER_PARTIALLY_ACCEPTED,
        ORDER_UPDATED,
        ORDER_OUT_FOR_DELIVERY,
        ORDER_DELIVERY_ASSIGNED,
      } = orderStatus;

      switch (singleOrder.status) {
        case ORDER_PLACED:
          return Strings.orderPlaced;
        case ORDER_ACCEPTED:
        case ORDER_PARTIALLY_ACCEPTED:
          return Strings.orderAccepted;
        case ORDER_UPDATED:
          return Strings.currentOrderModified;
        case ORDER_DELIVERY_ASSIGNED:
          return Strings.currentOrderPicking;
        case ORDER_OUT_FOR_DELIVERY:
          return Strings.currentOrderPicked;
      }
    };

    return (
      <View
        style={[
          styles.container,
          awaitingConfirmation && styles.awaitingBackground,
        ]}>
        {renderTrackingCircle()}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            {multiple
              ? Strings.activeOrdersCount(currentOrders.length)
              : getTitle()}
          </Text>
          <Text style={styles.subTitle}>
            {multiple
              ? awaitingConfirmation
                ? Strings.multipleApprovalNeeded
                : Strings.multipleStores
              : singleOrder.store_name}
          </Text>
        </View>
        <Button
          label={
            multiple
              ? Strings.viewOrders
              : awaitingConfirmation
              ? Strings.approveOrder
              : Strings.trackOrder
          }
          Style={styles.buttonStyle}
          labelStyle={styles.buttonLabel}
          onPress={() => {
            if (multiple) {
              Actions.myOrders();
            } else if (awaitingConfirmation) {
              Actions.orderDetails();
              props.setSelectedOrderId(singleOrder.id);
            } else {
              Actions.trackOrder();
              props.setSelectedOrderId(singleOrder.id);
            }
          }}
        />
      </View>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  currentOrders: state.homeReducer.currentOrders,
});

const mapDispatchToProps = {
  setSelectedOrderId,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentOrders);
