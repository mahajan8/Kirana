import React, {useState} from 'react';
import {View, Text, ScrollView, ImageBackground, Image} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/storeProductsStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {getMediaUrl} from '../../../utils/utility/Utils';
import Search from '../../../assets/images/search.svg';
import BackArrow from '../../../assets/images/back-arrow.svg';
import {Strings} from '../../../utils/values/Strings';
import List from './List';

let products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let categories = [
  'Vegetables & Fruits',
  'Grocery & Staples',
  'Vegetables & Fruits',
  'Grocery & Staples',
];

const StoreProducts = () => {
  return (
    <SafeArea>
      <ScrollView>
        <ImageBackground
          source={require('../../../assets/images/dummy.png')}
          style={styles.imageBackground}
          blurRadius={2}>
          <View style={styles.storeInfoContainer}>
            <BackArrow
              style={styles.backArrow}
              width={EStyleSheet.value('16rem')}
              height={EStyleSheet.value('16rem')}
            />
            <Text style={styles.storeName}>Maya General Stores</Text>
            <Text style={styles.storeLocation}>Pratiksha Nagar Road</Text>
            <Image source={{uri: getMediaUrl(null)}} style={styles.image} />
            <View style={[styles.rowContainer, styles.searchView]}>
              <Search
                width={EStyleSheet.value('15rem')}
                height={EStyleSheet.value('15rem')}
              />
              <Text style={styles.searchText}>{Strings.searchProduct}</Text>
            </View>
          </View>
        </ImageBackground>

        {categories.map((item, index) => (
          <List
            label={item}
            list={products}
            key={`categoryProduct${index}`}
            onMorePress={() =>
              Actions.productsBySubCategory({
                categoryName: item,
              })
            }
          />
        ))}
      </ScrollView>
    </SafeArea>
  );
};

export default StoreProducts;
