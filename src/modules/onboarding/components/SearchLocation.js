/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  LogBox,
  PermissionsAndroid,
  ImageBackground,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Strings} from '../../../utils/values/Strings';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from '../styles/searchStyles';
import SearchIcon from '../../../assets/images/search.svg';
import Location from '../../../assets/images/autocomplete_location.svg';
import AddressIcon from '../../../assets/images/address_icon.svg';
import CurrentLocation from '../../../assets/images/current_location.svg';
import {Colors} from '../../../utils/values/Colors';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {AppConfig} from '../../../config/AppConfig';
import {environment} from '../../../config/EnvConfig';
import Geolocation from 'react-native-geolocation-service';
import {getAddressFromLocation} from '../../commons/Api';
import {setLoading} from '../../authentication/AuthActions';
import {getKeyByValue, ripple} from '../../../utils/utility/Utils';
import {addressTypes} from '../../../utils/values/Values';
import {setSelectedAddress} from '../../home/HomeActions';

const Search = (props) => {
  let {modal, onSelect} = props;
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  const renderSearchInput = () => (
    <GooglePlacesAutocomplete
      minLength={2}
      autoFocus={true}
      returnKeyType={'default'}
      placeholderTextColor={Colors.subTitleText}
      placeholder={Strings.searchLocationPlaceHolder}
      fetchDetails={true}
      onPress={(data, details = null) => {
        let {geometry, address_components, name, formatted_address} = details;
        let {lat, lng} = geometry.location;

        let city = address_components.find((obj) =>
          obj.types.includes('locality'),
        );
        let state = address_components.find((obj) =>
          obj.types.includes('administrative_area_level_1'),
        );
        let zipCode = address_components.find((obj) =>
          obj.types.includes('postal_code'),
        );

        let location = {
          lat,
          lng,
          geometry: geometry,
          short_address: name,
          formatted_address: formatted_address,
          city: city ? city.long_name : null,
          state: state ? state.long_name : null,
          pincode: zipCode ? zipCode.long_name : null,
        };
        // props.saveDetails(location);
        // Actions.pop();
        saveLocation(location);
        // props.setLocation(location);
      }}
      query={{
        key: AppConfig[environment].googlePlacesKey,
        language: 'en',
        components: 'country:in',
        // types: '(localities)',
      }}
      renderLeftButton={() => (
        <SearchIcon
          style={styles.searchLogo}
          width={EStyleSheet.value('14rem')}
          height={EStyleSheet.value('14rem')}
        />
      )}
      styles={{
        textInputContainer: styles.searchBarContainer,
        textInput: styles.input,
        container: styles.searchContainer,
        predefinedPlacesDescription: styles.input,
        separator: styles.separator,
        row: styles.item,
      }}
      renderRow={(data) => renderRow(data)}
    />
  );

  const renderRow = (data) => {
    return (
      <View style={styles.itemRow}>
        <Location style={styles.rowIcon} />
        <View style={styles.locationDetails}>
          <Text style={styles.locationMain}>
            {data.structured_formatting.main_text}
          </Text>
          <Text style={styles.locationSecondary}>
            {data.structured_formatting.secondary_text}
          </Text>
        </View>
      </View>
    );
  };

  const getPremission = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse')
        .then((permission) => {
          if (permission === 'granted') {
            getLocation();
          }
        })
        .catch((err) => console.log(err));
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        // console.log('Location permission denied');
      }
    }
  };

  const getLocation = () => {
    props.setLoading(true);
    Geolocation.getCurrentPosition(
      (info) => {
        let pars = {
          lat: info.coords.latitude,
          lng: info.coords.longitude,
        };
        getAddressFromLocation(
          pars,
          (location) => {
            props.setLoading(false);
            if (modal) {
              onSelect(location);
              // props.setSelectedAddress(null);
            }
            saveLocation(location);
            // props.setLocation(location);
          },
          () => props.setLoading(false),
        );
      },
      (error) => {
        props.setLoading(false);
      },
    );
  };

  const saveLocation = (location) => {
    if (modal) {
      onSelect(location);
      // props.setSelectedAddress(null);
    }
    if (props.setLocation) {
      props.setLocation(location);
      Actions.pop();
    } else if (!modal) {
      Actions.addAddress({
        location,
      });
    }
  };

  const getSavedAddresses = () => (
    <View style={styles.savedAddressContainer}>
      <Text style={styles.savedAddresses}>{Strings.savedAddresses}</Text>
      {props.addresses.map((item, index) => {
        let {type, block_address, location, landmark, id} = item;
        if (type !== 30) {
          return (
            <Pressable
              android_ripple={ripple}
              key={`address${index}`}
              style={[styles.itemRow, styles.addressContainer]}
              onPress={() => {
                onSelect({...location, id, type});
              }}>
              <ImageBackground
                style={styles.addressImageContainer}
                source={require('../../../assets/images/address_background.jpg')}>
                <AddressIcon
                  width={EStyleSheet.value('21rem')}
                  height={EStyleSheet.value('24rem')}
                />
              </ImageBackground>
              <View>
                <Text style={styles.addressName}>
                  {getKeyByValue(addressTypes, type)}
                </Text>
                <Text style={styles.addressLocation}>
                  {block_address} {landmark}
                </Text>
              </View>
            </Pressable>
          );
        }
      })}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={20}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>{Strings.searchDeliveryLocation}</Text>
        {renderSearchInput()}
        <Pressable
          style={[
            styles.currentLocationContainer,
            modal && styles.currentLocationModal,
          ]}
          android_ripple={ripple}
          onPress={getPremission}>
          <CurrentLocation style={styles.locationIcon} />
          {modal ? (
            <Text style={styles.useCurrentText}>
              {Strings.useCurrentLocation}
            </Text>
          ) : (
            <View>
              <Text style={styles.currentLocation}>
                {Strings.currentLocation}
              </Text>
              <Text style={styles.subText}>{Strings.usingGPS}</Text>
            </View>
          )}
        </Pressable>
        <View style={modal ? styles.modalSeperator : styles.seperator} />
        {props.addresses.length && modal ? getSavedAddresses() : null}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  addresses: state.navigationReducer.addresses,
});

const mapDispatchToProps = {
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
