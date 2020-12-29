import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/cartStyles';

const CartPaymentDetails = (props) => {
  let {total_cost_price, third_party_delivery_fee, delivery_fee} = props.cart;

  let total = total_cost_price + delivery_fee;

  return (
    <View style={styles.container}>
      <Text style={styles.grayHeading}>{Strings.paymentDetails}</Text>
      <View style={[styles.borderedContainer, styles.detailsContainer]}>
        <Text style={styles.detailsText}>
          {Strings.youSaved} {Strings.currency}{' '}
          {third_party_delivery_fee - delivery_fee} {Strings.onThisBill}
        </Text>
      </View>

      {/* Sub total */}
      <View style={[styles.rowContainer, styles.priceContainer]}>
        <Text style={styles.priceLabel}>{Strings.subTotal}</Text>
        <Text style={styles.amount}>
          {Strings.currency} {total_cost_price}
        </Text>
      </View>

      <View style={styles.priceSeperator} />

      {/* Delivery Charge */}
      <View style={[styles.rowContainer, styles.priceContainer]}>
        <Text style={styles.priceLabel}>{Strings.deliveryCharge}</Text>
        <View style={styles.rowContainer}>
          <Text style={[styles.amount, styles.slicedAmount]}>
            {Strings.currency} {third_party_delivery_fee}
          </Text>
          <Text style={styles.amount}>
            {Strings.currency} {delivery_fee}
          </Text>
        </View>
      </View>

      <View style={styles.priceSeperator} />

      {/* Grand Total */}
      <View style={[styles.rowContainer, styles.priceContainer]}>
        <Text style={styles.grandTotalLabel}>{Strings.grandTotal}</Text>
        <Text style={styles.grandTotalAmount}>
          {Strings.currency} {total}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartPaymentDetails);
