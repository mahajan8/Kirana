import React from 'react';
import {View, Text} from 'react-native';
import Clock from '../../../assets/images/clock.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';
import FromIcon from '../../../assets/images/order_location_from.svg';
import ToIcon from '../../../assets/images/order_location_to.svg';
import {getKeyByValue} from '../../../utils/utility/Utils';
import {addressTypes} from '../../../utils/values/Values';

const OrderAddressTile = (props) => {
  let {storeLocation, deliveryLocation, storeName, addressType} = props;
  return (
    <View style={styles.rowContainer}>
      {/* Restaurant Details  */}
      <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
        <FromIcon style={styles.icons} />
        <View>
          <Text style={styles.name}>{storeName}</Text>
          <Text style={styles.locationText} numberOfLines={1}>
            {storeLocation}
          </Text>
        </View>
      </View>
      <View style={styles.dottedLine} />
      {/* User Address to Deliver Details  */}
      <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
        <ToIcon style={styles.icons} />
        <View>
          <Text style={styles.name}>
            {addressType
              ? getKeyByValue(addressTypes, addressType)
              : 'The Baker’s Dozen'}
          </Text>
          <Text style={styles.locationText} numberOfLines={1}>
            {deliveryLocation}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    marginRight: '10rem',
  },
  name: {
    fontSize: '11rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
  },
  locationText: {
    fontFamily: Fonts.regular,
    fontSize: '9rem',
    color: Colors.lightGray,
    width: '118rem',
  },
  storeDetailsContainer: {
    flex: 1,
  },
  seperator: {
    height: '1vrem',
    backgroundColor: '#cacaca',
    width: '100%',
    marginTop: '14vrem',
    marginBottom: '10vrem',
  },
  dottedLine: {
    height: '100%',
    borderWidth: 0.8,
    borderStyle: 'dashed',
    marginHorizontal: '16rem',
    borderRadius: 1,
    borderColor: Colors.darkGray,
  },
});

export default OrderAddressTile;
