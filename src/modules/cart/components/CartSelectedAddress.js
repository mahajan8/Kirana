import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/cartSelectedAddressStyles';
import AddressDownArrow from '../../../assets/images/cart_address_down_arrow.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';

const CartSelectedAddress = () => {
  return (
    <View style={[styles.container, styles.rowContainer]}>
      <AddressDownArrow />

      <View style={styles.addAddressContainer}>
        <Text style={styles.addAddressHeading}>
          {Strings.addAddressToProceed}
        </Text>
        <Text style={styles.addAddressSub}>{Strings.pleaseAddAddress}</Text>
      </View>

      <Button
        label={Strings.add}
        Style={styles.addButton}
        labelStyle={styles.addButtonLabel}
      />
    </View>
  );
};

export default CartSelectedAddress;
