/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/storeProductsStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {getMediaUrl} from '../../../utils/utility/Utils';
import Search from '../../../assets/images/search.svg';
import BackArrow from '../../../assets/images/white_back.svg';
import LocationIcon from '../../../assets/images/white_location.svg';
import {Strings} from '../../../utils/values/Strings';
import List from './StoreProductsListing';
import {connect} from 'react-redux';
import {getStoreDetails} from '../Api';
import ListPlaceHolder from './ListPlaceHolder';
import CartCounter from '../../commons/components/CartCounter';
import {setCategoryProducts, setStoreDetails} from '../StoreActions';
import StoreHeader from './StoreHeader';

let backgroundImage = require('../../../assets/images/store_background.png');

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

  let {storeDetails, categoryProducts} = props.storeReducer;

  let {owner_data, location, name} = storeDetails;

  let isLoaded = storeDetails.name ? true : false;

  let profilePhoto = isLoaded
    ? owner_data.profile_photo
      ? owner_data.profile_photo.path
      : null
    : null;

  return (
    <SafeArea>
      <FlatList
        data={categoryProducts}
        renderItem={({item}) => (
          <List
            label={item.name}
            list={item.products}
            onMorePress={() =>
              Actions.storeSubCategories({
                categoryName: item.name,
                categoryId: item.id,
              })
            }
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
