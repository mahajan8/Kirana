/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, memo} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getKeyByValue, getMediaUrl} from '../../../utils/utility/Utils';
import {Colors} from '../../../utils/values/Colors';
import {Strings} from '../../../utils/values/Strings';
import {unitsList, unitsShortName} from '../../../utils/values/Values';
import Button from '../../commons/components/Button';
import MinusButton from '../../../assets/images/minus_button.svg';
import PlusButton from '../../../assets/images/plus_button.svg';
import {Fonts} from '../../../utils/values/Fonts';
import {connect} from 'react-redux';
import {updateProductQuantity} from '../Api';
import AlertModal from '../../commons/components/AlertModal';

const ProductBox = (props) => {
  const [count, setCount] = useState(0);
  const [replaceAlert, setReplaceAlert] = useState(false);
  const [unbrandedTotal, setUnbrandedTotal] = useState(0);
  const [unbrandedQuantity, setUnbrandedQuantity] = useState(0);

  let {vertical, onPress, item} = props;
  let {
    product_name,
    product_packaging,
    product_quantity,
    store_price,
    product_images,
    product_brand,
    product_id,
  } = item;
  const {selectedStore} = props.homeState;
  const {product_list, store_id, store} = props.cartState.cart;

  useEffect(() => {
    if (product_list[product_id] && selectedStore.id === store.id) {
      setCount(product_list[product_id]['item_quantity']);
      if (!product_brand) {
        setUnbrandedQuantity(product_list[product_id].product_quantity_str);
      }
    }
  }, []);
  const getProductQuantity = (quantity, packaging) => {
    if ((packaging === 2 || packaging === 4) && quantity >= 1000) {
      packaging -= 1;
      quantity = quantity / 1000;
    }
    return quantity + ' ' + getKeyByValue(unitsShortName, packaging);
  };
  const updateQuantity = (increment = true) => {
    if (store && selectedStore.id !== store.id && !replaceAlert) {
      setReplaceAlert(true);
    } else {
      setReplaceAlert(false);
      const pars = {
        product_id,
        quantity: increment ? 1 : -1,
        store_id: selectedStore.id,
      };
      props.updateProductQuantity(pars, (data) => {
        console.log(data);
        if (increment) {
          setCount(count + 1);
        } else {
          setCount(count - 1);
        }
        if (!product_brand) {
          if (count === 1 && !increment) {
            setUnbrandedQuantity(0);
            setUnbrandedTotal(store_price);
          } else {
            setUnbrandedQuantity(data[product_id].product_quantity_str);
            setUnbrandedTotal(data[product_id].total_price);
          }
        }
      });
    }
  };
  return (
    <Pressable
      activeOpacity={1}
      style={[styles.container, vertical && styles.verticalContainer]}
      onPress={() => {
        if (onPress) {
          onPress(item);
        }
      }}>
      <Image
        source={{
          uri: getMediaUrl(
            product_images.length ? product_images[0].path : null,
          ),
        }}
        style={styles.productImage}
      />
      <Text style={styles.price}>
        {Strings.currency}{' '}
        {count
          ? product_brand
            ? store_price * count
            : unbrandedTotal
          : store_price}
      </Text>
      <Text style={styles.name} numberOfLines={1}>
        {product_name}
      </Text>
      <Text style={styles.weight}>
        {product_quantity} {getKeyByValue(unitsList, product_packaging)}
      </Text>
      <View style={styles.bottomContainer}>
        {count ? (
          <View
            style={[
              styles.counterContainer,
              vertical && styles.verticalButton,
            ]}>
            <Pressable
              style={styles.counter}
              onPress={() => updateQuantity(false)}>
              <MinusButton
                width={EStyleSheet.value('25rem')}
                height={EStyleSheet.value('25rem')}
              />
            </Pressable>
            <Text style={styles.countText}>
              {product_brand ? count : unbrandedQuantity}
            </Text>
            <Pressable style={styles.counter} onPress={updateQuantity}>
              <PlusButton
                width={EStyleSheet.value('25rem')}
                height={EStyleSheet.value('25rem')}
              />
            </Pressable>
          </View>
        ) : (
          <Button
            label={Strings.plusAdd}
            Style={[styles.buttonStyle, vertical && styles.verticalButton]}
            labelStyle={styles.addLabel}
            onPress={updateQuantity}
          />
        )}
      </View>

      <AlertModal
        visible={replaceAlert}
        setVisible={setReplaceAlert}
        heading={Strings.replaceHeading}
        desc={
          Strings.replaceDesc1 +
          (store && store.name) +
          Strings.replaceDesc2 +
          selectedStore.name
        }
        label1={Strings.no}
        label2={Strings.yesDiscard}
        invert
        button1Press={() => setReplaceAlert(false)}
        button2Press={updateQuantity}
      />
    </Pressable>
  );
};

const styles = EStyleSheet.create({
  productImage: {
    height: '100rem',
    width: '110rem',
    alignSelf: 'center',
  },
  container: {
    marginTop: '15vrem',
    marginRight: '30rem',
    width: '110rem',
    height: '200vrem',
  },
  verticalContainer: {
    width: '150rem',
  },
  price: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.titleText,
    marginTop: '8vrem',
    marginBottom: '2rem',
  },
  name: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    color: Colors.titleText,
    marginBottom: '2rem',
  },
  weight: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    color: '#787787',
  },
  buttonStyle: {
    width: '100%',
    height: '25vrem',
    borderRadius: '2rem',
  },
  buttonLabel: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    letterSpacing: '0.1rem',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counter: {
    width: '25rem',
    height: '25rem',
    borderRadius: '6rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
  },
  countText: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: '#333333',
    letterSpacing: '-0.2rem',
  },
  verticalButton: {
    // marginBottom: '15rem',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  addLabel: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.1rem',
  },
});
function arePropsEqual(prevProps, nextProps) {
  return prevProps.item.product_id === nextProps.item.product_id;
}

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeReducer: state.storeReducer,
  homeState: state.homeReducer,
  cartState: state.cartReducer,
});

const mapDispatchToProps = {
  updateProductQuantity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(ProductBox, arePropsEqual));
