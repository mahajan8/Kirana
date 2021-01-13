/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Pressable, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productSubStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import Search from '../../../assets/images/search.svg';
import Filter from '../../../assets/images/filter.svg';
import ActiveFilter from '../../../assets/images/active-filter.svg';
import {connect} from 'react-redux';
import {searchStoreProducts} from '../Api';
import ProductBox from './ProductBox';
import ListPlaceHolder from './ListPlaceHolder';
import Loader from '../../commons/components/Loader';
import {clearProducts} from '../StoreActions';
import CartHeader from '../../commons/components/CartHeader';
import {ripple} from '../../../utils/utility/Utils';

let defaultFilters = {brands: [], categories: [], price_sort: null};

const ProductsList = (props) => {
  let {subCategoryName, subCategoryId} = props;
  const [endReachCallable, setEndReachCallable] = useState(true);
  const [filters, setFilters] = useState(defaultFilters);

  const {products, totalProductCount, storeDetails} = props.storeReducer;

  useEffect(() => {
    props.clearProducts();
    getProducts();

    return () => props.clearProducts();
  }, [filters]);

  const getProducts = (start = 0) => {
    let pars = {
      start,
      limit: 10,
      sorts: [],
      conditions: [
        {
          key: 'SEARCH_BY_STORE_ID',
          value: storeDetails.id,
          context: null,
        },
        {
          key: 'SEARCH_BY_SUB_CATEGORY_IN',
          value: [subCategoryId],
          context: null,
        },
      ],
    };

    let {brands, price_sort} = filters;

    if (brands.length) {
      pars.conditions = [
        ...pars.conditions,
        {key: 'SEARCH_BY_BRAND_IN', value: brands, context: null},
      ];
      pars.filter = true;
    }

    if (price_sort !== null) {
      pars.sorts = [
        ...pars.sorts,
        {
          key: 'SORT_BY_PRICE',
          value: price_sort === 0 ? true : false,
          context: null,
        },
      ];
      pars.filter = true;
    }
    props.searchStoreProducts(pars);
  };

  const renderLoader = () => (
    <View style={styles.listLoaderContainer}>
      <Loader show={products.length ? props.loading : false} />
    </View>
  );

  let FilterIcon =
    filters.brands.length || filters.price_sort !== null
      ? ActiveFilter
      : Filter;

  return (
    <SafeArea>
      <CartHeader
        title={subCategoryName}
        headerRight={
          <View style={styles.rowContainer}>
            <Pressable
              onPress={Actions.searchProducts}
              android_ripple={ripple}
              style={styles.headerSearchIcon}>
              <Search
                width={EStyleSheet.value('16rem')}
                height={EStyleSheet.value('16rem')}
              />
            </Pressable>
            <Pressable
              android_ripple={ripple}
              style={styles.headerFilterIcon}
              onPress={() => {
                Actions.filters({
                  saveFilters: setFilters,
                  filters: filters,
                });
              }}>
              <FilterIcon style={styles.headerIcon} />
            </Pressable>
          </View>
        }
      />

      <FlatList
        data={products}
        renderItem={({item, index}) => (
          <ProductBox key={`product${item + index}`} vertical item={item} />
        )}
        keyExtractor={(item, index) => `product${index}`}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<ListPlaceHolder count={4} vertical />}
        onMomentumScrollBegin={() => setEndReachCallable(false)}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (!endReachCallable && products.length < totalProductCount) {
            getProducts(products.length);
            setEndReachCallable(true);
          }
        }}
        ListFooterComponent={renderLoader()}
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeReducer: state.storeReducer,
});

const mapDispatchToProps = {
  searchStoreProducts,
  clearProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
