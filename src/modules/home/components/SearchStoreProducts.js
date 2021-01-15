/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {styles} from '../styles/searchProductsStyles';
import StoreInfoTile from './StoreInfoTile';
import NoResults from '../../../assets/images/search_not_found.svg';
import {searchProductInStores} from '../Api';
import {connect} from 'react-redux';
import {clearSearchedStores, selectStore} from '../HomeActions';
import {ripple} from '../../../utils/utility/Utils';

let commonSearches = ['Milk', 'Onion', 'Apple', 'Potato', 'Chocolate'];

const SearchStoreProducts = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [endReachCallable, setEndReachCallable] = useState(true);
  const {location, searchedStores, searchedStoresCount} = props.homeReducer;
  let input = useRef(null);
  let debounceTimer = useRef(null);

  useEffect(() => {
    input.current.focus();

    return () => props.clearSearchedStores();
  }, []);

  const search = (start, query) => {
    let pars = {
      start,
      limit: 10,
      query: query ? query : searchInput,
      longitude: location.lng,
      latitude: location.lat,
    };

    if (start === 0) {
      props.clearSearchedStores();
    }
    props.searchProductInStores(pars);
  };

  const onChangeSearchText = (query) => {
    if (query.length > 2) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        if (query) {
          search(0, query);
        } else {
          props.clearSearchedStores();
        }
      }, 500);
    }
    setSearchInput(query);
  };
  const getEmptyState = () => {
    if (!props.loading) {
      return (
        <View style={styles.emptyListContainer}>
          <NoResults
            width={EStyleSheet.value('270rem')}
            height={EStyleSheet.value('123rem')}
          />
          <Text style={styles.noSearchResults}>
            {Strings.storeSearchEmpty + searchInput}
          </Text>
        </View>
      );
    } else {
      return null;
    }
  };

  const onStoreClick = (store) => {
    props.selectStore(store);
    Actions.storeProductsResults({
      searchedText: searchInput,
    });
  };

  const renderHeader = () => (
    <View style={styles.container}>
      <Text style={styles.searchResultsHeading}>
        {Strings.found} {searchedStoresCount} {Strings.storesMatching}{' '}
        {searchInput}
      </Text>
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
      />
      {searchInput.length > 2 ? (
        <FlatList
          data={searchedStores}
          renderItem={({item}) => (
            <StoreInfoTile store={item} onPress={() => onStoreClick(item)} />
          )}
          keyExtractor={(item, index) => `store${index}`}
          ListHeaderComponent={searchedStoresCount && renderHeader()}
          ListEmptyComponent={getEmptyState()}
          contentContainerStyle={styles.list}
          onMomentumScrollBegin={() => setEndReachCallable(false)}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            if (
              !endReachCallable &&
              searchedStores.length < searchedStoresCount
            ) {
              search(searchedStores.length);
              setEndReachCallable(true);
            }
          }}
        />
      ) : (
        <View style={styles.commonSearchesContainer}>
          <Text
            style={[styles.searchResultsHeading, styles.commonSearchHeading]}>
            {Strings.commonSearches}
          </Text>
          {commonSearches.map((item) => (
            <Pressable
              android_ripple={ripple}
              key={`${item}`}
              onPress={() => {
                setSearchInput(item);
                search(0, item);
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
  homeReducer: state.homeReducer,
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  searchProductInStores,
  clearSearchedStores,
  selectStore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchStoreProducts);
