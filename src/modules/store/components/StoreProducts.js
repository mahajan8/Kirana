/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
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

const StoreProducts = (props) => {
  const [storeDetails, setStoreDetails] = useState(null);
  const [storeProducts, setStoreProducts] = useState(null);

  useEffect(() => {
    let pars = {
      store_id: props.storeId,
    };
    props.getStoreDetails(pars, (data) => {
      console.log(data);
      setStoreProducts(data.store_products);
      setStoreDetails(data.store_details);
    });
  }, []);

  if (storeDetails) {
    let {owner_data, location, name} = storeDetails;

    let profilePhoto = owner_data.profile_photo
      ? owner_data.profile_photo
      : null;

    return (
      <SafeArea>
        <ScrollView>
          <ImageBackground
            source={require('../../../assets/images/dummy.png')}
            style={styles.imageBackground}
            blurRadius={2}>
            <View style={styles.storeInfoContainer}>
              <TouchableOpacity style={styles.backArrow} onPress={Actions.pop}>
                <BackArrow
                  width={EStyleSheet.value('16rem')}
                  height={EStyleSheet.value('16rem')}
                />
              </TouchableOpacity>
              <Text
                style={styles.storeName}
                onPress={() => console.log(storeDetails)}>
                {name ? name : ''}
              </Text>
              <Text style={styles.storeLocation}>{location.short_address}</Text>
              <Image
                source={{
                  uri: getMediaUrl(
                    profilePhoto ? profilePhoto.path : profilePhoto,
                  ),
                }}
                style={styles.image}
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

          {storeProducts.map((item, index) => (
            <List
              label={item.name}
              list={item.products}
              key={`categoryProduct${index}`}
              onMorePress={() =>
                Actions.productsBySubCategory({
                  categoryName: item.name,
                  categoryId: item.id,
                  storeId: props.storeId,
                })
              }
            />
          ))}
        </ScrollView>
      </SafeArea>
    );
  } else {
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
              <View style={styles.storeNamePlaceHolder} />
              <View style={styles.storeLocationPlaceHolder} />
              <View style={styles.profilePicPlaceHolder} />
              <View style={[styles.rowContainer, styles.searchView]}>
                <Search
                  width={EStyleSheet.value('15rem')}
                  height={EStyleSheet.value('15rem')}
                />
                <Text style={styles.searchText}>{Strings.searchProduct}</Text>
              </View>
            </View>
          </ImageBackground>

          <ListPlaceHolder count={4} />
          <ListPlaceHolder count={4} vertical />
        </ScrollView>
      </SafeArea>
    );
  }
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  getStoreDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreProducts);
