/* eslint-disable eqeqeq */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Pressable,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Actions} from 'react-native-router-flux';
import Back from '../../../assets/images/back-arrow.svg';
import Menu from '../../../assets/images/menu_icon.svg';
import Search from '../../../assets/images/search.svg';
import {Strings} from '../../../utils/values/Strings';
import {commonStyles} from '../styles/commonStyles';
import Location from '../../../assets/images/green_location.svg';
import DownArrow from '../../../assets/images/header_down_arrow.svg';
import Cross from '../../../assets/images/gray_cross.svg';
import CartCounter from './CartCounter';
import {Fonts} from '../../../utils/values/Fonts';

// type =0 --> Auth Header with title and subtitle
// type =1 --> Row Header with title and back arrow
// type =2 --> Type 1 header with Create Product and search button

const CartHeader = (props) => {
  const {
    search,
    noShadow,
    containerStyle,
    onBack,
    headerRight,
    searchValue,
    onSearchChange,
    titleComp,
    inputRef,
    location,
    selectLocation,
    drawer,
    onCrossPress,
  } = props;

  return (
    <View
      style={[
        styles.container,
        !noShadow && styles.headerShadow,
        containerStyle && containerStyle,
        styles.rowContainer,
      ]}>
      <TouchableOpacity
        onPress={() => {
          if (onBack) {
            onBack();
          } else {
            if (Actions.currentScene === '_home') {
              Actions.drawerOpen();
            } else {
              Actions.pop();
            }
          }
        }}
        hitSlop={commonStyles.hitSlop}>
        {drawer ? (
          <Menu
            style={styles.leftButton}
            width={EStyleSheet.value('18rem')}
            height={EStyleSheet.value('14rem')}
          />
        ) : (
          <Back
            style={styles.leftButton}
            width={EStyleSheet.value('18rem')}
            height={EStyleSheet.value('14rem')}
          />
        )}
      </TouchableOpacity>

      {titleComp ? (
        titleComp
      ) : search ? (
        <View style={styles.searchContainer}>
          <Search
            width={EStyleSheet.value('14rem')}
            height={EStyleSheet.value('14rem')}
          />
          <TextInput
            style={styles.textInput}
            placeholder={Strings.searchProduct}
            value={searchValue}
            onChangeText={onSearchChange}
            ref={inputRef}
          />
          <Pressable onPress={onCrossPress && onCrossPress}>
            <Cross />
          </Pressable>
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.locationContainer, styles.rowContainer]}
          onPress={selectLocation && selectLocation}>
          <Location
            width={EStyleSheet.value('12rem')}
            height={EStyleSheet.value('12rem')}
          />
          <Text style={styles.title}>
            {location ? location.short_address : Strings.locationUnavaible}
          </Text>
          <DownArrow />
        </TouchableOpacity>
      )}
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
    fontFamily: Fonts.regular,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: '12vrem',
  },
  title: {
    color: Colors.titleText,
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    marginLeft: '6rem',
    marginRight: '10rem',
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    marginLeft: '4rem',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: '16rem',
    borderRadius: '8rem',
    height: '40vrem',
    width: '230rem',
  },
  textInput: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.titleText,
    marginHorizontal: '10rem',
    lineHeight: '20rem',
    ...(Platform.OS == 'android' && {
      paddingVertical: 0,
      paddingHorizontal: 0,
    }),
    flex: 1,
  },
  leftButton: {
    marginRight: '16rem',
  },
  headerShadow: {
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default CartHeader;
