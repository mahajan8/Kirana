import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
import {getKeyByValue} from '../../../utils/utility/Utils';
import {addressTypes} from '../../../utils/values/Values';
import {styles} from '../styles/cartHeaderStyles';

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
    title,
  } = props;

  return (
    <View
      style={[
        !noShadow && styles.headerShadow,
        styles.container,
        containerStyle && containerStyle,
        styles.rowContainer,
      ]}>
      <Pressable
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
      </Pressable>

      {title ? (
        <Text style={styles.title}>{title}</Text>
      ) : titleComp ? (
        <View style={styles.titleContainer}>{titleComp}</View>
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
          {searchValue ? (
            <Pressable onPress={() => onSearchChange('')}>
              <Cross />
            </Pressable>
          ) : null}
        </View>
      ) : location ? (
        <Pressable
          activeOpacity={1}
          style={[styles.locationContainer, styles.rowContainer]}
          onPress={selectLocation && selectLocation}>
          <Location
            width={EStyleSheet.value('12rem')}
            height={EStyleSheet.value('12rem')}
          />
          <Text style={styles.locationTitle}>
            {location
              ? location.type
                ? getKeyByValue(addressTypes, location.type)
                : location.short_address
              : Strings.locationUnavaible}
          </Text>
          <DownArrow />
        </Pressable>
      ) : (
        <View style={styles.titleContainer} />
      )}
      <View style={styles.headerRightContainer}>
        {headerRight && headerRight}
        <CartCounter />
      </View>
    </View>
  );
};

export default CartHeader;
