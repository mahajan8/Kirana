/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform, View} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/introStyle';
import {Colors} from '../../../utils/values/Colors';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import SplashLogo from '../../../assets/images/splash-logo.svg';
import {getAuthToken} from '../../../utils/utility/LocalStore';
import {getUserDetails} from '../../home/Api';
import EStyleSheet from 'react-native-extended-stylesheet';
import {setToken} from '../../authentication/AuthActions';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {setLocation} from '../../onboarding/OnboardingActions';
import {getAddressFromLocation} from '../../commons/Api';
import Geolocation from 'react-native-geolocation-service';

const Splash = (props) => {
  useEffect(() => {
    handleNavigation();
  }, []);
  const handleNavigation = async () => {
    const token = await getAuthToken();
    if (token) {
      checkPermission();
      // props.getUserDetails();
      props.setToken(token);
    } else {
      Actions.reset('introduction');
    }
  };

  const checkPermission = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then((res) => {
        if (res) {
          getLocation();
        } else {
          props.getUserDetails();
        }
      });
    } else {
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
        let granted = result === RESULTS.GRANTED ? true : false;
        if (granted) {
          getLocation();
        } else {
          props.getUserDetails();
        }
      });
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        const {latitude, longitude} = info.coords;
        let pars = {
          lat: latitude,
          lng: longitude,
        };
        getAddressFromLocation(pars, (location) => {
          props.setLocation(location);
          props.getUserDetails();
        });
      },
      (error) => {
        console.log(error);
        props.getUserDetails();
      },
    );
  };

  return (
    <SafeArea statusBarColor={Colors.themeGreen}>
      <View style={styles.container}>
        <SplashLogo
          height={EStyleSheet.value('40rem')}
          width={EStyleSheet.value('210rem')}
        />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getUserDetails,
  setToken,
  setLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
