import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {getMediaUrl} from '../../../utils/utility/Utils';
import {Colors} from '../../../utils/values/Colors';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';

const ProductBox = (props) => {
  const [count, setCount] = useState(0);

  let {vertical, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container, vertical && styles.verticalContainer]}
      onPress={onPress && onPress}>
      <Image source={{uri: getMediaUrl(null)}} style={styles.productImage} />
      <Text style={styles.price}>{Strings.currency} 450</Text>
      <Text style={styles.name}>Australian Cherries</Text>
      <Text style={styles.weight}>1 kg</Text>
      {count ? (
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.counter}
            onPress={() => setCount(count > 0 ? count - 1 : count)}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{count} kg</Text>
          <TouchableOpacity
            style={styles.counter}
            onPress={() => setCount(count + 1)}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Button
          label={Strings.plusAdd}
          Style={[styles.buttonStyle, vertical && styles.verticalButton]}
          labelStyle={styles.labelStyle}
          onPress={() => setCount(count + 1)}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  productImage: {
    height: '100rem',
    width: '100rem',
    alignSelf: 'center',
  },
  container: {
    marginTop: '12vrem',
    marginRight: '30rem',
    width: '110rem',
  },
  verticalContainer: {
    width: '150rem',
  },
  price: {
    fontSize: '14rem',
    fontWeight: '900',
    color: Colors.titleText,
    marginTop: '8vrem',
  },
  name: {
    fontSize: '10rem',
    fontWeight: '100',
    color: Colors.titleText,
  },
  weight: {
    fontSize: '10rem',
    fontWeight: '100',
    color: '#787787',
    marginBottom: '30vrem',
  },
  buttonStyle: {
    width: '100%',
    height: '25vrem',
    borderRadius: '2rem',
  },
  buttonLabel: {
    fontSize: '12rem',
    fontWeight: '100',
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
  counterText: {
    fontSize: '14rem',
    fontWeight: '500',
    color: Colors.themeGreen,
  },
  countText: {
    fontSize: '12rem',
    fontWeight: '500',
    color: '#333333',
    letterSpacing: '-0.2rem',
  },
  verticalButton: {
    marginBottom: '15rem',
  },
});

export default ProductBox;
