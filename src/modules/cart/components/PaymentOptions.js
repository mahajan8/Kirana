/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {getMediaUrl} from '../../../utils/utility/Utils';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/paymentOptionsStyles';
import RightArrow from '../../../assets/images/right_arrow.svg';
import Header from '../../commons/components/Header';

const wallets = [
  {name: 'Paytm', type: 'paytm'},
  {name: 'Amazon Pay', type: 'amazon'},
];

const upi = [
  {name: 'Google Pay', type: 'gpay'},
  {name: 'Enter your UPI ID', type: 'upi'},
];

const cards = [
  {type: 'card', card_number: '0000000000000000'},
  {type: 'card', card_number: '0000000000000000'},
];

const PaymentOptions = () => {
  const renderHeader = (label) => (
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>{label}</Text>
    </View>
  );

  const renderPaymentOption = (item, index) => {
    let {name, type, card_number} = item;
    let cardNumber =
      type === 'card'
        ? card_number.slice(0, 4) + '-XXXX-XXXX-' + card_number.slice(-4)
        : false;
    return (
      <Pressable
        style={styles.paymentMethodContainer}
        key={`payment${type}${index}`}>
        <Image style={styles.paymentIcon} source={{uri: getMediaUrl(null)}} />

        <View style={styles.methodNameContainer}>
          <Text style={styles.methodName}>
            {cardNumber ? cardNumber : name}
          </Text>
        </View>

        <RightArrow />
      </Pressable>
    );
  };

  return (
    <SafeArea>
      <Header
        title={'Select Payment Method'}
        subTitle={'Item total 534'}
        noShadow
        noBorder
        containerStyle={{marginBottom: 0}}
      />
      {renderHeader('Wallets')}
      {wallets.map(renderPaymentOption)}

      {renderHeader('UPI')}
      {upi.map(renderPaymentOption)}

      {renderHeader('Credit and Debit cards')}
      {cards.map(renderPaymentOption)}
      {renderPaymentOption({name: '+ Add new card', type: 'add'})}
    </SafeArea>
  );
};

export default PaymentOptions;
