/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  PermissionsAndroid,
  Modal,
  Pressable,
  Platform,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LocationIcon from '../../../assets/images/home_location_icon.svg';
import CurrentLocation from '../../../assets/images/home_location_current.svg';
import Search from '../../../assets/images/search_black.svg';
import {Strings} from '../../../utils/values/Strings';
import {connect} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import {getAddressFromLocation} from '../../commons/Api';
import {setLoading} from '../../authentication/AuthActions';
import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  openSettings,
} from 'react-native-permissions';
import {styles} from '../styles/homeLocationCheckStyles';
import ModalContainer from '../../commons/components/ModalContainer';

const HomeLocationCheck = (props) => {
  const [visible, setVisible] = useState(false);

  let {setLocation, selectedLocation, location} = props;

  useEffect(() => {
    // If location not already selected, check for location permission
    if (!location) {
      checkPermission();
    }
  }, []);

  const checkPermission = () => {
    // Show Modal if location permission not provided, get Current location if granted.
    if (Platform.OS === 'android') {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then((res) => {
        if (!res) {
          setVisible(true);
        } else {
          if (!selectedLocation) {
            getLocation();
          }
        }
      });
    } else {
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
        let granted = result === RESULTS.GRANTED ? true : false;
        if (!granted) {
          setVisible(true);
        } else {
          if (!selectedLocation) {
            getLocation();
          }
        }
      });
    }
  };

  const getPermission = async () => {
    //Request Location Premission and get Current Location if permission granted.
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setVisible(false);
          getLocation();
        } else {
          // console.log('Denied');
        }
      } else {
        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
          if (result === RESULTS.GRANTED) {
            setVisible(false);
            getLocation();
          } else {
            openSettings().catch(() => console.warn('cannot open settings'));
          }
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = () => {
    //Get Current coordinates and fetch address from coordinates
    props.setLoading(true);
    Geolocation.getCurrentPosition(
      (info) => {
        const {latitude, longitude} = info.coords;
        let pars = {
          lat: latitude,
          lng: longitude,
        };
        getAddressFromLocation(
          pars,
          (location) => {
            props.setLoading(false);
            setLocation(location);
          },
          () => props.setLoading(false),
        );
      },
      (error) => {
        props.setLoading(false);
      },
    );
  };

  return (
    <ModalContainer
      visible={visible}
      setVisible={setVisible}
      containerStyle={styles.container}
      cancellable={false}>
      <Pressable style={styles.innerContainer}>
        <LocationIcon style={styles.locaitonIcon} />

        <Text style={styles.title}>{Strings.locationOff}</Text>

        <Text style={styles.subText}>{Strings.locationOffHome}</Text>

        <View style={styles.seperator} />

        <Pressable style={styles.rowContainer} onPress={getPermission}>
          <CurrentLocation
            width={EStyleSheet.value('$spacingMedium')}
            height={EStyleSheet.value('$spacingMedium')}
          />
          <Text style={styles.buttonsText}>{Strings.turnOnLocation}</Text>
        </Pressable>

        <View style={styles.seperator} />

        <Pressable
          style={styles.rowContainer}
          onPress={() => {
            setVisible(false);
            props.onSearchPress();
          }}>
          <Search />
          <Text style={[styles.buttonsText, styles.searchText]}>
            {Strings.searchManually}
          </Text>
        </Pressable>
      </Pressable>
    </ModalContainer>
  );
};

const mapStateToProps = (state) => ({
  addresses: state.homeReducer.addresses,
  location: state.homeReducer.location,
});

const mapDispatchToProps = {
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLocationCheck);
