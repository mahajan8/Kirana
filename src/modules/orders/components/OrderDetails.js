import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import OrderHeader from './OrderHeader';
import {styles} from '../../orders/styles/orderDetailStyles';
import OrderItem from './OrderItem';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import AlertModal from '../../commons/components/AlertModal';

//OrderStatus -->
// 0 - New
// 1 - OnRoute
// 2 - Completed
// 3 - Cancelled
// 4 - Rejected

let orderStatus = 0;

let orderItems = [
  {
    name: 'Fortune Sunlite Refined Sunflower Oil (Pouch)',
    count: 10,
    price: 324,
    quantity: 1,
    packaging: 2,
  },
  {
    name: 'Fortune Sunlite (Pouch)',
    count: 7,
    price: 324,
    quantity: 1,
    packaging: 2,
  },
  {
    name: 'Fortune Sunlite Refined Sunflower ',
    count: 4,
    price: 324,
    quantity: 250,
    packaging: 1,
  },
  {
    name: 'Fortune Sunlite Refined Sunflower Pouch)',
    count: 2,
    price: 324,
    quantity: 100,
    packaging: 3,
  },
];

let deliveryCharge = 20;
let refundAmount = -50;

const OrderDetails = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);

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

  const getTotal = () => {
    let total = 0;
    orderItems.forEach((obj) => (total += obj.count * obj.price));

    return total;
  };

  return (
    <SafeArea>
      <FlatList
        data={orderItems}
        keyExtractor={(item, index) => `OrderItem${index}`}
        renderItem={({item}) => <OrderItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <OrderHeader status={orderStatus} />
            {renderHeader(Strings.yourItems)}
          </View>
        }
        ListFooterComponent={
          <View style={styles.listFooter}>
            <View style={styles.instructionsContainer}>
              <Text style={styles.instructionsLabel}>
                {Strings.instructions}
              </Text>
              <Text style={styles.instructionsText}>Give me extra bags</Text>
            </View>
            {renderHeader(Strings.paymentDetails)}
            <View style={styles.priceInfoContainer}>
              {renderPrice(Strings.subTotal, getTotal())}
              {renderPrice(Strings.deliveryCharge, deliveryCharge)}
              {renderPrice(Strings.refundAmount, refundAmount)}
              <View style={styles.priceRowContainer}>
                <Text style={styles.grandTotal}>{Strings.grandTotal}</Text>
                <Text style={styles.grandTotalAmount}>
                  {Strings.currency}{' '}
                  {getTotal() + deliveryCharge + refundAmount}
                </Text>
              </View>
            </View>
          </View>
        }
      />
      <View style={styles.buttonContainer}>
        {orderStatus === 0 ? (
          <View style={styles.buttonsRowContainer}>
            <Button
              label={Strings.cancelOrder}
              Style={styles.rowButton}
              labelStyle={styles.buttonLabel}
              bordered
            />
            <Button
              label={Strings.trackOrder}
              Style={styles.rowButton}
              labelStyle={styles.buttonLabel}
            />
          </View>
        ) : (
          <Button
            label={Strings.reorderItems}
            labelStyle={styles.buttonLabel}
          />
        )}
      </View>
      <AlertModal
        visible={showCancelModal}
        setVisible={setShowCancelModal}
        heading={Strings.cancelOrder}
        desc={Strings.cancelOrderConfirm}
        label1={Strings.no}
        label2={Strings.yesCancel}
      />
    </SafeArea>
  );
};

export default OrderDetails;
