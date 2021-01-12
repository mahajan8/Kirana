/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, memo} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import ProductBox from './ProductBox';
import Button from '../../commons/components/Button';
import {styles} from '../styles/storeProductsListingStyles';
import {ripple} from '../../../utils/utility/Utils';

const List = (props) => {
  let {list, label, onMorePress, noHeader, onPress, hideBorderTop} = props;
  const [horizontalList, setHorizontalList] = useState([]);

  useEffect(() => {
    setHorizontalList(
      list.length > 5 ? [...list.slice(0, 5), {viewAll: true}] : list,
    );
  }, []);
  const renderHeader = () =>
    !noHeader && (
      <View style={styles.listHeader}>
        <Text style={styles.listLabel}>{label}</Text>
        <Pressable android_ripple={ripple} onPress={onMorePress && onMorePress}>
          <Text style={styles.viewMore}>
            {Strings.view}{' '}
            {/* {list && (list.length > 5 ? list.length - 5 + ' ' : null)} */}
            {Strings.more}
          </Text>
        </Pressable>
      </View>
    );

  const renderProduct = (item, index) => (
    <ProductBox key={`product${item + index}`} onPress={onPress} item={item} />
  );

  return (
    <View>
      <View
        style={[styles.listContainer, hideBorderTop && {borderTopWidth: 0}]}>
        {renderHeader()}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {horizontalList.map((item, index) => {
            if (item.viewAll) {
              return (
                <View style={styles.productContainer} key={`viewAll`}>
                  <Button
                    Style={styles.viewAllButton}
                    labelStyle={styles.viewAllLabel}
                    label={Strings.viewAll}
                    bordered
                    onPress={onMorePress && onMorePress}
                  />
                </View>
              );
            } else {
              return renderProduct(item, index);
            }
          })}
        </ScrollView>
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

function arePropsEqual(prevProps, nextProps) {
  return prevProps.id === nextProps.id;
}
export default memo(List, arePropsEqual);
