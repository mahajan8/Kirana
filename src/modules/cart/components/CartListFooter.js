import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/cartStyles';
import InstructionsIcon from '../../../assets/images/cart_instructions.svg';
import CartPaymentDetails from './CartPaymentDetails';

const CartListFooter = (props) => {
  let {
    instructions,
    setInstructions,
    estimatedTime,
    isDeliverable,
    addressType,
    loading,
  } = props;

  return (
    <View style={styles.footerContainer}>
      <View style={styles.seperator} />

      <View style={[styles.rowContainer, styles.container]}>
        <InstructionsIcon />
        <TextInput
          style={styles.instructionsInput}
          value={instructions}
          onChangeText={setInstructions}
          placeholder={Strings.cartInstructionsPlaceholder}
        />
      </View>

      <View style={styles.seperator} />

      <View style={styles.detailsContainer}>
        {loading ? (
          <View style={styles.deliveryTimeShimmer} />
        ) : (
          <Text style={styles.detailsText}>
            {isDeliverable
              ? `${Strings.estimatedDeliveryTime} ${Math.ceil(
                  estimatedTime,
                )} minutes`
              : addressType
              ? Strings.cartNotDeliverable(addressType)
              : Strings.pleaseSelectAddress}
          </Text>
        )}
      </View>

      <View style={styles.seperator} />

      <CartPaymentDetails />
    </View>
  );
};

export default CartListFooter;
