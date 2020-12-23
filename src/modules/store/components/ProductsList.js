/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productSubStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import Search from '../../../assets/images/search.svg';
import Filter from '../../../assets/images/filter.svg';
import ActiveFilter from '../../../assets/images/active-filter.svg';
import Header from '../../commons/components/Header';
import CartCounter from '../../commons/components/CartCounter';
import {connect} from 'react-redux';
import {searchStoreProducts} from '../Api';
import ProductBox from './ProductBox';
import ListPlaceHolder from './ListPlaceHolder';
import Loader from '../../commons/components/Loader';

let defaultFilters = {brands: [], categories: [], price_sort: null};

const ProductsList = (props) => {
  let {subCategoryName, subCategoryId} = props;

  const [storeProducts, setStoreProducts] = useState([]);
  const [endReachCallable, setEndReachCallable] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    setStoreProducts([]);
    getProducts(0);
  }, [filters]);

  const getProducts = (start) => {
    let pars = {
      start,
      limit: 10,
      sorts: [],
      conditions: [
        {
          key: 'SEARCH_BY_STORE_ID',
          value: '5fdaf974b6a38a8eafa410b0',
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
    props.searchStoreProducts(pars, (data) => {
      setStoreProducts(
        start === 0 ? data.results : [...storeProducts, ...data.results],
      );
      setTotalProducts(data.total_count);
    });
  };

  let FilterIcon =
    filters.brands.length || filters.price_sort ? ActiveFilter : Filter;

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
            <TouchableOpacity
              onPress={() => {
                Actions.filters({
                  saveFilters: setFilters,
                  filters: filters,
                });
              }}>
              <FilterIcon
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
        <FlatList
          data={storeProducts}
          renderItem={({item, index}) => (
            <ProductBox
              key={`product${item + index}`}
              vertical
              onPress={() => Actions.productDetails({subCategoryName, item})}
              item={item}
            />
          )}
          keyExtractor={(item, index) => `product${index}`}
          numColumns={2}
          contentContainerStyle={[styles.listContainer]}
          ListEmptyComponent={<ListPlaceHolder count={4} vertical />}
          onMomentumScrollBegin={() => setEndReachCallable(false)}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            if (!endReachCallable && storeProducts.length < totalProducts) {
              getProducts(storeProducts.length);
              setEndReachCallable(true);
            }
          }}
          ListFooterComponent={
            <View style={styles.listLoaderContainer}>
              <Loader show={storeProducts.length ? props.loading : false} />
            </View>
          }
        />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  searchStoreProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
