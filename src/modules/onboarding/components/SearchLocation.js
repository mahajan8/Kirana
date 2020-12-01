/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {Actions} from 'react-native-router-flux';
import {Strings} from '../../../utils/values/Strings';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Header from '../../commons/components/Header';
import {styles} from '../styles/searchLocationStyles';
import Search from '../../../assets/images/search.svg';
import Location from '../../../assets/images/location.svg';
import CurrentLocation from '../../../assets/images/current_location.svg';
import {Colors} from '../../../utils/values/Colors';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {AppConfig} from '../../../config/AppConfig';
import {environment} from '../../../config/EnvConfig';
import Geolocation from '@react-native-community/geolocation';
import {getAddressFromLocation} from '../../commons/Api';
import Loader from '../../commons/components/Loader';
import {setLoading} from '../../authentication/AuthActions';
import {setLocation} from '../OnboardingActions';

const SearchLocation = (props) => {
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
        Actions.addAddress({
          location,
        });
        props.setLocation(location);
      }}
      query={{
        key: AppConfig[environment].googlePlacesKey,
        language: 'en',
        // types: '(localities)',
      }}
      renderLeftButton={() => (
        <Search
          style={styles.searchLogo}
          width={EStyleSheet.value('14rem')}
          height={EStyleSheet.value('14rem')}
        />
      )}
      //   renderRightButton={() => (
      //     <Cross
      //       style={styles.cross}
      //       width={EStyleSheet.value('14rem')}
      //       height={EStyleSheet.value('14rem')}
      //     />
      //   )}
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

  const saveLocation = (selectedLocation) => {
    let {geometry, formatted_address} = selectedLocation;
    let {lat, lng} = geometry.location;

    let location = {
      lat,
      lng,
      geometry,
      formatted_address,
    };
    props.saveDetails(location);
    Actions.pop();
  };

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
            Actions.addAddress({
              location,
            });
            props.setLocation(location);
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
    <SafeArea>
      <Header
        title={Strings.searchDeliveryLocation}
        noShadow
        // comp={renderSearchInput()}
        containerStyle={styles.headerContainer}
      />
      {renderSearchInput()}
      <TouchableOpacity
        style={styles.currentLocationContainer}
        onPress={getLocation}>
        <CurrentLocation style={styles.locationIcon} />
        <View>
          <Text style={styles.currentLocation}>{Strings.currentLocation}</Text>
          <Text style={styles.subText}>{Strings.usingGPS}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.seperator} />
      <Loader show={props.loading} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  location: state.homeReducer.location,
});

const mapDispatchToProps = {
  setLoading,
  setLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchLocation);
