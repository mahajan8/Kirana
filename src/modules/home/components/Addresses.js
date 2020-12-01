import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import Header from '../../commons/components/Header';
import {styles} from '../styles/addressStyles';
import {connect} from 'react-redux';
import PlusIcon from '../../../assets/images/green_plus.svg';
import NoAddressImage from '../../../assets/images/empty_address.svg';
import {commonStyles} from '../../commons/styles/commonStyles';

let addressTypes = [Strings.home, Strings.work, Strings.other];

const Addresses = (props) => {
  let {addresses} = props.homeReducer;

  const renderAddress = (item) => {
    let {addressType, houseNumber, location, landmark} = item;
    return (
      <View style={[styles.addressBox, commonStyles.shadow]}>
        <Text style={styles.addressType}>{addressTypes[addressType]}</Text>
        <Text style={styles.locationText}>{location.formatted_address}</Text>
        <View style={styles.buttonsContainer}>
          <Button
            label={Strings.edit}
            Style={styles.buttonStyle}
            labelStyle={styles.buttonLabel}
            bordered
          />
          <Button
            label={Strings.delete}
            Style={styles.buttonStyle}
            labelStyle={styles.buttonLabel}
            bordered
          />
        </View>
      </View>
    );
  };

  return (
    <SafeArea>
      <Header
        title={Strings.addresses}
        type={1}
        headerRight={
          addresses && (
            <Button
              label={Strings.addAddress}
              Style={styles.addButton}
              labelStyle={styles.buttonLabel}
              bordered
              Icon={
                <PlusIcon
                  width={EStyleSheet.value('12rem')}
                  height={EStyleSheet.value('12rem')}
                />
              }
              onPress={Actions.searchLocation}
            />
          )
        }
      />
      <FlatList
        data={addresses}
        renderItem={({item, index}) => renderAddress(item)}
        ListEmptyComponent={
          <View style={styles.noAddressContainer}>
            <NoAddressImage
              width={EStyleSheet.value('270rem')}
              height={EStyleSheet.value('123rem')}
            />
            <Text style={styles.noAddressText}>{Strings.noSavedAddress}</Text>
            <Button
              label={Strings.addAddress}
              Style={styles.noAddressButton}
              onPress={Actions.searchLocation}
            />
          </View>
        }
        contentContainerStyle={styles.container}
        keyExtractor={(item, index) => `address${index}`}
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);
