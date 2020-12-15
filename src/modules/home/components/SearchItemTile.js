import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getMediaUrl} from '../../../utils/utility/Utils';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';
import {Strings} from '../../../utils/values/Strings';

const SearchItemTile = (props) => {
  let {name, price, weight} = props.item;

  const [quantity, setQuantity] = useState(0);

  return (
    <View style={[styles.rowContainer, styles.itemContainer]}>
      <View style={styles.productImageContainer}>
        <Image style={styles.productImage} source={{uri: getMediaUrl(null)}} />
      </View>

      <View>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productWeight}>{weight}</Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.price}>
          {Strings.currency} {price}
        </Text>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => {
              setQuantity(quantity > 0 ? quantity - 1 : quantity);
            }}>
            <Text style={styles.quantityButtonIcons}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => {
              setQuantity(quantity + 1);
            }}>
            <Text style={styles.quantityButtonIcons}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImageContainer: {
    height: '65rem',
    width: '65rem',
    borderRadius: '8rem',
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '12rem',
  },
  productImage: {
    height: '45rem',
    width: '45rem',
  },
  productName: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    lineHeight: '18rem',
    width: '160rem',
  },
  productWeight: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.subTitleText,
    letterSpacing: '-0.2rem',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  price: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: '#333333',
    marginBottom: '10vrem',
  },
  quantityButton: {
    width: '20rem',
    height: '20rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderGray,
    borderRadius: '6rem',
  },
  quantityButtonIcons: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
  },
  quantityText: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    marginHorizontal: '10rem',
  },
  itemContainer: {
    marginBottom: '24vrem',
  },
});

export default SearchItemTile;
