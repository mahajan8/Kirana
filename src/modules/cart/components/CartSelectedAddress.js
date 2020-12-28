import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../styles/cartSelectedAddressStyles';
import AddressDownArrow from '../../../assets/images/cart_address_down_arrow.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {connect} from 'react-redux';
import {addressTypes} from '../../../utils/values/Values';
import {getKeyByValue} from '../../../utils/utility/Utils';

const CartSelectedAddress = (props) => {
  const {location, addresses} = props;

  let address = addresses.find((obj) => obj.id === location.id);
  return (
    <View style={[styles.container, styles.rowContainer]}>
      <AddressDownArrow />

      <View style={styles.addAddressContainer}>
        {location.id && address ? (
          <View>
            <Text style={styles.addAddressHeading}>
              {Strings.deliverTo}{' '}
              <Text style={styles.addressType}>
                {getKeyByValue(addressTypes, location.type)}
              </Text>
            </Text>
            <Text style={styles.addAddressSub}>
              {address.block_address} {address.landmark}
            </Text>
          </View>
        ) : (
          <View>
            <Text style={styles.addAddressHeading}>
              {Strings.addAddressToProceed}
            </Text>
            <Text style={styles.addAddressSub}>{Strings.pleaseAddAddress}</Text>
          </View>
        )}
      </View>

      {location.id ? (
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
  );
};

const mapStateToProps = (state) => ({
  addresses: state.navigationReducer.addresses,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartSelectedAddress);
