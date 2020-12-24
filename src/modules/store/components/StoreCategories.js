/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {Actions} from 'react-native-router-flux';
import List from './StoreProductsListing';
import {connect} from 'react-redux';
import {getStoreDetails} from '../Api';
import ListPlaceHolder from './ListPlaceHolder';
import {setCategoryProducts, setStoreDetails} from '../StoreActions';
import StoreHeader from './StoreHeader';

const StoreCategories = (props) => {
  useEffect(() => {
    let pars = {
      store_id: props.storeId,
    };
    props.getStoreDetails(pars);

    return () => {
      props.setStoreDetails({});
      props.setCategoryProducts([]);
    };
  }, []);

  let {categoryProducts} = props.storeReducer;

  return (
    <SafeArea>
      <FlatList
        data={categoryProducts}
        renderItem={({item, index}) => (
          <List
            label={item.name}
            list={item.products}
            onMorePress={() =>
              Actions.storeSubCategories({
                categoryName: item.name,
                categoryId: item.id,
              })
            }
            hideBorderTop={index === 0 ? true : false}
          />
        )}
        keyExtractor={(item, index) => `store${index}`}
        ListEmptyComponent={
          <View>
            <ListPlaceHolder count={4} />
            <ListPlaceHolder count={4} />
          </View>
        }
        ListHeaderComponent={<StoreHeader />}
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeReducer: state.storeReducer,
});

const mapDispatchToProps = {
  getStoreDetails,
  setCategoryProducts,
  setStoreDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreCategories);
