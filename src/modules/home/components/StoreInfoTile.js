import React from 'react';
import {View, Text, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getMediaUrl} from '../../../utils/utility/Utils';
import {Colors} from '../../../utils/values/Colors';

const StoreInfoTile = (props) => {
  let {name, location, rating, distance} = props.store;

  return (
    <View style={[styles.rowContainer, styles.container]}>
      <Image style={styles.storeImage} source={{uri: getMediaUrl(null)}} />
      <View>
        <Text style={styles.storeName}>{name}</Text>
        <Text style={styles.storeLocation}>{location}</Text>
        <View style={styles.rowContainer}>
          {/* TODO: Replace with Star Icon */}
          <Text style={styles.star}>*</Text>
          <Text style={styles.details}>{rating}</Text>
          <View style={styles.seperator} />
          <Text style={styles.details}>{distance} km</Text>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginBottom: '20vrem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeImage: {
    width: '70rem',
    height: '70rem',
    borderRadius: '8rem',
    marginRight: '16rem',
  },
  storeName: {
    fontSize: '14rem',
    fontWeight: '500',
    letterSpacing: '-0.1rem',
    color: Colors.titleText,
  },
  storeLocation: {
    fontSize: '12rem',
    fontWeight: '500',
    letterSpacing: '-0.2rem',
    color: Colors.lightGray,
  },
  details: {
    fontSize: '10rem',
    fontWeight: '100',
    letterSpacing: '-0.17rem',
    color: Colors.darkGray,
  },
  star: {
    color: Colors.themeGreen,
    marginRight: '3rem',
  },
  seperator: {
    width: '1rem',
    backgroundColor: '#e0e0e0',
    marginHorizontal: '7rem',
    height: '12vrem',
  },
});

export default StoreInfoTile;
