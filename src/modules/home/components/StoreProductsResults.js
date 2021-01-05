/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, FlatList, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {styles} from '../styles/searchProductsStyles';
import NoAddressImage from '../../../assets/images/empty_address.svg';
import SearchItemTile from './SearchItemTile';
import {connect} from 'react-redux';
import {searchStoreProducts} from '../../store/Api';
import Loader from '../../commons/components/Loader';
import StoreProductPlaceholder from './StoreProductPlaceholder';
import {Actions} from 'react-native-router-flux';
import ActiveFilter from '../../../assets/images/active-filter.svg';
import Filter from '../../../assets/images/filter.svg';
import Button from '../../commons/components/Button';
import {clearStoreProducts} from '../HomeActions';

let defaultFilters = {brands: [], categories: [], price_sort: null};

const SearchProductResults = (props) => {
  let {searchedText, productsList} = props;
  const [endReachCallable, setEndReachCallable] = useState(true);
  const [filters, setFilters] = useState(defaultFilters);

  const {storeProducts, storeProductsCount, selectedStore} = props.homeReducer;
  useEffect(() => {
    props.clearStoreProducts();
    getProducts();
    return () => props.clearStoreProducts();
  }, [filters]);

  const getProducts = (start = 0) => {
    let pars = {
      start,
      limit: 10,
      sorts: [],
      conditions: [
        {
          key: 'SEARCH_BY_STORE_ID',
          value: selectedStore.id,
          context: null,
        },
      ],
    };

    if (productsList) {
      pars.conditions = [
        ...pars.conditions,
        {key: 'SEARCH_BY_PRODUCT_ID_IN', value: productsList},
      ];
    } else {
      pars.conditions = [
        ...pars.conditions,
        {key: 'SEARCH_BY_TEXT', value: searchedText, context: null},
      ];
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

  let FilterIcon =
    filters.brands.length ||
    filters.price_sort !== null ||
    filters.categories.length
      ? ActiveFilter
      : Filter;

  return (
    <SafeArea>
      <CartHeader
        titleComp={
          <View>
            <Text style={styles.storeName}>{selectedStore.name}</Text>
            <Text style={styles.storeLocation}>
              {selectedStore.location.short_address}
            </Text>
          </View>
        }
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
        containerStyle={styles.headerContainer}
      />
      <FlatList
        data={storeProducts}
        renderItem={({item, index}) => (
          <SearchItemTile item={item} index={index} />
        )}
        keyExtractor={(item, index) => `store${index}`}
        ListHeaderComponent={
          storeProductsCount &&
          !props.loading && (
            <View>
              {productsList ? (
                <Text style={styles.searchResultsHeading}>
                  {Strings.alternativeStoreItemsAvailable} {selectedStore.name}
                </Text>
              ) : (
                <Text style={styles.searchResultsHeading}>
                  {Strings.found} {storeProductsCount} {Strings.itemsMatching}{' '}
                  {searchedText}
                </Text>
              )}
            </View>
          )
        }
        ListEmptyComponent={
          props.loading ? (
            <StoreProductPlaceholder count={4} />
          ) : (
            <View style={styles.emptyListContainer}>
              {/* TODO: Change Image  */}
              <NoAddressImage
                width={EStyleSheet.value('270rem')}
                height={EStyleSheet.value('123rem')}
              />
              <Text style={styles.noSearchResults}>
                {Strings.noSearchResults}
              </Text>
            </View>
          )
        }
        contentContainerStyle={styles.list}
        onMomentumScrollBegin={() => setEndReachCallable(false)}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (!endReachCallable && storeProducts.length < storeProductsCount) {
            getProducts(storeProducts.length);
            setEndReachCallable(true);
          }
        }}
        ListFooterComponent={
          <View style={styles.listLoaderContainer}>
            <Loader show={storeProducts.length ? props.loading : false} />
          </View>
        }
        ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
      />
      <View style={styles.buttonContainer}>
        <Button label={Strings.viewStore} onPress={() => Actions.store()} />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {
  searchStoreProducts,
  clearStoreProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchProductResults);
