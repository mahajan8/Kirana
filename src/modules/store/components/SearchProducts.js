/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect, useState} from 'react';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {connect} from 'react-redux';
import {searchStoreProducts} from '../Api';
import {FlatList, View, Pressable} from 'react-native';
import ProductBox from './ProductBox';
import {Actions} from 'react-native-router-flux';
import Loader from '../../commons/components/Loader';
import {styles} from '../styles/productSubStyles';
import {clearProducts} from '../StoreActions';
import ActiveFilter from '../../../assets/images/active-filter.svg';
import Filter from '../../../assets/images/filter.svg';

let defaultFilters = {brands: [], categories: [], price_sort: null};

const SearchProducts = (props) => {
  let input = useRef(null);
  let debounceTimer = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const [endReachCallable, setEndReachCallable] = useState(true);
  const [filters, setFilters] = useState(defaultFilters);

  const {storeDetails, products, totalProductCount} = props.storeReducer;

  useEffect(() => {
    if (searchInput) {
      searchProducts(searchInput);
    } else {
      input.current.focus();
      props.clearProducts();
    }
    return () => props.clearProducts();
  }, [filters]);

  let searchProducts = (query, start = 0) => {
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
          key: 'SEARCH_BY_TEXT',
          value: query,
          context: null,
        },
      ],
    };
    if (start === 0) {
      props.clearProducts();
    }

    let {brands, categories, price_sort} = filters;

    if (brands.length) {
      pars.conditions = [
        ...pars.conditions,
        {key: 'SEARCH_BY_BRAND_IN', value: brands, context: null},
      ];
      pars.filter = true;
    }
    if (categories.length) {
      pars.conditions = [
        ...pars.conditions,
        {key: 'SEARCH_BY_CATEGORY_IN', value: categories, context: null},
      ];
      if (!pars.filter) {
        pars.filter = true;
      }
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
      if (!pars.filter) {
        pars.filter = true;
      }
    }
    props.searchStoreProducts(pars);
  };

  const onChangeSearchText = (query) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      if (query) {
        searchProducts(query);
      } else {
        setFilters(defaultFilters);
        props.clearProducts();
      }
    }, 500);
    setSearchInput(query);
  };
  let FilterIcon =
    filters.brands.length ||
    filters.price_sort !== null ||
    filters.categories.length
      ? ActiveFilter
      : Filter;
  return (
    <SafeArea>
      <CartHeader
        search
        onSearchChange={onChangeSearchText}
        searchValue={searchInput}
        inputRef={input}
        onCrossPress={() => setSearchInput('')}
        headerRight={
          <Pressable
            onPress={() => {
              Actions.filters({
                saveFilters: setFilters,
                filters: filters,
              });
            }}>
            <FilterIcon style={{marginRight: 18}} />
          </Pressable>
        }
      />
      <FlatList
        data={products}
        renderItem={({item, index}) => (
          <ProductBox
            key={`product${item + index}`}
            vertical
            onPress={() => Actions.productDetails({subCategoryName: '', item})}
            item={item}
          />
        )}
        keyExtractor={(item, index) => `product${index}`}
        numColumns={2}
        contentContainerStyle={[styles.listContainer]}
        onMomentumScrollBegin={() => setEndReachCallable(false)}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (!endReachCallable && products.length < totalProductCount) {
            searchProducts(searchInput, products.length);
            setEndReachCallable(true);
          }
        }}
        ListFooterComponent={
          <View style={styles.listLoaderContainer}>
            <Loader show={products.length ? props.loading : false} />
          </View>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);