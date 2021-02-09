import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Back from '../../../assets/images/back-arrow.svg';
import {styles} from '../styles/orderDetailShimmerStyles';
import OrderItemShimmer from './OrderItemShimmer';
import FromIcon from '../../../assets/images/order_location_from.svg';
import ToIcon from '../../../assets/images/order_location_to.svg';

const OrderDetailShimmer = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Back
            width={EStyleSheet.value('$spacingNormalMedium')}
            height={EStyleSheet.value('$spacingExtraMedium')}
          />
          <View style={styles.helpText} />
        </View>

        <View style={styles.headerRow}>
          <View style={styles.orderId} />
          <View style={styles.orderStatus} />
        </View>
        <View style={styles.orderTime} />
      </View>

      <View style={[styles.rowContainer, styles.addressContainer]}>
        {/* Restaurant Details  */}
        <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
          <FromIcon style={styles.icons} />
          <View>
            <View style={styles.addressName} />
            <View style={styles.locationText} />
          </View>
        </View>
        <View style={styles.dottedLine} />
        {/* User Address to Deliver Details  */}
        <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
          <ToIcon style={styles.icons} />
          <View>
            <View style={styles.addressName} />
            <View style={styles.locationText} />
          </View>
        </View>
      </View>

      <View style={styles.orderItemList}>
        <View style={styles.orderItemsListText} />
      </View>

      <OrderItemShimmer count={2} />

      <View style={styles.fullSeperator} />

      <View style={styles.orderItemList}>
        <View style={styles.orderItemsListText} />
      </View>

      <View style={styles.fullSeperator} />
      <View style={[styles.chargesContainer, styles.rowContainer]}>
        <View style={styles.chargesText} />
        <View style={styles.charges} />
      </View>
      <View style={[styles.chargesContainer, styles.rowContainer]}>
        <View style={styles.chargesText} />
        <View style={styles.charges} />
      </View>
      <View style={[styles.chargesContainer, styles.rowContainer]}>
        <View style={styles.totalText} />
        <View style={styles.charges} />
      </View>
    </View>
  );
};

export default OrderDetailShimmer;
