import React from 'react';
import {View, Text, ImageBackground, Image, Pressable} from 'react-native';
import {styles} from '../styles/storeProductsStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {getMediaUrl, ripple} from '../../../utils/utility/Utils';
import Search from '../../../assets/images/search.svg';
import BackArrow from '../../../assets/images/white_back.svg';
import LocationIcon from '../../../assets/images/white_location.svg';
import {Strings} from '../../../utils/values/Strings';
import {connect} from 'react-redux';
import CartCounter from '../../commons/components/CartCounter';

let backgroundImage = require('../../../assets/images/store_background.png');

const StoreHeader = (props) => {
  let {storeDetails} = props.storeReducer;

  let {owner_data, location, name} = storeDetails;

  let isLoaded = storeDetails.name ? true : false;

  let profilePhoto = isLoaded
    ? owner_data.profile_photo
      ? owner_data.profile_photo.path
      : null
    : null;

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.imageBackground}
      blurRadius={1}>
      <View style={styles.darkBg} />
      <View style={styles.storeInfoContainer}>
        <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
          <Pressable style={styles.backArrow} onPress={Actions.pop}>
            <BackArrow />
          </Pressable>
          <View>
            <Text
              style={isLoaded ? styles.storeName : styles.storeNamePlaceHolder}>
              {name ? name : ''}
            </Text>
            <Text
              style={
                isLoaded
                  ? styles.storeLocation
                  : styles.storeLocationPlaceHolder
              }>
              {isLoaded && <LocationIcon />}{' '}
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

        <Pressable
          android_ripple={ripple}
          style={[styles.rowContainer, styles.searchView]}
          // onPress={Actions.searchProducts}>
          onPress={() => Actions.algoliaSearch({storeId: storeDetails.id})}>
          <Search
            width={EStyleSheet.value('15rem')}
            height={EStyleSheet.value('15rem')}
          />
          <Text style={styles.searchText}>{Strings.searchProduct}</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  storeReducer: state.storeReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StoreHeader);
