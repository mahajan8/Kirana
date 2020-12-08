/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import Header from '../../commons/components/Header';
import {styles} from '../styles/addAddressStyles';
import Input from '../../commons/components/Input';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import CustomMarker from '../../../assets/images/address_map_marker.svg';
import Location from '../../../assets/images/green_location.svg';
import {connect} from 'react-redux';
import {addUpdateAddress} from '../../home/Api';
import Loader from '../../commons/components/Loader';
import {isAnyFieldEmpty} from '../../../utils/utility/Validations';

const AddAddress = (props) => {
  const [houseNumber, setHouseNumber] = useState('');
  const [landmark, setLandMark] = useState('');
  const [addressType, setAddressType] = useState(null);
  const [location, setLocation] = useState(props.location);

  let {lat, lng, formatted_address, short_address} = location;

  let {id, item} = props;

  useEffect(() => {
    if (id) {
      setHouseNumber(item.block_address);
      setLandMark(item.landmark);
      setAddressType(item.type);
    }
  }, []);

  const submitAddress = () => {
    let pars = {
      block_address: houseNumber,
      landmark,
      location,
      address_type: addressType,
    };
    if (id) {
      pars = {
        ...pars,
        address_id: id,
      };
    }

    props.addUpdateAddress(pars);
  };

  const getDisabled = (type) => {
    if (type === 30) {
      return false;
    }
    let i = props.addresses.findIndex((obj) => obj.type === type);

    if (i >= 0) {
      if (id && item.type === type) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  };

  return (
    <SafeArea>
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={20}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
          keyboardShouldPersistTaps="handled">
          <Header title={Strings.addresses} type={1} />
          <View style={styles.mapView}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
              }}
              // onRegionChange={(region) => setRegion(region)}
              scrollEnabled={false}>
              <Marker coordinate={{latitude: lat, longitude: lng}}>
                <CustomMarker
                  style={styles.marker}
                  width={EStyleSheet.value('42rem')}
                  height={EStyleSheet.value('42rem')}
                />
              </Marker>
            </MapView>
          </View>
          <View style={styles.locationContainer}>
            <View style={styles.rowContainer}>
              <View style={styles.rowContainer}>
                <Location
                  width={EStyleSheet.value('12rem')}
                  height={EStyleSheet.value('14rem')}
                />
                <Text style={styles.locationTitle} numberOfLines={1}>
                  {formatted_address}
                </Text>
              </View>
              <Button
                label={Strings.change}
                Style={styles.changeButton}
                labelStyle={styles.changeButtonLabel}
                onPress={() => {
                  if (id) {
                    Actions.searchLocation({saveLocation: setLocation});
                  } else {
                    Actions.pop();
                  }
                }}
              />
            </View>
            <Text style={styles.locationSub}>{formatted_address}</Text>
          </View>

          <Input
            value={houseNumber}
            onChange={setHouseNumber}
            label={Strings.addressLine}
          />

          <Input
            value={landmark}
            onChange={setLandMark}
            label={Strings.landmark}
          />
          <View style={styles.saveAddressContainer}>
            <Text style={styles.saveAddressText}>{Strings.saveAddressAs}</Text>
            <View style={styles.buttonsContainer}>
              <Button
                label={Strings.home}
                bordered
                Style={[
                  styles.buttonStyle,
                  addressType === 10 && styles.selectedButton,
                ]}
                labelStyle={[
                  styles.buttonLabel,
                  addressType !== 10 && styles.unSelectedLabel,
                ]}
                onPress={() => setAddressType(10)}
                disabled={getDisabled(10)}
              />

              <Button
                label={Strings.work}
                bordered
                Style={[
                  styles.buttonStyle,
                  addressType === 20 && styles.selectedButton,
                ]}
                labelStyle={[
                  styles.buttonLabel,
                  addressType !== 20 && styles.unSelectedLabel,
                ]}
                onPress={() => setAddressType(20)}
                disabled={getDisabled(20)}
              />

              <Button
                label={Strings.other}
                bordered
                Style={[
                  styles.buttonStyle,
                  addressType === 30 && styles.selectedButton,
                ]}
                labelStyle={[
                  styles.buttonLabel,
                  addressType !== 30 && styles.unSelectedLabel,
                ]}
                onPress={() => setAddressType(30)}
                disabled={getDisabled(30)}
              />
            </View>
          </View>
          <Button
            label={Strings.saveAndProceed}
            onPress={() => submitAddress()}
            disabled={isAnyFieldEmpty([houseNumber, landmark]) || !addressType}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <Loader show={props.loading} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  addresses: state.homeReducer.addresses,
});

const mapDispatchToProps = {
  addUpdateAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);