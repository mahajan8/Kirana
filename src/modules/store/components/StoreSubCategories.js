/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productSubStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import Search from '../../../assets/images/search.svg';
import List from './StoreProductsListing';
import {getProductsByCategory, searchStoreProducts} from '../Api';
import {connect} from 'react-redux';
import {setSubcategoryProducts} from '../StoreActions';
import ListPlaceHolder from './ListPlaceHolder';
import CartHeader from '../../commons/components/CartHeader';
import {ripple} from '../../../utils/utility/Utils';

const StoreSubCategories = (props) => {
  let {categoryName} = props;
  let {subcategoryProducts, storeDetails} = props.storeState;

  useEffect(() => {
    let params = {
      store_id: storeDetails.id,
      category_id: props.categoryId,
    };
    // Clear subcategory products and Call Api to get products
    props.setSubcategoryProducts([]);
    props.getProductsByCategory(params);
  }, []);

  const getSubCategoryList = () => {
    return subcategoryProducts.map((item) => {
      return {name: item.name, id: item.id};
    });
  };

  const renderListHeader = () => (
    <View>
      <FlatList
        data={getSubCategoryList()}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index}) => (
          <Pressable
            android_ripple={ripple}
            style={styles.bubble}
            key={`bubble${item.name}`}
            onPress={() =>
              Actions.productsList({
                subCategoryName: item.name,
                subCategoryId: item.id,
              })
            }>
            <Text style={styles.bubbleLabel}>{item.name}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.horizontalListContainer}
        keyExtractor={(item, index) => `bubbles${index}`}
      />
      <View style={styles.seperator} />
    </View>
  );

  return (
    <SafeArea>
      <CartHeader
        title={categoryName}
        headerRight={
          <View style={styles.rowContainer}>
            <Pressable
              onPress={Actions.searchProducts}
              android_ripple={ripple}
              style={styles.headerSearchIcon}>
              <Search
                width={EStyleSheet.value('$spacingNormal')}
                height={EStyleSheet.value('$spacingNormal')}
              />
            </Pressable>
          </View>
        }
      />
      <FlatList
        data={subcategoryProducts}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View>
            <ListPlaceHolder count={4} />
            <ListPlaceHolder count={4} />
          </View>
        }
        renderItem={({item, index}) => (
          <List
            label={item.name}
            id={item.id}
            list={item.products}
            key={`subCategoryProduct${index}`}
            onMorePress={() =>
              Actions.productsList({
                subCategoryName: item.name,
                subCategoryId: item.id,
              })
            }
          />
        )}
        keyExtractor={(item, index) => `subCategoryProducts${index}`}
        ListHeaderComponent={renderListHeader}
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeState: state.storeReducer,
});

const mapDispatchToProps = {
  getProductsByCategory,
  searchStoreProducts,
  setSubcategoryProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreSubCategories);
