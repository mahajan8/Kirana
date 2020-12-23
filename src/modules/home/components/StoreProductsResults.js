/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {styles} from '../styles/searchProductsStyles';
import NoAddressImage from '../../../assets/images/empty_address.svg';
import {getMediaUrl} from '../../../utils/utility/Utils';
import SearchItemTile from './SearchItemTile';
import {clearProducts} from '../../store/StoreActions';
import {connect} from 'react-redux';
import {searchStoreProducts} from '../../store/Api';
import Loader from '../../commons/components/Loader';
import StoreProductPlaceholder from './StoreProductPlaceholder';

const SearchProductResults = (props) => {
  let {searchedText, store} = props;
  const [endReachCallable, setEndReachCallable] = useState(true);

  const {products, totalProductCount} = props.storeReducer;

  useEffect(() => {
    props.clearProducts();
    getProducts(0);

    return () => props.clearProducts();
  }, []);

  const getProducts = (start) => {
    let pars = {
      start,
      limit: 10,
      sorts: [],
      conditions: [
        {
          key: 'SEARCH_BY_STORE_ID',
          value: store.id,
          context: null,
        },
        {key: 'SEARCH_BY_TEXT', value: searchedText, context: null},
      ],
    };

    props.searchStoreProducts(pars);
  };

  return (
    <SafeArea>
      <CartHeader
        titleComp={
          <View>
            <Text style={styles.storeName}>{store.name}</Text>
            <Text style={styles.storeLocation}>
              {store.location.short_address}
            </Text>
          </View>
        }
        containerStyle={styles.headerContainer}
      />
      <FlatList
        data={products}
        renderItem={({item, index}) => (
          <SearchItemTile item={item} index={index} />
        )}
        keyExtractor={(item, index) => `store${index}`}
        ListHeaderComponent={
          <View style={styles.container}>
            <Text style={styles.searchResultsHeading}>
              {Strings.found} {products.length} {Strings.itemsMatching}{' '}
              {searchedText}
            </Text>
          </View>
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
          if (!endReachCallable && products.length < totalProductCount) {
            getProducts(products.length);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchProductResults);
