import React from 'react';
import {Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import Cart from '../../../assets/images/cart.svg';
import {Actions} from 'react-native-router-flux';
import {selectStore} from '../../home/HomeActions';
import {ripple} from '../../../utils/utility/Utils';
import {styles} from '../styles/cartCounterStyles';

const CartCounter = (props) => {
  const {item_quantity_count, store} = props.cart;
  const onCartClicked = () => {
    if (store) {
      props.selectStore(store);
    }
    Actions.cart();
  };
  return (
    <Pressable
      style={styles.container}
      onPress={onCartClicked}
      android_ripple={ripple}>
      <Cart
        width={EStyleSheet.value('$spacingExtraMedium')}
        height={EStyleSheet.value('$spacingExtraMedium')}
      />
      <Text style={styles.count}>{item_quantity_count}</Text>
    </Pressable>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

const mapDispatchToProps = {
  selectStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);
