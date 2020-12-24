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
import {Colors} from '../../../utils/values/Colors';
import LocationIcon from '../../../assets/images/home_location_icon.svg';
import CurrentLocation from '../../../assets/images/home_location_current.svg';
import Search from '../../../assets/images/search_black.svg';
import {Strings} from '../../../utils/values/Strings';
import {Fonts} from '../../../utils/values/Fonts';
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

const HomeLocationCheck = (props) => {
  const [visible, setVisible] = useState(false);

  let {setLocation, selectedLocation} = props;

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = () => {
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
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Granted');
          setVisible(false);
          getLocation();
        } else {
          console.log('Denied');
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
        console.log(error);
      },
    );
  };

  return (
    <Modal
      visible={visible}
      //   onRequestClose={() => console.log('back')}
      transparent={true}
      animated
      animationType="none">
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <LocationIcon style={styles.locaitonIcon} />

          <Text style={styles.title}>{Strings.locationOff}</Text>

          <Text style={styles.subText}>{Strings.locationOffHome}</Text>

          <View style={styles.seperator} />

          <Pressable style={styles.rowContainer} onPress={getPermission}>
            <CurrentLocation
              width={EStyleSheet.value('12rem')}
              height={EStyleSheet.value('12rem')}
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
        </View>
      </View>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: '20rem',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderRadius: '15rem',
    paddingTop: '30vrem',
    alignItems: 'center',
  },
  title: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.darkGreen,
    marginBottom: '10vrem',
  },
  subText: {
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    color: Colors.subTitleText,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    marginBottom: '20vrem',
    textAlign: 'center',
    width: '250rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '10vrem',
    width: '100%',
    justifyContent: 'center',
  },
  locaitonIcon: {
    marginBottom: '23vrem',
  },
  seperator: {
    width: '100%',
    height: '1vrem',
    backgroundColor: Colors.seperatorColor,
  },
  buttonsText: {
    fontSize: '12rem',
    fontFamily: Fonts.medium,
    color: Colors.themeGreen,
    letterSpacing: '0.2rem',
    marginLeft: '6rem',
  },
  searchText: {
    color: Colors.titleText,
    fontFamily: Fonts.medium,
  },
});
const mapStateToProps = (state) => ({
  addresses: state.homeReducer.addresses,
});

const mapDispatchToProps = {
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLocationCheck);
