/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/storeProductsStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {getMediaUrl} from '../../../utils/utility/Utils';
import Search from '../../../assets/images/search.svg';
import BackArrow from '../../../assets/images/back-arrow.svg';
import {Strings} from '../../../utils/values/Strings';
import List from './StoreProductsListing';
import {connect} from 'react-redux';
import {getStoreDetails} from '../Api';
import ListPlaceHolder from './ListPlaceHolder';
import CartCounter from '../../commons/components/CartCounter';

let backgroundImage = require('../../../assets/images/store_background.png');

const StoreCategories = (props) => {
  const [storeDetails, setStoreDetails] = useState({});
  const [storeProducts, setStoreProducts] = useState(null);

  useEffect(() => {
    let pars = {
      store_id: props.storeId,
    };
    props.getStoreDetails(pars, (data) => {
      setStoreProducts(data.store_products);
      setStoreDetails(data.store_details);
      console.log({pars, data: data.store_products});
    });
  }, []);

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
                <BackArrow
                  width={EStyleSheet.value('16rem')}
                  height={EStyleSheet.value('16rem')}
                />
              </TouchableOpacity>
              <View>
                <Text
                  style={
                    isLoaded ? styles.storeName : styles.storeNamePlaceHolder
                  }
                  onPress={() => console.log(storeDetails)}>
                  {name ? name : ''}
                </Text>
                <Text
                  style={
                    isLoaded
                      ? styles.storeLocation
                      : styles.storeLocationPlaceHolder
                  }>
                  {isLoaded ? location.short_address : null}
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

            <View style={[styles.rowContainer, styles.searchView]}>
              <Search
                width={EStyleSheet.value('15rem')}
                height={EStyleSheet.value('15rem')}
              />
              <Text style={styles.searchText}>{Strings.searchProduct}</Text>
            </View>
          </View>
        </ImageBackground>
        <FlatList
          data={storeProducts}
          renderItem={({item}) => (
            <List
              label={item.name}
              list={item.products}
              onMorePress={() =>
                Actions.storeSubCategories({
                  categoryName: item.name,
                  categoryId: item.id,
                  storeId: props.storeId,
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
});

const mapDispatchToProps = {
  getStoreDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreCategories);
