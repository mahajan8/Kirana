/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Pressable, Animated, Text} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {Actions} from 'react-native-router-flux';
import List from './StoreProductsListing';
import {connect} from 'react-redux';
import {getStoreDetails} from '../Api';
import ListPlaceHolder from './ListPlaceHolder';
import {setCategoryProducts, setStoreDetails} from '../StoreActions';
import StoreHeader from './StoreHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from '../styles/storeCategoriesStyles';
import Search from '../../../assets/images/search.svg';
import {Strings} from '../../../utils/values/Strings';
import CartCounter from '../../commons/components/CartCounter';
import {ripple} from '../../../utils/utility/Utils';

const StoreCategories = (props) => {
  useEffect(() => {
    let pars = {
      store_id: selectedStore.id,
    };
    props.getStoreDetails(pars);

    return () => {
      props.setStoreDetails({});
      props.setCategoryProducts([]);
    };
  }, []);

  let {categoryProducts} = props.storeReducer;
  let {selectedStore} = props.homeReducer;

  const [scroll] = useState(new Animated.Value(0));
  const HEADER_HEIGHT = EStyleSheet.value('230vrem');

  const renderSticky = () => {
    return (
      <Animated.View
        style={[
          styles.stickySearchBar,
          {
            transform: [{translateY: searchTranslate}],
            opacity: searchOpacity,
            zIndex: zIndex,
          },
        ]}>
        <Pressable
          style={styles.searchContainer}
          android_ripple={ripple}
          onPress={Actions.searchProducts}>
          <Search />

          <Text style={styles.searchText}>{Strings.searchProduct}</Text>

          <CartCounter />
        </Pressable>
      </Animated.View>
    );
  };

  const storeHeader = () => (
    <Animated.View
      style={{
        transform: [
          {translateY: Animated.multiply(scroll, 0.65)},
          {scale: headerScale},
        ],
        opacity: headerOpacity,
      }}>
      <StoreHeader />
    </Animated.View>
  );

  const headerOpacity = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerScale = scroll.interpolate({
    inputRange: [-25, 0],
    outputRange: [1.1, 1],
    extrapolateRight: 'clamp',
  });

  const searchOpacity = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const searchTranslate = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
    outputRange: [-50, -50, 0],
    extrapolate: 'clamp',
  });

  const zIndex = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, 2],
    extrapolate: 'clamp',
  });

  return (
    <SafeArea>
      {renderSticky()}
      <Animated.FlatList
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
        ListHeaderComponent={storeHeader}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {useNativeDriver: true},
        )}
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeReducer: state.storeReducer,
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {
  getStoreDetails,
  setCategoryProducts,
  setStoreDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreCategories);
