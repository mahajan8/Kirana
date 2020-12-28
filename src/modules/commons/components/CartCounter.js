import React from 'react';
import {Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {connect} from 'react-redux';
import Cart from '../../../assets/images/cart.svg';
import {Fonts} from '../../../utils/values/Fonts';

const CartCounter = (props) => {
  const {item_quantity_count} = props.cart;
  return (
    <Pressable style={styles.container}>
      <Cart
        width={EStyleSheet.value('14rem')}
        height={EStyleSheet.value('14rem')}
      />
      <Text style={styles.count}>{item_quantity_count}</Text>
    </Pressable>
  );
};

const styles = EStyleSheet.create({
  container: {
    paddingVertical: '4vrem',
    paddingHorizontal: '10rem',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '50rem',
    backgroundColor: Colors.themeGreen,
  },
  count: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.white,
    marginLeft: '5rem',
  },
});

const mapStateToProps = (state) => ({
  cart: state.homeReducer.cart,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);
