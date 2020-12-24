/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

const StorePlaceholder = (props) => {
  let {count} = props;

  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = [];
    while (arr.length < count) arr.push('');
    setList(arr);
  }, []);

  const renderItem = (item, index) => (
    <View
      style={[styles.rowContainer, styles.itemContainer]}
      key={`storeProductItemPlaceholder${index}`}>
      <View style={styles.storeImageContainer} />

      <View style={styles.productDetialsContainer}>
        <View style={styles.storeName} />
        <View style={styles.storeLocation} />
        <View style={styles.storeDetails} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={list}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(item, index) => `productPlaceHolder${index}`}
      contentContainerStyle={[styles.listContainer]}
    />
  );
};

const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: '24vrem',
  },
  storeImageContainer: {
    height: '65rem',
    width: '65rem',
    backgroundColor: Colors.placeHolder,
    marginRight: '12rem',
  },
  storeName: {
    backgroundColor: Colors.placeHolder,
    width: '120rem',
    marginBottom: '3rem',
    height: '15vrem',
  },
  storeLocation: {
    width: '70rem',
    backgroundColor: Colors.placeHolder,
    height: '15vrem',
    marginBottom: '3rem',
  },
  storeDetails: {
    width: '50rem',
    backgroundColor: Colors.placeHolder,
    height: '15vrem',
  },
});

export default StorePlaceholder;
