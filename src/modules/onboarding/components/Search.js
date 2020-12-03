/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Strings} from '../../../utils/values/Strings';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from '../styles/searchStyles';
import SearchIcon from '../../../assets/images/search.svg';
import Location from '../../../assets/images/location.svg';
import CurrentLocation from '../../../assets/images/current_location.svg';
import {Colors} from '../../../utils/values/Colors';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {AppConfig} from '../../../config/AppConfig';
import {environment} from '../../../config/EnvConfig';
import Geolocation from '@react-native-community/geolocation';
import {getAddressFromLocation} from '../../commons/Api';
import {setLoading} from '../../authentication/AuthActions';

const Search = (props) => {
  let {modal, onSelect} = props;

  const renderSearchInput = () => (
    <GooglePlacesAutocomplete
      minLength={2}
      autoFocus={true}
      returnKeyType={'default'}
      placeholderTextColor={Colors.subTitleText}
      placeholder={Strings.searchLocationPlaceHolder}
      fetchDetails={true}
      onPress={(data, details = null) => {
        let {lat, lng} = details.geometry.location;
        let location = {
          lat,
          lng,
          geometry: details.geometry,
          name: details.name,
          formatted_address: details.formatted_address,
        };
        // props.saveDetails(location);
        // Actions.pop();
        if (modal) {
          onSelect();
        }
        Actions.addAddress({
          location,
        });
        // props.setLocation(location);
      }}
      query={{
        key: AppConfig[environment].googlePlacesKey,
        language: 'en',
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
        <Location />
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
              onSelect();
            }
            Actions.addAddress({
              location,
            });
            // props.setLocation(location);
          },
          () => props.setLoading(false),
        );
      },
      (error) => {
        props.setLoading(false);
        console.log(error);
      },
    );
  };

  return (
    <KeyboardAvoidingView
      style={{flexGrow: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={20}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        bounces={false}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>{Strings.searchDeliveryLocation}</Text>
        {renderSearchInput()}
        <TouchableOpacity
          style={[
            styles.currentLocationContainer,
            modal && styles.currentLocationModal,
          ]}
          onPress={getLocation}>
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
        </TouchableOpacity>
        {modal && <View style={styles.modalSeperator} />}
        {/* <View style={styles.savedAddressContainer}>
          <Text style={styles.savedAddresses}>{Strings.savedAddresses}</Text>
          <View style={styles.itemRow}>

          </View>
        </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
