/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/productSubStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import Search from '../../../assets/images/search.svg';
import Header from '../../commons/components/Header';
import CartCounter from '../../commons/components/CartCounter';
import List from './StoreProductsListing';
import ListPlaceHolder from './ListPlaceHolder';
import {getProductsByCategory, getStoreProducts} from '../Api';
import {connect} from 'react-redux';
import ProductBox from './ProductBox';

const ProductsBySubCategory = (props) => {
  let {categoryName} = props;

  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(null);
  const [endReachCallable, setEndReachCallable] = useState(true);

  useEffect(() => {
    let pars = {
      store_id: props.storeId,
      category_id: props.categoryId,
    };
    props.getProductsByCategory(pars, (data) => {
      setSubcategories(data.store_products);
      getProducts();
    });
  }, []);
  const getProducts = () => {
    let pars = {
      start: products.length,
      limit: 10,
      sorts: [{key: 'SORT_BY_ID', value: false, context: null}],
      conditions: [
        {
          key: 'SEARCH_BY_STORE_ID',
          value: props.storeId,
          context: null,
        },
        {
          key: 'SEARCH_BY_CATEGORY_IN',
          value: [props.categoryId],
          context: null,
        },
      ],
    };
    props.getStoreProducts(pars, (data) => {
      setProducts([...products, ...data.results]);
      setProductCount(data.total_count);
    });
  };
  const getSubCategoryList = () => {
    return subcategories.map((item) => {
      return {name: item.name};
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
        data={products}
        numColumns={2}
        renderItem={({item, index}) => (
          <ProductBox
            key={`product${index}`}
            vertical
            // onPress={}
            item={item}
          />
        )}
        keyExtractor={(item, index) => `products${index}`}
        onMomentumScrollBegin={() => setEndReachCallable(false)}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (!endReachCallable && products.length < productCount) {
            getProducts();
            setEndReachCallable(true);
          }
        }}
        ListHeaderComponent={() => (
          <FlatList
            data={subcategories}
            renderItem={({item, index}) => (
              <List
                label={item.name}
                list={item.products}
                key={`subCategoryProduct${index}`}
                onMorePress={() =>
                  Actions.productsList({
                    subCategoryName: item.name,
                  })
                }
              />
            )}
            keyExtractor={(item, index) => `subCategoryProducts${index}`}
            ListHeaderComponent={() => (
              <FlatList
                data={getSubCategoryList()}
                horizontal
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    style={styles.bubble}
                    key={`bubble${item.name}`}
                    onPress={() =>
                      Actions.productsList({
                        subCategoryName: item.name,
                      })
                    }>
                    <Text style={styles.bubbleLabel}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                contentContainerStyle={{marginHorizontal: 10}}
                keyExtractor={(item, index) => `bubbles${index}`}
              />
            )}
          />
        )}
        // contentContainerStyle={styles.list}
      />
      {/*storeProducts ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {storeProducts.map((item, index) => (
            <List
              label={item.name}
              list={item.products}
              key={`subCategoryProduct${index}`}
              onMorePress={() =>
                Actions.productsList({
                  subCategoryName: item.name,
                })
              }
            />
          ))}
        </ScrollView>
      ) : (
        <View>
          <ListPlaceHolder count={4} />
          <ListPlaceHolder count={4} vertical />
        </View>
      )*/}
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  getProductsByCategory,
  getStoreProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsBySubCategory);
