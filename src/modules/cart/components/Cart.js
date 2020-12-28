import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import SearchItemTile from '../../home/components/SearchItemTile';
import {styles} from '../styles/cartStyles';
import InstructionsIcon from '../../../assets/images/cart_instructions.svg';
import CartSelectedAddress from './CartSelectedAddress';
import {connect} from 'react-redux';
import AddressListModal from './AddressListModal';

let cartItems = [
  {
    product_name: 'Fortune Sunlite Refined Sunflower Oil (Pouch)',
    product_packaging: 2,
    product_quantity: 1,
    store_price: 23,
    product_images: [],
  },
  {
    product_name: 'Fortune Sunlite (Pouch)',
    product_packaging: 3,
    product_quantity: 1,
    store_price: 23,
    product_images: [],
  },
  {
    product_name: 'Fortune Sunlite Refined Sunflower Oil (Pouch)',
    product_packaging: 2,
    product_quantity: 1,
    store_price: 23,
    product_images: [],
  },
  {
    product_name: 'Fortune Sunlite (Pouch)',
    product_packaging: 3,
    product_quantity: 1,
    store_price: 23,
    product_images: [],
  },
  {
    product_name: 'Fortune Sunlite Refined Sunflower Oil (Pouch)',
    product_packaging: 2,
    product_quantity: 1,
    store_price: 23,
    product_images: [],
  },
];

const Cart = (props) => {
  const [addressModal, setAddressModal] = useState(false);

  return (
    <SafeArea>
      <Header title={Strings.confirmOrder} type={1} />

      <FlatList
        data={cartItems}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer}>
            <SearchItemTile item={item} />
          </View>
        )}
        keyExtractor={(item, index) => `cartItem${index}`}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.listItemSeperator} />}
        ListHeaderComponent={
          <View style={styles.container}>
            <View style={[styles.rowContainer, styles.storeNameContainer]}>
              <Text style={styles.grayHeading}>The Baker’s Dozen</Text>
              <Text style={styles.addMore}>+ Add more</Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <View style={styles.seperator} />

            <View style={[styles.rowContainer, styles.container]}>
              <InstructionsIcon />
              <Text style={styles.instructionsPlaceholder}>
                {Strings.cartInstructionsPlaceholder}
              </Text>
            </View>

            <View style={styles.seperator} />

            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>
                {Strings.estimatedDeliveryTime} {'40 minutes'}
              </Text>
            </View>

            <View style={styles.seperator} />

            <View style={styles.container}>
              <Text style={styles.grayHeading}>{Strings.paymentDetails}</Text>
              <View style={[styles.borderedContainer, styles.detailsContainer]}>
                <Text style={styles.detailsText}>
                  {Strings.youSaved} {Strings.currency} {30}{' '}
                  {Strings.onThisBill}
                </Text>
              </View>

              {/* Sub total */}
              <View style={[styles.rowContainer, styles.priceContainer]}>
                <Text style={styles.priceLabel}>{Strings.subTotal}</Text>
                <Text style={styles.amount}>
                  {Strings.currency} {32}
                </Text>
              </View>

              <View style={styles.priceSeperator} />

              {/* Delivery Charge */}
              <View style={[styles.rowContainer, styles.priceContainer]}>
                <Text style={styles.priceLabel}>{Strings.deliveryCharge}</Text>
                <View style={styles.rowContainer}>
                  <Text style={[styles.amount, styles.slicedAmount]}>
                    {Strings.currency} {40}
                  </Text>
                  <Text style={styles.amount}>
                    {Strings.currency} {1}
                  </Text>
                </View>
              </View>

              <View style={styles.priceSeperator} />

              {/* Grand Total */}
              <View style={[styles.rowContainer, styles.priceContainer]}>
                <Text style={styles.grandTotalLabel}>{Strings.grandTotal}</Text>
                <Text style={styles.grandTotalAmount}>
                  {Strings.currency} {33}
                </Text>
              </View>
            </View>
          </View>
        }
      />

      <CartSelectedAddress
        addAddress={() => {
          setAddressModal(true);
        }}
      />
      <AddressListModal visible={addressModal} setVisible={setAddressModal} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
