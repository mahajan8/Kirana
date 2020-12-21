import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {getKeyByValue, getMediaUrl} from '../../../utils/utility/Utils';
import {Colors} from '../../../utils/values/Colors';
import {Strings} from '../../../utils/values/Strings';
import {unitsList} from '../../../utils/values/Values';
import Button from '../../commons/components/Button';
import MinusButton from '../../../assets/images/minus_button.svg';
import PlusButton from '../../../assets/images/plus_button.svg';
import {Fonts} from '../../../utils/values/Fonts';

const ProductBox = (props) => {
  const [count, setCount] = useState(0);

  let {vertical, onPress, item} = props;

  let {
    product_name,
    product_packaging,
    product_quantity,
    store_price,
    product_images,
  } = item;

  return (
    <TouchableOpacity
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
        {Strings.currency} {store_price}
      </Text>
      <Text style={styles.name} numberOfLines={1}>
        {product_name}
      </Text>
      <Text style={styles.weight}>
        {product_quantity} {getKeyByValue(unitsList, product_packaging)}
      </Text>
      <View style={styles.bottomContainer}>
        {count ? (
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.counter}
              onPress={() => setCount(count > 0 ? count - 1 : count)}>
              <MinusButton
                width={EStyleSheet.value('25rem')}
                height={EStyleSheet.value('25rem')}
              />
            </TouchableOpacity>
            <Text style={styles.countText}>{count} kg</Text>
            <TouchableOpacity
              style={styles.counter}
              onPress={() => setCount(count + 1)}>
              <PlusButton
                width={EStyleSheet.value('25rem')}
                height={EStyleSheet.value('25rem')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <Button
            label={Strings.plusAdd}
            Style={[styles.buttonStyle, vertical && styles.verticalButton]}
            labelStyle={styles.addLabel}
            onPress={() => setCount(count + 1)}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  productImage: {
    height: '100rem',
    width: '110rem',
    alignSelf: 'center',
  },
  container: {
    marginTop: '12vrem',
    marginRight: '30rem',
    width: '110rem',
    height: '220vrem',
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
    marginBottom: '15rem',
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

export default ProductBox;
