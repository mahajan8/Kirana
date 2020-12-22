/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

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

const styles = EStyleSheet.create({
  listContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '15vrem',
    paddingLeft: '16rem',
    marginBottom: '8vrem',
    alignSelf: 'center',
  },
  productContainer: {
    backgroundColor: Colors.white,
    marginTop: '12vrem',
    marginRight: '30rem',
    width: '110rem',
  },
  productVerticalContainer: {
    width: '150rem',
  },
  productImage: {
    height: '100rem',
    width: '100%',
    backgroundColor: Colors.placeHolder,
  },
  productPrice: {
    width: '80rem',
    height: '15vrem',
    backgroundColor: Colors.placeHolder,
    marginTop: '8vrem',
  },
  productName: {
    width: '100%',
    backgroundColor: Colors.placeHolder,
    marginVertical: '5rem',
    height: '12vrem',
  },
  productWeight: {
    width: '50rem',
    backgroundColor: Colors.placeHolder,
    marginBottom: '30vrem',
    height: '12vrem',
  },
});

export default ListPlaceHolder;
