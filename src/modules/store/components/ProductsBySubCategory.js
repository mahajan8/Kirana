import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productSubStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import Search from '../../../assets/images/search.svg';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import CartCounter from '../../commons/components/CartCounter';
import List from './List';

let products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let subCategories = ['Fresh Vegetables', 'Fresh Fruits', 'Exotic Fruits'];

const renderBubbles = (label) => (
  <TouchableOpacity
    style={styles.bubble}
    key={`bubble${label}`}
    onPress={() =>
      Actions.productsList({
        subCategoryName: label,
      })
    }>
    <Text style={styles.bubbleLabel}>{label}</Text>
  </TouchableOpacity>
);

const ProductsBySubCategory = (props) => {
  let {categoryName} = props;

  return (
    <SafeArea>
      <Header
        title={categoryName}
        headerRight={
          <View style={styles.rowContainer}>
            <Search
              style={styles.headerIcon}
              width={EStyleSheet.value('16rem')}
              height={EStyleSheet.value('16rem')}
            />
            <CartCounter />
          </View>
        }
        type={1}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.rowContainer, styles.bubblesContainer]}>
          {subCategories.map((item, index) => renderBubbles(item))}
        </View>

        {subCategories.map((item, index) => (
          <List
            label={item}
            list={products}
            key={`subCategoryProduct${index}`}
            onMorePress={() =>
              Actions.productsList({
                subCategoryName: item,
              })
            }
          />
        ))}

        <List
          label={Strings.allItems}
          list={products}
          vertical
          onMorePress={() =>
            Actions.productsList({
              subCategoryName: Strings.allItems,
            })
          }
        />
      </ScrollView>
    </SafeArea>
  );
};

export default ProductsBySubCategory;
