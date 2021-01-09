import React from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/cartStyles';

const CartListHeader = (props) => {
  let {overWeight, storeName, addMore} = props;

  return (
    <View>
      {overWeight && (
        <View style={[styles.overWeightContainer, styles.detailsContainer]}>
          <Text style={[styles.detailsText, styles.overWeightText]}>
            {Strings.overWeightCartText(overWeight)}
          </Text>
        </View>
      )}
      <View style={styles.container}>
        <View style={[styles.rowContainer, styles.storeNameContainer]}>
          <Text style={styles.grayHeading}>{storeName}</Text>
          <Text onPress={addMore} style={styles.addMore}>
            {Strings.plusAddMore}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartListHeader;
