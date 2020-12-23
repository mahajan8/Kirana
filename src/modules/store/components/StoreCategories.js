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
      <ScrollView>
        <ImageBackground
          source={backgroundImage}
          style={styles.imageBackground}
          blurRadius={1}>
          <View style={styles.darkBg} />
          <View style={styles.storeInfoContainer}>
            <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
              <TouchableOpacity style={styles.backArrow} onPress={Actions.pop}>
                <BackArrow />
              </TouchableOpacity>
              <View>
                <Text
                  style={
                    isLoaded ? styles.storeName : styles.storeNamePlaceHolder
                  }>
                  {name ? name : ''}
                </Text>
                <Text
                  style={
                    isLoaded
                      ? styles.storeLocation
                      : styles.storeLocationPlaceHolder
                  }>
                  <LocationIcon /> {isLoaded ? location.short_address : null}
                </Text>
              </View>

              <View style={styles.cartContianer}>
                <CartCounter />
              </View>
            </View>

            <Image
              source={{
                uri: getMediaUrl(profilePhoto),
              }}
              style={isLoaded ? styles.image : styles.profilePicPlaceHolder}
            />

            <Pressable
              style={[styles.rowContainer, styles.searchView]}
              onPress={Actions.searchProducts}>
              <Search
                width={EStyleSheet.value('15rem')}
                height={EStyleSheet.value('15rem')}
              />
              <Text style={styles.searchText}>{Strings.searchProduct}</Text>
            </Pressable>
          </View>
        </ImageBackground>
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
        />
      </ScrollView>
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
