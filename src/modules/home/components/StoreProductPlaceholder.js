/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

const StoreProductPlaceholder = (props) => {
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
      <View style={styles.productImageContainer} />

      <View style={styles.productDetialsContainer}>
        <View style={styles.productName} />
        <View style={styles.productWeight} />
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.price} />

        <View style={styles.buttonsContainer} />
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
  productImageContainer: {
    height: '65rem',
    width: '65rem',
    backgroundColor: Colors.placeHolder,
    marginRight: '12rem',
  },
  productName: {
    backgroundColor: Colors.placeHolder,
    width: '120rem',
    marginBottom: '3rem',
    height: '15vrem',
  },
  productWeight: {
    width: '30rem',
    backgroundColor: Colors.placeHolder,
    height: '15vrem',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: '3rem',
  },
  price: {
    width: '50rem',
    backgroundColor: Colors.placeHolder,
    height: '15vrem',
    marginBottom: '10vrem',
  },
  productDetialsContainer: {
    paddingTop: '3rem',
  },
  buttonsContainer: {
    width: '70rem',
    backgroundColor: Colors.placeHolder,
    height: '20vrem',
  },
});

export default StoreProductPlaceholder;
