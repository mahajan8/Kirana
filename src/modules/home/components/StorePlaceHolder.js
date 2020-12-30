/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, Pressable} from 'react-native';
import {styles} from '../styles/storePlaceHolderStyles';

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

export default StorePlaceholder;
