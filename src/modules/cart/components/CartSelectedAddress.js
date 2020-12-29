import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../styles/cartSelectedAddressStyles';
import AddressDownArrow from '../../../assets/images/cart_address_down_arrow.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {connect} from 'react-redux';
import {addressTypes} from '../../../utils/values/Values';
import {getKeyByValue} from '../../../utils/utility/Utils';
import ErrorIcon from '../../../assets/images/error_icon.svg';
import {createOrder} from '../Api';
import RazorpayCheckout from 'react-native-razorpay';
import {Colors} from '../../../utils/values/Colors';
import {AppConfig} from '../../../config/AppConfig';
import {environment} from '../../../config/EnvConfig';
import {Actions} from 'react-native-router-flux';

const CartSelectedAddress = (props) => {
  const {location, addresses, deliverable, totalAmount = 0} = props;

  let address = addresses.find((obj) => obj.id === location.id);
  const {first_name, mobile} = props.userDetails;
  const placeOrder = () => {
    const pars = {
      address_id: location.id,
      payment_mode: 10,
    };
    props.createOrder(pars, (orderId) => {
      let options = {
        description: '',
        image: 'https://cdn.kiranakart.app/static/logo/splash-logo-2.png',
        currency: 'INR',
        key: AppConfig[environment].razorpayKey,
        amount: String(totalAmount),
        name: first_name || '',
        order_id: orderId,
        prefill: {
          contact: mobile,
          name: first_name || '',
        },
        theme: {color: Colors.themeGreen},
      };
      RazorpayCheckout.open(options)
        .then((data) => {
          // handle success
          Actions.popTo('_home');
          alert(`Success: ${data.razorpay_payment_id}`);
        })
        .catch((error) => {
          // handle failure
          Actions.popTo('_home');
          alert(`Error: ${error.code} | ${error.description}`);
        });
    });
  };
  return (
    <View>
      <View
        style={[
          styles.container,
          styles.rowContainer,
          !deliverable && styles.notDeliverableContainer,
        ]}>
        {!location.id || deliverable ? <AddressDownArrow /> : <ErrorIcon />}

        <View style={styles.addAddressContainer}>
          {location.id && address ? (
            <View>
              {deliverable && (
                <Text style={styles.addAddressHeading}>
                  {Strings.deliverTo}{' '}
                  <Text style={styles.addressType}>
                    {getKeyByValue(addressTypes, location.type)}
                  </Text>
                </Text>
              )}
              <Text
                style={[
                  styles.addAddressSub,
                  !deliverable && styles.notDeliverable,
                ]}>
                {deliverable
                  ? address.block_address + ' ' + address.landmark
                  : Strings.cartNotDeliverable}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.addAddressHeading}>
                {Strings.addAddressToProceed}
              </Text>
              <Text style={styles.addAddressSub}>
                {Strings.pleaseAddAddress}
              </Text>
            </View>
          )}
        </View>

        {location.id && deliverable ? (
          <Pressable onPress={props.addAddress}>
            <Text style={styles.change}>{Strings.change}</Text>
          </Pressable>
        ) : (
          <Button
            label={Strings.add}
            Style={styles.addButton}
            labelStyle={styles.addButtonLabel}
            onPress={props.addAddress}
          />
        )}
      </View>
      {location.id && deliverable && (
        <View style={styles.paymentButtonContainer}>
          <Button
            Style={styles.payButton}
            label={Strings.pay + ' ' + Strings.currency + ' ' + totalAmount}
            onPress={placeOrder}
          />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  addresses: state.navigationReducer.addresses,
  userDetails: state.homeReducer.userDetails,
});

const mapDispatchToProps = {
  createOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartSelectedAddress);
