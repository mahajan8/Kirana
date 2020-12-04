import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {styles} from '../styles/homeStyles';
import Input from '../../commons/components/Input';
import Search from '../../../assets/images/search.svg';
import StoreInfoTile from './StoreInfoTile';
import HomeLocationCheck from './HomeLocationCheck';
import SearchLocationModal from './SearchLocationModal';

let stores = [
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
  {
    name: 'The Baker’s Dozen',
    location: 'Pratiksha Nagar',
    rating: '4.1',
    distance: '1',
  },
];

const Home = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  return (
    <SafeArea>
      <CartHeader />
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
      <HomeLocationCheck onSearchPress={() => setSearchVisible(true)} />
      <SearchLocationModal
        visible={searchVisible}
        setVisible={setSearchVisible}
      />
    </SafeArea>
  );
};

export default Home;
