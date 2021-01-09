/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Modal} from 'react-native';
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
import {getAddresses, deleteAddress} from '../Api';
import {addressTypes} from '../../../utils/values/Values';
import {getKeyByValue} from '../../../utils/utility/Utils';
import Loader from '../../commons/components/Loader';

const Addresses = (props) => {
  let {addresses} = props.navigationReducer;

  const [deleteVisible, setDeleteVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    props.getAddresses();
  }, []);

  const renderAddress = (item) => {
    let {type, block_address, location, landmark, id} = item;

    return (
      <View style={styles.addressBox}>
        <Text style={styles.addressType}>
          {getKeyByValue(addressTypes, type)}
        </Text>
        <Text style={styles.locationText}>
          {block_address} {landmark}
        </Text>
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
              setDeleteId(id);
              //   props.deleteAddress(pars);
              setDeleteVisible(true);
            }}
          />
        </View>
      </View>
    );
  };

  const deleteModal = () => {
    let type =
      deleteId !== null &&
      addresses[addresses.findIndex((obj) => obj.id === deleteId)].type;

    return (
      <Modal
        visible={deleteVisible}
        onRequestClose={() => setDeleteVisible(false)}
        transparent={true}
        animated
        animationType="none">
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.deleteTitle}>{Strings.deleteAddress}</Text>
            <Text style={styles.deleteDesc}>
              {Strings.confirmDeleteAddress}{' '}
              {type && getKeyByValue(addressTypes, type)}{' '}
              {Strings.confirmDeleteAddress2}
            </Text>
            <View
              style={[styles.buttonsContainer, styles.modalButtonsContainer]}>
              <Button
                label={Strings.cancel}
                Style={styles.modalButton}
                labelStyle={styles.modalButtonLabel}
                bordered
                onPress={() => setDeleteVisible(false)}
              />

              <Button
                label={Strings.yesDelete}
                Style={styles.modalButton}
                labelStyle={styles.modalButtonLabel}
                onPress={() => {
                  let pars = {
                    address_id: deleteId,
                  };

                  props.deleteAddress(pars);
                  setDeleteVisible(false);
                  setDeleteId(null);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const renderListEmptyComponent = () => (
    <View style={styles.noAddressContainer}>
      <NoAddressImage
        width={EStyleSheet.value('270rem')}
        height={EStyleSheet.value('123rem')}
      />
      <Text style={styles.noAddressText}>{Strings.noSavedAddress}</Text>
      <Button
        label={Strings.addAddress}
        Style={styles.noAddressButton}
        onPress={Actions.addressSearch}
      />
    </View>
  );

  return (
    <SafeArea>
      <Header
        title={Strings.addresses}
        type={1}
        headerRight={
          addresses.length ? (
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
              onPress={Actions.addressSearch}
            />
          ) : null
        }
      />
      <View style={styles.container}>
        <FlatList
          data={addresses}
          renderItem={({item, index}) => renderAddress(item)}
          ListEmptyComponent={renderListEmptyComponent()}
          contentContainerStyle={styles.list}
          keyExtractor={(item, index) => `address${index}`}
        />
      </View>
      <Loader show={props.loading} />
      {deleteModal()}
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  navigationReducer: state.navigationReducer,
});

const mapDispatchToProps = {
  getAddresses,
  deleteAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);
