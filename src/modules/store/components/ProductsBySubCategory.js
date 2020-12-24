/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Pressable, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productSubStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import Search from '../../../assets/images/search.svg';
import Header from '../../commons/components/Header';
import CartCounter from '../../commons/components/CartCounter';
import List from './StoreProductsListing';
import {getProductsByCategory, getStoreProducts} from '../Api';
import {connect} from 'react-redux';
import {setSubcategoryProducts} from '../StoreActions';
import ListPlaceHolder from './ListPlaceHolder';

const ProductsBySubCategory = (props) => {
  let {categoryName} = props;
  let {subcategoryProducts} = props.storeState;
  useEffect(() => {
    let params = {
      store_id: props.storeId,
      category_id: props.categoryId,
    };
    props.setSubcategoryProducts([]);
    props.getProductsByCategory(params);
  }, []);

  const getSubCategoryList = () => {
    return subcategoryProducts.map((item) => {
      return {name: item.name, id: item.id};
    });
  };
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
        ListHeaderComponent={() => (
          <FlatList
            data={getSubCategoryList()}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => (
              <Pressable
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
            contentContainerStyle={{marginHorizontal: 10}}
            keyExtractor={(item, index) => `bubbles${index}`}
          />
        )}
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
  getStoreProducts,
  setSubcategoryProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsBySubCategory);