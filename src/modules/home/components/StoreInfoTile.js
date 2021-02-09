import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getMediaUrl, ripple} from '../../../utils/utility/Utils';
import Star from '../../../assets/images/green_rating_star.svg';
import StoreClosed from '../../../assets/images/store_closed.svg';
import StoreShop from '../../../assets/images/store_shop_icon.svg';
import {Strings} from '../../../utils/values/Strings';
import moment from 'moment';
import {styles} from '../styles/storeInfoTileStyles';

const StoreInfoTile = (props) => {
  //Store Tile Layout

  let {
    name,
    location,
    rating,
    distance_in_kms,
    online,
    open_time,
    logo,
  } = props.store;
  let {onPress} = props;

  return (
    <Pressable
      android_ripple={ripple}
      style={[styles.rowContainer, styles.container]}
      onPress={onPress && onPress}
      activeOpacity={1}>
      <Image
        style={styles.storeImage}
        source={{uri: getMediaUrl(logo?.path ?? null)}}
      />
      <View>
        <Text style={styles.storeName}>{name}</Text>
        <Text style={styles.storeLocation}>{location.short_address}</Text>
        <View style={styles.rowContainer}>
          {online && (
            <View style={styles.rowContainer}>
              <Star
                style={styles.star}
                width={EStyleSheet.value('$spacingSuperSmall')}
                height={EStyleSheet.value('$spacingSuperSmall')}
              />
              <Text style={styles.details}>{rating.toFixed(2)}</Text>
              <View style={styles.seperator} />
            </View>
          )}
          <Text style={styles.details}>{distance_in_kms} km</Text>
          {!online && (
            <View style={styles.rowContainer}>
              <View style={[styles.storeClosedContainer, styles.rowContainer]}>
                <StoreClosed
                  width={EStyleSheet.value('$spacingSmall')}
                  height={EStyleSheet.value('$spacingSmall')}
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
                  width={EStyleSheet.value('$spacingSmall')}
                  height={EStyleSheet.value('$spacingSmall')}
                />
                <Text style={[styles.storeClosedText, styles.storeShopText]}>
                  {Strings.orderNowGetAt +
                    moment(open_time, 'hh:mm')
                      .add(1, 'hours')
                      .format('hh:mm A') +
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

export default StoreInfoTile;
