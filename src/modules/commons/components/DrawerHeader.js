/* eslint-disable eqeqeq */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Actions} from 'react-native-router-flux';
import Back from '../../../assets/images/back-arrow.svg';
import Search from '../../../assets/images/search.svg';
import {Strings} from '../../../utils/values/Strings';
import {commonStyles} from '../styles/commonStyles';
import Location from '../../../assets/images/location.svg';
import DownArrow from '../../../assets/images/down_arrow.svg';
import CartCounter from './CartCounter';

// type =0 --> Auth Header with title and subtitle
// type =1 --> Row Header with title and back arrow
// type =2 --> Type 1 header with Create Product and search button

const DrawerHeader = (props) => {
  const {title, noShadow, containerStyle, onBack, headerRight} = props;

  return (
    <View
      style={[
        styles.container,
        !noShadow && commonStyles.shadow,
        containerStyle && containerStyle,
        styles.rowContainer,
      ]}>
      <TouchableOpacity
        onPress={() => {
          if (onBack) {
            onBack();
          } else {
            Actions.drawerOpen();
          }
        }}
        hitSlop={commonStyles.hitSlop}>
        <Back
          width={EStyleSheet.value('18rem')}
          height={EStyleSheet.value('14rem')}
        />
      </TouchableOpacity>

      <View style={[styles.locationContainer, styles.rowContainer]}>
        <Location
          width={EStyleSheet.value('12rem')}
          height={EStyleSheet.value('12rem')}
        />
        <Text style={styles.title}>{'Home'}</Text>
        <DownArrow
          width={EStyleSheet.value('10rem')}
          height={EStyleSheet.value('10rem')}
        />
      </View>
      <View style={styles.headerRightContainer}>
        {headerRight ? headerRight : <CartCounter />}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    padding: '20rem',
    borderColor: Colors.seperatorColor,
    paddingLeft: '20rem',
    paddingRight: '16rem',
    paddingVertical: '15rem',
    backgroundColor: '#FFF',
  },
  subTitle: {
    color: Colors.subTitleText,
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    fontWeight: '100',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: '12vrem',
  },
  title: {
    color: Colors.titleText,
    fontSize: '14rem',
    fontWeight: '500',
    marginLeft: '6rem',
    marginRight: '14rem',
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    marginLeft: '20rem',
  },
});

export default DrawerHeader;
