/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import SearchItemTile from '../../home/components/SearchItemTile';
import {styles} from '../styles/cartStyles';
import CartEmptyImage from '../../../assets/images/empty_address.svg';
import CartSelectedAddress from './CartSelectedAddress';
import {connect} from 'react-redux';
import AddressListModal from './AddressListModal';
import {getCart} from '../Api';
import {selectStore} from '../../home/HomeActions';
import CartListHeader from './CartListHeader';
import CartListFooter from './CartListFooter';
import CartShimmer from './CartShimmer';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';

const Cart = (props) => {
  const [addressModal, setAddressModal] = useState(false);
  const [location, setLocation] = useState(props.location);
  const [instructions, setInstructions] = useState('');

  let {cart} = props.cartReducer;

  let {
    total_cost_price,
    delivery_fee,
    product_list,
    store,
    is_overweight,
    is_deliverable,
  } = cart;
  useEffect(() => {
    if (location) {
      getCartItems();
    }
  }, [location]);

  const getCartItems = () => {
    let pars = {
      longitude: location.lng,
      latitude: location.lat,
    };
    props.getCart(pars);
  };

  let list = Object.values(product_list);

  return (
    <SafeArea>
      <Header title={Strings.confirmOrder} type={1} />
      {props.loading ? (
        <CartShimmer />
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={product_list ? list : []}
            renderItem={({item, index}) => (
              <View style={styles.itemContainer}>
                <SearchItemTile item={item} />
              </View>
            )}
            keyExtractor={(item, index) => `cartItem${index}`}
            contentContainerStyle={styles.list}
            ItemSeparatorComponent={() => (
              <View style={styles.listItemSeperator} />
            )}
            ListHeaderComponent={
              list.length && (
                <CartListHeader
                  overWeight={is_overweight}
                  storeName={store ? store.store_name : null}
                />
              )
            }
            ListFooterComponent={
              list.length && (
                <CartListFooter
                  instructions={instructions}
                  setInstructions={setInstructions}
                />
              )
            }
            ListEmptyComponent={
              <View style={styles.listEmptyContainer}>
                <CartEmptyImage />
                <Text style={styles.cartEmptyTitle}>
                  {Strings.cartEmptyTitle}
                </Text>
                <Text style={styles.cartEmptySubTitle}>
                  {Strings.cartEmptySubTitle}
                </Text>
                <Button
                  Style={styles.emptyButton}
                  label={Strings.addProducts}
                  onPress={() => Actions.popTo('_home')}
                />
              </View>
            }
          />

          {list.length ? (
            <CartSelectedAddress
              addAddress={() => {
                setAddressModal(true);
              }}
              location={location}
              deliverable={is_deliverable}
              totalAmount={total_cost_price + delivery_fee}
            />
          ) : null}
        </View>
      )}
      <AddressListModal
        visible={addressModal}
        setVisible={setAddressModal}
        setLocation={setLocation}
        location={location}
      />

      {/* <Loader show={props.loading} /> */}
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  location: state.homeReducer.location,
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = {
  getCart,
  selectStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
