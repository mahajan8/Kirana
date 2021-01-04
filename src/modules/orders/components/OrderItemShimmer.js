/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Checked from '../../../assets/images/checked.svg';
import UnChecked from '../../../assets/images/unchecked.svg';
import {styles} from '../styles/orderItemShimmerStyles';

const OrderItemShimmer = (props) => {
  let {count} = props;

  const [list, setList] = useState(['', '']);

  useEffect(() => {
    let arr = [];
    while (arr.length < count) arr.push('');
    setList(arr);
  }, []);

  const renderItem = (item, index) => (
    <View style={styles.container} key={`orderItemPlaceHolder${index}`}>
      <View style={styles.quantityText} />
      <View style={styles.orderImage} />
      <View>
        <View style={styles.itemName} />
        <View style={styles.itemName2} />
        <View style={styles.itemQuantity} />
      </View>
      <View style={styles.checkView}>
        <View style={styles.price} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={list}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(item, index) => `orderItem${index}`}
      contentContainerStyle={[styles.listContainer]}
    />
  );
};

export default OrderItemShimmer;
