import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
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

const Home = (props) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [location, setLocation] = useState(null);
  const {addresses, selectedAddress, stores, storeCount} = props.homeReducer;

  useEffect(() => {
    if (location) {
      loadStores(0);
    }
  }, [location]);

  const loadStores = (start) => {
    const data = {
      start,
      limit: 10,
      latitude: location.lat,
      longitude: location.lng,
    };
    props.getStores(data);
  };
  return (
    <SafeArea>
      <CartHeader
        location={location}
        selectLocation={() => setSearchVisible(true)}
      />
      <FlatList
        data={stores}
        renderItem={({item}) => <StoreInfoTile store={item} />}
        keyExtractor={(item, index) => `store${index}`}
        ListHeaderComponent={
          <View style={styles.container}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.searchContainer}
              onPress={() => Actions.searchProducts()}>
              <Search
                width={EStyleSheet.value('14rem')}
                height={EStyleSheet.value('14rem')}
              />
              <Text style={styles.textInput}>{Strings.searchProduct}</Text>
            </TouchableOpacity>
            <Text style={styles.nearbyText}>{Strings.nearbyStores}</Text>
          </View>
        }
        contentContainerStyle={styles.list}
      />
      <HomeLocationCheck
        onSearchPress={() => setSearchVisible(true)}
        setLocation={setLocation}
        selectedLocation={location}
      />
      <SearchLocationModal
        visible={searchVisible}
        setVisible={setSearchVisible}
        setLocation={setLocation}
      />
    </SafeArea>
  );
};
const mapStateToProps = (state) => ({
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {
  getStores,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
