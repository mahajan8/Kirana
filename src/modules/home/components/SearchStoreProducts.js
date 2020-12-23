/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {styles} from '../styles/searchProductsStyles';
import StoreInfoTile from './StoreInfoTile';
import NoResults from '../../../assets/images/search_not_found.svg';
import {debounce} from '../../../utils/utility/Utils';
import {searchProductInStores} from '../Api';
import {connect} from 'react-redux';
import {clearSearchedStores} from '../HomeActions';

let commonSearches = ['Milk', 'Onion', 'Apple', 'Potato', 'Chocolate'];

const SearchStoreProducts = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [endReachCallable, setEndReachCallable] = useState(true);
  const {location, searchedStores, searchedStoresCount} = props.homeReducer;
  let input = useRef(null);

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
  // let searchProducts = debounce(test, 1000);
  return (
    <SafeArea>
      <CartHeader
        search
        onSearchChange={(text) => {
          setSearchInput(text);
          // searchProducts(text);
          if (text.length > 2) {
            search(0, text);
          }
        }}
        searchValue={searchInput}
        inputRef={input}
      />
      {searchInput.length > 2 ? (
        <FlatList
          data={searchedStores}
          renderItem={({item}) => (
            <StoreInfoTile
              store={item}
              onPress={() => {
                if (searchInput) {
                  Actions.searchProductResults({
                    searchedText: searchInput,
                    store: item,
                  });
                } else {
                  console.log('andias');
                }
              }}
            />
          )}
          keyExtractor={(item, index) => `store${index}`}
          ListHeaderComponent={
            searchedStores.length && (
              <View style={styles.container}>
                <Text style={styles.searchResultsHeading}>
                  {Strings.found} {searchedStores.length}{' '}
                  {Strings.storesMatching} {searchInput}
                </Text>
              </View>
            )
          }
          ListEmptyComponent={
            <View style={styles.emptyListContainer}>
              {/* TODO: Change Image  */}
              <NoResults
                width={EStyleSheet.value('270rem')}
                height={EStyleSheet.value('123rem')}
              />
              <Text style={styles.noSearchResults}>
                {Strings.noSearchResults}
              </Text>
            </View>
          }
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
});

const mapDispatchToProps = {
  searchProductInStores,
  clearSearchedStores,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchStoreProducts);
