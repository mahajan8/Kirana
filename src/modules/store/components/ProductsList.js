/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
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
import {connect} from 'react-redux';
import {getStoreProducts} from '../Api';

let products = [
  {
    product_name: 'Name',
    product_packaging: 2,
    product_quantity: 50,
    store_price: 100,
    product_images: [],
  },
  {
    product_name: 'Name',
    product_packaging: 2,
    product_quantity: 50,
    store_price: 100,
    product_images: [],
  },
  {
    product_name: 'Name',
    product_packaging: 2,
    product_quantity: 50,
    store_price: 100,
    product_images: [],
  },
  {
    product_name: 'Name',
    product_packaging: 2,
    product_quantity: 50,
    store_price: 100,
    product_images: [],
  },
];

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

  const [storeProducts, setStoreProducts] = useState(null);

  useEffect(() => {
    let pars = {
      start: 0,
      limit: 10,
      sorts: [{key: 'SORT_BY_ID', value: false, context: null}],
      conditions: [
        {
          key: 'SEARCH_BY_STORE_ID',
          value: '5fdaf974b6a38a8eafa410b0',
          context: null,
        },
        {
          key: 'SEARCH_BY_SUB_CATEGORY_IN',
          value: ['5fca768aa941d902e71e310c'],
          context: null,
        },
      ],
    };

    props.getStoreProducts(pars, (data) => {
      console.log(data);
      setStoreProducts(data.results);
    });
  }, []);

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
          list={storeProducts}
          onMorePress={() =>
            Actions.productsList({
              subCategoryName,
            })
          }
          vertical
          onPress={(item) => Actions.productDetails({subCategoryName, item})}
        />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  getStoreProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
