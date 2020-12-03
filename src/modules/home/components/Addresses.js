/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
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
import {getAddresses, deleteAddress} from '../Api';
import {addressTypes} from '../../../utils/values/Values';
import {getKeyByValue} from '../../../utils/utility/Utils';
import Loader from '../../commons/components/Loader';

const Addresses = (props) => {
  let {addresses} = props.homeReducer;

  useEffect(() => {
    props.getAddresses();
  }, []);

  const renderAddress = (item) => {
    let {type, block_address, location, landmark, id} = item;

    return (
      <View style={[styles.addressBox, commonStyles.shadow]}>
        <Text style={styles.addressType}>
          {getKeyByValue(addressTypes, type)}
        </Text>
        <Text style={styles.locationText}>{location.formatted_address}</Text>
        <View style={styles.buttonsContainer}>
          <Button
            label={Strings.edit}
            Style={styles.buttonStyle}
            labelStyle={styles.buttonLabel}
            bordered
            onPress={() => Actions.addAddress({id, location, item})}
          />
          <Button
            label={Strings.delete}
            Style={styles.buttonStyle}
            labelStyle={styles.buttonLabel}
            bordered
            onPress={() => {
              let pars = {
                address_id: id,
              };

              props.deleteAddress(pars);
            }}
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
      <View style={styles.container}>
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
          contentContainerStyle={styles.list}
          keyExtractor={(item, index) => `address${index}`}
        />
      </View>
      <Loader show={props.loading} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {
  getAddresses,
  deleteAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);
