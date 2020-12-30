import React, {useState, useEffect} from 'react';
import {Text, View, PermissionsAndroid, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LocationIcon from '../../../assets/images/green_location_current.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from './Button';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {styles} from '../styles/locationCheckStyles';

const LocationCheck = (props) => {
  const [visible, setVisible] = useState(false);

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
        }
      });
    } else {
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
        let granted = result === RESULTS.GRANTED ? true : false;
        if (!granted) {
          setVisible(true);
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
        setVisible(false);
      } else {
        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
          setVisible(false);
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  if (visible) {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.rowContainer}>
            <LocationIcon
              width={EStyleSheet.value('18rem')}
              height={EStyleSheet.value('18rem')}
            />
            <Text style={styles.title}>{Strings.locationOff}</Text>
          </View>
          <Text style={styles.subText}>{Strings.locationOffSub}</Text>
          <View style={styles.buttonsContainer}>
            <Button
              label={Strings.notNow}
              Style={styles.buttonStyle}
              labelStyle={styles.buttonLabel}
              onPress={() => setVisible(false)}
              bordered
            />
            <Button
              label={Strings.turnOn}
              Style={styles.buttonStyle}
              labelStyle={styles.buttonLabel}
              onPress={getPermission}
            />
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default LocationCheck;
