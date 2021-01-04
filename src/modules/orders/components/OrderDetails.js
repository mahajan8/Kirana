/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import OrderHeader from './OrderHeader';
import {styles} from '../../orders/styles/orderDetailStyles';
import OrderItem from './OrderItem';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import AlertModal from '../../commons/components/AlertModal';
import {orderStatus} from '../../../utils/values/Values';
import {connect} from 'react-redux';
import {cancelOrder, getOrderDetails} from '../Api';
import {setOrderDetails} from '../OrderActions';
import {Actions} from 'react-native-router-flux';
import OrderDetailShimmer from './OrderDetailShimmer';
import Loader from '../../commons/components/Loader';

const OrderDetails = (props) => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const {orderDetails} = props;

  let {
    instructions,
    final_amount,
    created_on,
    status,
    delivery_fee,
    charged_amount,
    product_list,
    store_name,
  } = orderDetails ? orderDetails : {};

  useEffect(() => {
    fetchDetails();
    return () => props.setOrderDetails(null);
  }, []);

  const fetchDetails = () => {
    let pars = {
      order_id: props.orderId,
    };

    props.getOrderDetails(pars);
  };

  const renderHeader = (label) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{label}</Text>
    </View>
  );

  const renderPrice = (label, amount) => (
    <View style={styles.priceRowContainer}>
      <Text style={styles.priceLabel}>{label}</Text>
      <Text style={[styles.priceLabel, styles.amount]}>
        {amount < 0 && '-'} {Strings.currency}{' '}
        {amount > 0 ? amount : amount - 2 * amount}
      </Text>
    </View>
  );

  const cancel = () => {
    setShowCancelModal(false);

    let pars = {
      order_id: props.orderId,
    };

    props.cancelOrder(pars, () => {
      props.refresh();
      Actions.replace('orderCancelled');
    });
  };

  return (
    <SafeArea>
      <FlatList
        data={product_list ? product_list : []}
        keyExtractor={(item, index) => `OrderItem${index}`}
        renderItem={({item}) => <OrderItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        ListHeaderComponent={
          orderDetails && (
            <View style={styles.listHeader}>
              <OrderHeader
                item={orderDetails}
                //   refundComplete
              />
              {renderHeader(Strings.yourItems)}
            </View>
          )
        }
        ListFooterComponent={
          orderDetails && (
            <View style={styles.listFooter}>
              {instructions && (
                <View style={styles.instructionsContainer}>
                  <Text style={styles.instructionsLabel}>
                    {Strings.instructions}
                  </Text>
                  <Text style={styles.instructionsText}>{instructions}</Text>
                </View>
              )}

              {renderHeader(Strings.paymentDetails)}

              <View style={styles.priceInfoContainer}>
                {renderPrice(Strings.subTotal, charged_amount)}
                {renderPrice(Strings.deliveryCharge, delivery_fee)}
                {renderPrice(Strings.refundAmount, -50)}
                <View style={styles.priceRowContainer}>
                  <Text style={styles.grandTotal}>{Strings.grandTotal}</Text>
                  <Text style={styles.grandTotalAmount}>
                    {Strings.currency} {final_amount}
                  </Text>
                </View>
              </View>
            </View>
          )
        }
        ListEmptyComponent={<OrderDetailShimmer />}
      />
      {orderDetails && (
        <View style={styles.buttonContainer}>
          {status === orderStatus.ORDER_PLACED ? (
            <View style={styles.buttonsRowContainer}>
              <Button
                label={Strings.cancelOrder}
                Style={styles.rowButton}
                labelStyle={styles.buttonLabel}
                bordered
                onPress={() => setShowCancelModal(true)}
              />
              <Button
                label={Strings.trackOrder}
                Style={styles.rowButton}
                labelStyle={styles.buttonLabel}
              />
            </View>
          ) : (
            <Button
              label={
                status === orderStatus.ORDER_DISPATCHED
                  ? Strings.trackOrder
                  : status === orderStatus.ORDER_DELIVERED
                  ? Strings.reorderItems
                  : Strings.tryOtherStores
              }
              labelStyle={styles.buttonLabel}
            />
          )}
        </View>
      )}
      <AlertModal
        visible={showCancelModal}
        setVisible={setShowCancelModal}
        heading={Strings.cancelOrder}
        desc={Strings.cancelOrderConfirm + store_name + '?'}
        label1={Strings.no}
        label2={Strings.yesCancel}
        button1Press={() => setShowCancelModal(false)}
        button2Press={cancel}
      />
      {orderDetails && props.loading && (
        <View style={styles.loaderContainer}>
          <Loader show={true} />
        </View>
      )}
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  orderDetails: state.orderReducer.orderDetails,
});

const mapDispatchToProps = {
  getOrderDetails,
  setOrderDetails,
  cancelOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
