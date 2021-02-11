import React from 'react';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import {styles} from '../styles/cartSelectedAddressStyles';
import AddressDownArrow from '../../../assets/images/cart_address_down_arrow.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {connect} from 'react-redux';
import {addressTypes} from '../../../utils/values/Values';
import {getKeyByValue, ripple} from '../../../utils/utility/Utils';
import ErrorIcon from '../../../assets/images/error_icon.svg';
import {Colors} from '../../../utils/values/Colors';

const CartSelectedAddress = (props) => {
  const {
    location,
    addresses,
    deliverable,
    totalAmount = 0,
    confirmOrder,
    loading,
    payDisable,
    cartLocation,
  } = props;

  let address =
    cartLocation && addresses.find((obj) => obj.id === cartLocation.id);

  return (
    <View>
      <View
        style={[
          styles.container,
          styles.rowContainer,
          !deliverable && styles.notDeliverableContainer,
        ]}>
        {!cartLocation || deliverable ? <AddressDownArrow /> : <ErrorIcon />}

        <View style={styles.addAddressContainer}>
          {cartLocation && address ? (
            <View>
              {deliverable && (
                <Text style={styles.addAddressHeading}>
                  {Strings.deliverTo}{' '}
                  <Text style={styles.addressType}>
                    {getKeyByValue(addressTypes, cartLocation.type)}
                  </Text>
                </Text>
              )}
              <Text
                style={[
                  styles.addAddressSub,
                  !deliverable && styles.notDeliverable,
                ]}>
                {/* Check for address deliverable  */}
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

        {cartLocation && deliverable ? (
          // Change button to change address
          <Pressable
            onPress={props.addAddress}
            android_ripple={ripple}
            style={styles.changeButton}>
            <Text style={styles.change}>{Strings.change}</Text>
          </Pressable>
        ) : (
          // Add Button if address not deliverable
          <Button
            label={Strings.add}
            Style={styles.addButton}
            labelStyle={styles.addButtonLabel}
            onPress={props.addAddress}
          />
        )}
      </View>

      {cartLocation && deliverable && (
        <View style={styles.paymentButtonContainer}>
          {loading ? (
            <ActivityIndicator
              color={Colors.themeGreen}
              size={'large'}
              style={styles.loader}
            />
          ) : (
            <Button
              Style={styles.payButton}
              label={Strings.pay + ' ' + Strings.currency + ' ' + totalAmount}
              onPress={confirmOrder}
              disabled={payDisable}
            />
          )}
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  addresses: state.navigationReducer.addresses,
  cartLocation: state.cartReducer.cartLocation,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartSelectedAddress);
