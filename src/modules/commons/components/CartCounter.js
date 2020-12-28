import React from 'react';
import {Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {connect} from 'react-redux';
import Cart from '../../../assets/images/cart.svg';
import {Fonts} from '../../../utils/values/Fonts';
import {Actions} from 'react-native-router-flux';

const CartCounter = () => {
  return (
    <Pressable style={styles.container} onPress={Actions.cart}>
      <Cart
        width={EStyleSheet.value('14rem')}
        height={EStyleSheet.value('14rem')}
      />
      <Text style={styles.count}>0</Text>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);
