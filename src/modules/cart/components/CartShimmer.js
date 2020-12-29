import React from 'react';
import {View} from 'react-native';
import StoreProductPlaceholder from '../../home/components/StoreProductPlaceholder';
import {styles} from '../styles/cartShimmerStyles';

const CartShimmer = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.rowContainer, styles.storeNameContainer]}>
          <View style={styles.heading} />
          <View style={styles.addMore} />
        </View>
        <StoreProductPlaceholder count={3} />
      </View>

      <View style={styles.seperator} />

      <View style={[styles.rowContainer, styles.container]}>
        <View style={styles.instructions} />
      </View>

      <View style={styles.seperator} />

      <View style={styles.detailsContainer}>
        <View style={styles.deliveryTime} />
      </View>

      <View style={styles.seperator} />

      <View style={styles.container}>
        <View style={styles.heading} />
        <View style={[styles.borderedContainer, styles.detailsContainer]}>
          <View style={styles.savings} />
        </View>

        {/* Sub total */}
        <View style={[styles.rowContainer, styles.priceContainer]}>
          <View style={styles.label} />
          <View style={styles.price} />
        </View>

        <View style={styles.priceSeperator} />

        {/* Delivery Charge */}
        <View style={[styles.rowContainer, styles.priceContainer]}>
          <View style={styles.label} />
          <View style={styles.price} />
        </View>

        <View style={styles.priceSeperator} />

        {/* Grand Total */}
        <View style={[styles.rowContainer, styles.priceContainer]}>
          <View style={styles.grandLabel} />
          <View style={styles.grandPrice} />
        </View>
      </View>
    </View>
  );
};

export default CartShimmer;
