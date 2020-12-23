import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {styles} from '../styles/searchProductsStyles';
import Input from '../../commons/components/Input';
import Search from '../../../assets/images/search.svg';
import StoreInfoTile from './StoreInfoTile';
import NoResults from '../../../assets/images/search_not_found.svg';

let stores = [
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen 1',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s 2',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen 3',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen6',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
];

const SearchStoreProducts = () => {
  const [searchInput, setSearchInput] = useState('');

  let input = useRef(null);

  useEffect(() => {
    input.current.focus();
  });

  const getSearchedList = () => {
    if (searchInput) {
      if (searchInput.toLowerCase() === 'milk') {
        return stores.slice(0, 2);
      } else {
        return [];
      }
    } else {
      return stores;
    }
  };

  return (
    <SafeArea>
      <CartHeader
        search
        onSearchChange={setSearchInput}
        searchValue={searchInput}
        inputRef={input}
      />
      <FlatList
        data={getSearchedList()}
        renderItem={({item}) => (
          <StoreInfoTile
            store={item}
            onPress={() => {
              if (searchInput) {
                Actions.searchProductResults({
                  searchedText: searchInput,
                  storeName: item.name,
                  storeLocation: item.location,
                });
              } else {
                console.log('andias');
              }
            }}
          />
        )}
        keyExtractor={(item, index) => `store${index}`}
        ListHeaderComponent={
          getSearchedList().length && (
            <View style={styles.container}>
              <Text style={styles.searchResultsHeading}>
                {Strings.found} {getSearchedList().length}{' '}
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
      />
    </SafeArea>
  );
};

export default SearchStoreProducts;
