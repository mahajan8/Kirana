/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {styles} from '../styles/homeStyles';
import Search from '../../../assets/images/search.svg';
import StoreInfoTile from './StoreInfoTile';
import HomeLocationCheck from './HomeLocationCheck';
import SearchLocationModal from './SearchLocationModal';
import {getStores} from '../Api';
import {connect} from 'react-redux';
import {setLocation} from '../../onboarding/OnboardingActions';
import NoStores from '../../../assets/images/stores_empty_image.svg';
import Button from '../../commons/components/Button';
import StorePlaceholder from './StorePlaceHolder';
import {selectStore, setCurrentOrders} from '../HomeActions';
import {ripple} from '../../../utils/utility/Utils';
import PubNub from 'pubnub';
import {AppConfig} from '../../../config/AppConfig';
import {environment} from '../../../config/EnvConfig';
import store from '../../../utils/Store';
import {orderStatus} from '../../../utils/values/Values';

const pubnub = new PubNub({
  publishKey: AppConfig[environment].pubnubPublishKey,
  subscribeKey: AppConfig[environment].pubnutSubscribeKey,
});

const Home = (props) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [endReachCallable, setEndReachCallable] = useState(true);
  const {stores, storeCount, location, userDetails} = props.homeReducer;
  const [channels] = useState([userDetails.id]);

  useEffect(() => {
    if (location) {
      loadStores(0);
    }
  }, [location]);

  // useEffect(() => {
  //   let listener = {message: handleMessage};
  //   pubnub.subscribe({channels});
  //   pubnub.addListener(listener);

  //   return () => {
  //     pubnub.unsubscribe({channels});
  //     pubnub.removeListener(listener);
  //   };
  // }, [pubnub, channels]);

  // const handleMessage = async (event) => {
  //   const {type, payload} = event.message;

  //   let {id, status, store_name} = payload.order;

  //   let order = {
  //     id,
  //     status,
  //     store_name,
  //   };

  //   let {currentOrders} = store.getState().homeReducer;

  //   let i = currentOrders.findIndex((obj) => obj.id === id);

  //   let newCurrentOrders = [...currentOrders];

  //   if (i >= 0) {
  //     if (status === orderStatus.ORDER_DELIVERED) {
  //       newCurrentOrders.splice(i, 1);
  //     }
  //   } else {
  //     if (status !== orderStatus.ORDER_DELIVERED) {
  //       newCurrentOrders.push(order);
  //     }
  //   }

  //   props.setCurrentOrders(newCurrentOrders);
  // };

  const searchProductHeader = () => {
    return (
      <View style={styles.container}>
        <Pressable
          activeOpacity={0.5}
          style={styles.searchContainer}
          onPress={Actions.searchStoreProducts}
          android_ripple={ripple}>
          <Search
            width={EStyleSheet.value('14rem')}
            height={EStyleSheet.value('14rem')}
          />
          <Text style={styles.textInput}>{Strings.searchProduct}</Text>
        </Pressable>
        <Text style={styles.nearbyText}>{Strings.nearbyStores}</Text>
      </View>
    );
  };
  const loadStores = (start) => {
    const data = {
      start,
      limit: 10,
      latitude: location.lat,
      longitude: location.lng,
    };
    props.getStores(data);
  };
  const onStoreClick = (store) => {
    props.selectStore(store);
    Actions.store();
  };

  const renderListEmptyComponent = () =>
    props.loading ? (
      <View style={styles.container}>
        <StorePlaceholder count={6} />
      </View>
    ) : (
      <View style={styles.listEmptyContainer}>
        <NoStores />
        <Text style={styles.listEmptyHeadline}>{Strings.homeStoresEmpty}</Text>
        <Button
          label={Strings.changeLocation}
          Style={styles.listEmptyButton}
          onPress={() => setSearchVisible(true)}
        />
      </View>
    );

  return (
    <SafeArea>
      <CartHeader
        location={location}
        selectLocation={() => setSearchVisible(true)}
        drawer
      />
      <FlatList
        data={stores}
        renderItem={({item}) => (
          <StoreInfoTile store={item} onPress={() => onStoreClick(item)} />
        )}
        keyExtractor={(item, index) => `store${index}`}
        onMomentumScrollBegin={() => setEndReachCallable(false)}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (!endReachCallable && stores.length < storeCount) {
            loadStores(stores.length);
            setEndReachCallable(true);
          }
        }}
        ListHeaderComponent={stores.length && searchProductHeader}
        contentContainerStyle={styles.list}
        ListEmptyComponent={renderListEmptyComponent}
      />
      <HomeLocationCheck
        onSearchPress={() => setSearchVisible(true)}
        setLocation={props.setLocation}
        selectedLocation={location}
      />
      <SearchLocationModal
        visible={searchVisible}
        setVisible={setSearchVisible}
        setLocation={props.setLocation}
        cancellable={location ? true : false}
      />
    </SafeArea>
  );
};
const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {
  getStores,
  setLocation,
  selectStore,
  setCurrentOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
