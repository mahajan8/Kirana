/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {commonStyles} from '../../commons/styles/commonStyles';
import {styles} from '../styles/exploreStyles';
import Search from '../../../assets/images/search.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import CartCounter from '../../commons/components/CartCounter';
import {getMediaUrl} from '../../../utils/utility/Utils';
import {getStoreCategories} from '../Api';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

const Explore = (props) => {
  useEffect(() => {
    const pars = {
      store_id: selectedStore.id,
    };
    props.getStoreCategories(pars);
  }, []);

  let {selectedStore} = props.homeReducer;

  const renderCategory = (item) => (
    <Pressable
      style={styles.categoryContainer}
      onPress={() =>
        Actions.storeSubCategories({
          categoryName: item.name,
          categoryId: item.id,
        })
      }>
      <Image
        style={styles.categoryImage}
        source={{
          uri: getMediaUrl(item.attachment ? item.attachment.path : null),
        }}
      />
      <Text style={styles.categoryName}>{item.name}</Text>
    </Pressable>
  );

  return (
    <SafeArea>
      <Pressable
        style={[styles.searchContainer, commonStyles.shadow]}
        onPress={Actions.searchProducts}>
        <Search
          width={EStyleSheet.value('14rem')}
          height={EStyleSheet.value('14rem')}
        />
        <Text style={styles.searchProduct}>{Strings.searchProduct}...</Text>
        <CartCounter />
      </Pressable>
      <View style={styles.container}>
        <Text style={styles.heading}>{Strings.groceryCategories}</Text>
        <FlatList
          data={props.storeCategories}
          keyExtractor={(item, index) => `categories${index}`}
          renderItem={({item}) => renderCategory(item)}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeCategories: state.storeReducer.storeCategories,
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {
  getStoreCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
