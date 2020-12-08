import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {commonStyles} from '../../commons/styles/commonStyles';
import {styles} from '../styles/exploreStyles';
import Search from '../../../assets/images/search.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import CartCounter from '../../commons/components/CartCounter';
import {getMediaUrl} from '../../../utils/utility/Utils';

let categories = [
  'Staples',
  'Beverages',
  'Breakfast & Dairy',
  'Fruits & Vegetables',
  'Staples',
  'Beverages',
  'Breakfast & Dairy',
  'Fruits & Vegetables',
  'Staples',
  'Beverages',
  'Breakfast & Dairy',
  'Fruits & Vegetables',
];

const Explore = () => {
  const renderCategory = (item) => (
    <View style={styles.categoryContainer}>
      <Image style={styles.categoryImage} source={{uri: getMediaUrl(null)}} />
      <Text style={styles.categoryName}>{item}</Text>
    </View>
  );

  return (
    <SafeArea>
      <View style={[styles.searchContainer, commonStyles.shadow]}>
        <Search
          width={EStyleSheet.value('14rem')}
          height={EStyleSheet.value('14rem')}
        />
        <Text style={styles.searchProduct}>{Strings.searchProduct}...</Text>
        <CartCounter />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>{Strings.groceryCategories}</Text>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => `categories${index}`}
          renderItem={({item}) => renderCategory(item)}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeArea>
  );
};

export default Explore;
