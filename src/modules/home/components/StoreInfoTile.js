import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getMediaUrl} from '../../../utils/utility/Utils';
import {Colors} from '../../../utils/values/Colors';
import Star from '../../../assets/images/green_rating_star.svg';
import StoreClosed from '../../../assets/images/store_closed.svg';
import StoreShop from '../../../assets/images/store_shop_icon.svg';
import {Strings} from '../../../utils/values/Strings';
import {Fonts} from '../../../utils/values/Fonts';
import moment from 'moment';

const StoreInfoTile = (props) => {
  let {
    name,
    location,
    rating,
    distance_in_kms,
    online,
    open_time,
  } = props.store;
  let {onPress} = props;

  return (
    <Pressable
      style={[styles.rowContainer, styles.container]}
      onPress={onPress && onPress}
      activeOpacity={1}>
      <Image style={styles.storeImage} source={{uri: getMediaUrl(null)}} />
      <View>
        <Text style={styles.storeName}>{name}</Text>
        <Text style={styles.storeLocation}>{location.short_address}</Text>
        <View style={styles.rowContainer}>
          {online && (
            <View style={styles.rowContainer}>
              <Star
                style={styles.star}
                width={EStyleSheet.value('10rem')}
                height={EStyleSheet.value('10rem')}
              />
              <Text style={styles.details}>{rating}</Text>
              <View style={styles.seperator} />
            </View>
          )}
          <Text style={styles.details}>{distance_in_kms} km</Text>
          {!online && (
            <View style={styles.rowContainer}>
              <View style={[styles.storeClosedContainer, styles.rowContainer]}>
                <StoreClosed
                  width={EStyleSheet.value('8rem')}
                  height={EStyleSheet.value('8rem')}
                />
                <Text style={styles.storeClosedText}>
                  {Strings.storeClosed}
                </Text>
              </View>
              <View
                style={[
                  styles.storeClosedContainer,
                  styles.storeShopContainer,
                  styles.rowContainer,
                ]}>
                <StoreShop
                  width={EStyleSheet.value('8rem')}
                  height={EStyleSheet.value('8rem')}
                />
                <Text style={[styles.storeClosedText, styles.storeShopText]}>
                  {Strings.orderNowGetAt +
                    moment(open_time, 'hh:mm').format('hh:mm A') +
                    '!'}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginBottom: '20vrem',
    alignItems: 'flex-start',
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
    fontFamily: Fonts.medium,
    letterSpacing: '-0.1rem',
    color: Colors.titleText,
    marginTop: '7rem',
  },
  storeLocation: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    letterSpacing: '-0.2rem',
    color: Colors.lightGray,
    marginBottom: '4vrem',
  },
  details: {
    fontSize: '10rem',
    fontFamily: Fonts.regular,
    letterSpacing: '-0.17rem',
    color: Colors.darkGray,
  },
  star: {
    marginRight: '3rem',
  },
  seperator: {
    width: '1rem',
    backgroundColor: '#e0e0e0',
    marginHorizontal: '7rem',
    height: '12vrem',
  },
  storeClosedContainer: {
    backgroundColor: '#f8d7da',
    borderRadius: '3rem',
    padding: '5rem',
    marginLeft: '6rem',
  },
  storeClosedText: {
    color: '#731c23',
    fontSize: '8rem',
    fontFamily: Fonts.medium,
    marginLeft: '4rem',
  },
  storeShopContainer: {
    backgroundColor: '#dcebfe',
  },
  storeShopText: {
    color: '#014085',
  },
});

export default StoreInfoTile;
