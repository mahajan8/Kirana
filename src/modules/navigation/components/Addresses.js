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
import WorkIcon from '../../../assets/images/work_address.svg';
import HomeIcon from '../../../assets/images/home_address.svg';
import {getAddresses, deleteAddress} from '../Api';
import {addressTypes} from '../../../utils/values/Values';
import {getKeyByValue} from '../../../utils/utility/Utils';
import AlertModal from '../../commons/components/AlertModal';
import LoaderError from '../../commons/components/LoaderError';

const Addresses = (props) => {
  let {addresses} = props.navigationReducer;

  const [deleteVisible, setDeleteVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    props.getAddresses();
  }, []);

  const renderAddress = (item) => {
    // Address Tile Layout
    let {type, block_address, location, landmark, id} = item;

    return (
      <View style={styles.addressBox}>
        <View style={styles.addressTypeContainer}>
          <HomeIcon width={30} height={30} />
          <Text style={styles.addressType}>
            {getKeyByValue(addressTypes, type)}
          </Text>
        </View>

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
    // Modal Alert for Address Delete
    let type =
      deleteId !== null &&
      addresses[addresses.findIndex((obj) => obj.id === deleteId)].type;

    return (
      <AlertModal
        visible={deleteVisible}
        setVisible={setDeleteVisible}
        heading={Strings.deleteAddress}
        desc={
          Strings.confirmDeleteAddress +
          ' ' +
          (type && getKeyByValue(addressTypes, type)) +
          ' ' +
          Strings.confirmDeleteAddress2
        }
        label1={Strings.cancel}
        label2={Strings.yesDelete}
        button1Press={() => setDeleteVisible(false)}
        button2Press={() => {
          let pars = {
            address_id: deleteId,
          };
          props.deleteAddress(pars);
          let {location} = props;

          if (location && location.id) {
            let isSame = props.location.id === deleteId;

            if (isSame) {
              delete location.id;
              delete location.type;
            }
          }
          setDeleteVisible(false);
          setDeleteId(null);
        }}
        invert
      />
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
                  width={EStyleSheet.value('$spacingMedium')}
                  height={EStyleSheet.value('$spacingMedium')}
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

      <LoaderError retry={props.getAddresses} />

      {deleteModal()}
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  navigationReducer: state.navigationReducer,
  location: state.homeReducer.location,
});

const mapDispatchToProps = {
  getAddresses,
  deleteAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);
