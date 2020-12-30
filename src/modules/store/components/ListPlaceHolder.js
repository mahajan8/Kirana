/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, Pressable} from 'react-native';
import {styles} from '../styles/listPlaceholderStyles';

const ListPlaceHolder = (props) => {
  let {vertical, count} = props;

  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = [];
    while (arr.length < count) arr.push('');
    setList(arr);
  }, []);

  const renderProduct = (item, index) => (
    <View
      key={`productPlaceHolder${index}`}
      style={[
        styles.productContainer,
        vertical && styles.productVerticalContainer,
      ]}>
      <View style={styles.productImage} />
      <View style={styles.productPrice} />
      <View style={styles.productName} />
      <View style={styles.productWeight} />
    </View>
  );

  return (
    <View>
      {vertical ? (
        <FlatList
          data={list}
          renderItem={({item}) => renderProduct(item)}
          keyExtractor={(item, index) => `productPlaceHolder${index}`}
          numColumns={2}
          contentContainerStyle={[styles.listContainer]}
        />
      ) : (
        <View style={[styles.listContainer]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => renderProduct(item, index))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default ListPlaceHolder;
