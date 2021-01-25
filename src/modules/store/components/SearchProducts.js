/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect, useState} from 'react';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {connect} from 'react-redux';
import {searchStoreProducts} from '../Api';
import {FlatList, View, Pressable, Text} from 'react-native';
import ProductBox from './ProductBox';
import {Actions} from 'react-native-router-flux';
import {styles} from '../styles/productSubStyles';
import {clearStoreSearchProducts} from '../StoreActions';
import ActiveFilter from '../../../assets/images/active-filter.svg';
import Filter from '../../../assets/images/filter.svg';
import {Strings} from '../../../utils/values/Strings';
import EStyleSheet from 'react-native-extended-stylesheet';
import NoResults from '../../../assets/images/search_not_found.svg';
import {ripple} from '../../../utils/utility/Utils';
import LoaderError from '../../commons/components/LoaderError';

let defaultFilters = {brands: [], categories: [], price_sort: null};
let commonSearches = ['Drink', 'Onion', 'Apple', 'Potato', 'Chocolate'];

const SearchProducts = (props) => {
  let input = useRef(null);
  let debounceTimer = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const [endReachCallable, setEndReachCallable] = useState(true);
  const [filters, setFilters] = useState(defaultFilters);

  const {
    storeDetails,
    storeSearchProducts,
    storeSeachCount,
  } = props.storeReducer;

  useEffect(() => {
    if (searchInput) {
      searchProducts(searchInput);
    } else {
      input.current.focus();
      props.clearStoreSearchProducts();
    }
    return () => props.clearStoreSearchProducts();
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
      props.clearStoreSearchProducts();
    }

    let {brands, categories, price_sort} = filters;
    // Add Filters in params for chosen Filters
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
    // Search after user Stops typing and searched word length > 2
    if (query.length > 2) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        if (query) {
          searchProducts(query);
        } else {
          setFilters(defaultFilters);
          props.clearStoreSearchProducts();
        }
      }, 500);
    }
    setSearchInput(query);
  };
  let FilterIcon =
    filters.brands.length ||
    filters.price_sort !== null ||
    filters.categories.length
      ? ActiveFilter
      : Filter;

  const getEmptyState = () => {
    if (!props.loading) {
      return (
        <View style={styles.emptyListContainer}>
          <NoResults
            width={EStyleSheet.value('270rem')}
            height={EStyleSheet.value('123rem')}
          />
          <Text style={styles.noSearchResults}>{Strings.noProductFound}</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  const renderLoader = () => (
    <View style={styles.listLoaderContainer}>
      <LoaderError
        hideLoader={!storeSearchProducts.length}
        retry={() => searchProducts(searchInput, storeSearchProducts.length)}
      />
    </View>
  );

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
            style={styles.filterIcon}
            android_ripple={ripple}
            onPress={() => {
              Actions.filters({
                saveFilters: setFilters,
                filters: filters,
              });
            }}>
            <FilterIcon />
          </Pressable>
        }
      />
      {searchInput.length > 2 ? (
        <FlatList
          data={storeSearchProducts}
          renderItem={({item, index}) => (
            <ProductBox
              key={`product${item + index}`}
              vertical
              onPress={() =>
                Actions.productDetails({subCategoryName: '', item})
              }
              item={item}
            />
          )}
          keyExtractor={(item, index) => `product${index}`}
          numColumns={2}
          contentContainerStyle={[styles.listContainer]}
          onMomentumScrollBegin={() => setEndReachCallable(false)}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            // Load Search products if list end reached and more products available
            if (
              !endReachCallable &&
              storeSearchProducts.length < storeSeachCount
            ) {
              searchProducts(searchInput, storeSearchProducts.length);
              setEndReachCallable(true);
            }
          }}
          ListEmptyComponent={getEmptyState()}
          ListFooterComponent={renderLoader()}
        />
      ) : (
        <View style={styles.commonSearchesContainer}>
          <Text
            style={[styles.searchResultsHeading, styles.commonSearchHeading]}>
            {Strings.commonSearches}
          </Text>
          {commonSearches.map((item) => (
            <Pressable
              key={`${item}`}
              android_ripple={ripple}
              onPress={() => {
                setSearchInput(item);
                searchProducts(item);
              }}>
              <Text style={styles.commonSearchItem}>{item}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeReducer: state.storeReducer,
});

const mapDispatchToProps = {
  searchStoreProducts,
  clearStoreSearchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);
