/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import CartHeader from '../../commons/components/CartHeader';
import SafeArea from '../../commons/components/SafeArea';
import StoreInfoTile from '../../home/components/StoreInfoTile';
import StorePlaceholder from '../../home/components/StorePlaceHolder';
import {selectStore} from '../../home/HomeActions';
import {styles} from '../styles/alternativeStoresStyles';
import NoStores from '../../../assets/images/stores_empty_image.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {getAlternativeStores} from '../Api';
import {clearAlternativeStores} from '../OrderActions';

const AlternativeStores = (props) => {
  const {
    alternativeStores,
    alternativeStoresCount,
    orderDeliveryLocation,
    selectedOrderId,
  } = props.orderReducer;

  const [endReachCallable, setEndReachCallable] = useState(true);

  const onStoreClick = (store) => {
    props.selectStore(store);
    Actions.storeProductsResults({
      searchById: true,
    });
  };

  useEffect(() => {
    loadStores();

    return () => props.clearAlternativeStores();
  }, []);

  const loadStores = (start = 0) => {
    const pars = {
      start,
      limit: 10,
      order_id: selectedOrderId,
    };
    props.getAlternativeStores(pars);
  };

  return (
    <SafeArea>
      <CartHeader
        location={orderDeliveryLocation}
        selectLocation={() => console.log('location Change')}
      />
      <FlatList
        data={alternativeStores}
        renderItem={({item}) => (
          <StoreInfoTile store={item} onPress={() => onStoreClick(item)} />
        )}
        keyExtractor={(item, index) => `store${index}`}
        onMomentumScrollBegin={() => setEndReachCallable(false)}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (
            !endReachCallable &&
            alternativeStores.length < alternativeStoresCount
          ) {
            loadStores(alternativeStores.length);
            setEndReachCallable(true);
          }
        }}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={styles.headline}>
            {Strings.alternativeStoresHeadline}
          </Text>
        }
        ListEmptyComponent={
          props.loading ? (
            <View style={styles.container}>
              <StorePlaceholder count={6} />
            </View>
          ) : (
            <View style={styles.listEmptyContainer}>
              <NoStores />
              <Text style={styles.listEmptyHeadline}>
                {Strings.homeStoresEmpty}
              </Text>
            </View>
          )
        }
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  homeReducer: state.homeReducer,
  orderReducer: state.orderReducer,
});

const mapDispatchToProps = {
  selectStore,
  getAlternativeStores,
  clearAlternativeStores,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlternativeStores);
