import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productSubStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import Search from '../../../assets/images/search.svg';
import Filter from '../../../assets/images/filter.svg';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import CartCounter from '../../commons/components/CartCounter';
import List from './StoreProductsListing';

let products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const renderHeader = (label, list) => (
  <View style={styles.listHeader}>
    <Text style={styles.listLabel}>{label}</Text>
    <Text style={styles.viewMore}>
      {Strings.view} {list && (list.length > 5 ? list.length - 5 + ' ' : null)}
      {Strings.more}
    </Text>
  </View>
);

const ProductsList = (props) => {
  let {subCategoryName} = props;

  return (
    <SafeArea>
      <Header
        title={subCategoryName}
        headerRight={
          <View style={styles.rowContainer}>
            <Search
              style={styles.headerIcon}
              width={EStyleSheet.value('16rem')}
              height={EStyleSheet.value('16rem')}
            />
            <TouchableOpacity onPress={Actions.filters}>
              <Filter
                style={styles.headerIcon}
                width={EStyleSheet.value('14rem')}
                height={EStyleSheet.value('14rem')}
              />
            </TouchableOpacity>
            <CartCounter />
          </View>
        }
        type={1}
      />

      <View style={{flex: 1}}>
        <List
          noShadow
          noHeader
          list={products}
          onMorePress={() =>
            Actions.productsList({
              subCategoryName,
            })
          }
          vertical
          onPress={() => Actions.productDetails({subCategoryName})}
        />
      </View>
    </SafeArea>
  );
};

export default ProductsList;
