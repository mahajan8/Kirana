import React from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/cartStyles';

const CartPaymentDetails = (props) => {
  const {deliveryFee, slicedAmount, total} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.grayHeading}>{Strings.paymentDetails}</Text>
      <View style={[styles.borderedContainer, styles.detailsContainer]}>
        <Text style={styles.detailsText}>
          {Strings.youSaved} {Strings.currency} {slicedAmount - deliveryFee}{' '}
          {Strings.onThisBill}
        </Text>
      </View>

      {/* Sub total */}
      <View style={[styles.rowContainer, styles.priceContainer]}>
        <Text style={styles.priceLabel}>{Strings.subTotal}</Text>
        <Text style={styles.amount}>
          {Strings.currency} {total}
        </Text>
      </View>

      <View style={styles.priceSeperator} />

      {/* Delivery Charge */}
      <View style={[styles.rowContainer, styles.priceContainer]}>
        <Text style={styles.priceLabel}>{Strings.deliveryCharge}</Text>
        <View style={styles.rowContainer}>
          <Text style={[styles.amount, styles.slicedAmount]}>
            {Strings.currency} {slicedAmount}
          </Text>
          <Text style={styles.amount}>
            {Strings.currency} {deliveryFee}
          </Text>
        </View>
      </View>

      <View style={styles.priceSeperator} />

      {/* Grand Total */}
      <View style={[styles.rowContainer, styles.priceContainer]}>
        <Text style={styles.grandTotalLabel}>{Strings.grandTotal}</Text>
        <Text style={styles.grandTotalAmount}>
          {Strings.currency} {total + deliveryFee}
        </Text>
      </View>
    </View>
  );
};

export default CartPaymentDetails;
