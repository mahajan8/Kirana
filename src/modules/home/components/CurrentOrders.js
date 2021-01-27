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

    return (
      <View
        style={[
          styles.container,
          awaitingConfirmation && styles.greenBackground,
        ]}>
        {renderTrackingCircle()}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            {multiple
              ? Strings.activeOrdersCount(currentOrders.length)
              : `${Strings.yourOrderIs}: ${getKeyByValue(
                  orderStatusLabels,
                  singleOrder.status,
                )}`}
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
          bordered
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
