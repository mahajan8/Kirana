import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {ripple} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {commonStyles} from '../../commons/styles/commonStyles';
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

          <Pressable
            onPress={addMore}
            android_ripple={ripple}
            hitSlop={commonStyles.hitSlop}>
            <Text style={styles.addMore}>{Strings.plusAddMore}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartListHeader;
