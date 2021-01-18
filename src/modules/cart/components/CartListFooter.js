import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/cartStyles';
import InstructionsIcon from '../../../assets/images/cart_instructions.svg';
import CartPaymentDetails from './CartPaymentDetails';

const CartListFooter = (props) => {
  let {instructions, setInstructions, estimatedTime} = props;

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
        <Text style={styles.detailsText}>
          {Strings.estimatedDeliveryTime} {Math.ceil(estimatedTime)}
          {' minutes'}
        </Text>
      </View>

      <View style={styles.seperator} />

      <CartPaymentDetails />
    </View>
  );
};

export default CartListFooter;
