import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {styles} from '../styles/searchProductsStyles';
import NoAddressImage from '../../../assets/images/empty_address.svg';
import {getMediaUrl} from '../../../utils/utility/Utils';
import SearchItemTile from './SearchItemTile';

let items = [
  {
    name: 'Nandini Good Life Cow Milk (pouch)',
    weight: '1 L',
    price: 110,
  },
  {
    name: 'Mother Dairy Cow Milk    ',
    weight: '1 L',
    price: 110,
  },
  {
    name: 'Amul Gold Milk (Tetra Pak)',
    weight: '1 L',
    price: 110,
  },
];

const SearchProductResults = (props) => {
  let {searchedText, storeName, storeLocation} = props;

  return (
    <SafeArea>
      <CartHeader
        titleComp={
          <View>
            <Text style={styles.storeName}>{storeName}</Text>
            <Text style={styles.storeLocation}>{storeLocation}</Text>
          </View>
        }
        containerStyle={styles.headerContainer}
      />
      <FlatList
        data={items}
        renderItem={({item, index}) => (
          <SearchItemTile item={item} index={index} />
        )}
        keyExtractor={(item, index) => `store${index}`}
        ListHeaderComponent={
          <View style={styles.container}>
            <Text style={styles.searchResultsHeading}>
              {Strings.found} {'2'} {Strings.itemsMatching} {searchedText}
            </Text>
          </View>
        }
        ListEmptyComponent={
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
        }
        contentContainerStyle={styles.list}
      />
    </SafeArea>
  );
};

export default SearchProductResults;
