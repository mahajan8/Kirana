/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
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

const Explore = (props) => {
  useEffect(() => {
    props.getStoreCategories();
  }, []);

  const renderCategory = (item) => (
    <View style={styles.categoryContainer}>
      <Image
        style={styles.categoryImage}
        source={{
          uri: getMediaUrl(item.attachment ? item.attachment.path : null),
        }}
      />
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeArea>
      <View style={[styles.searchContainer, commonStyles.shadow]}>
        <Search
          width={EStyleSheet.value('14rem')}
          height={EStyleSheet.value('14rem')}
        />
        <Text style={styles.searchProduct}>{Strings.searchProduct}...</Text>
        <CartCounter />
      </View>
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
});

const mapDispatchToProps = {
  getStoreCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
