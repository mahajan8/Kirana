import React, {useState, useEffect} from 'react';
import {Text, View, PermissionsAndroid} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import LocationIcon from '../../../assets/images/green_location_current.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from './Button';

const LocationCheck = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = () => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then((res) => {
      if (!res) {
        setVisible(true);
      }
    });
  };

  const getPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Granted');
        setVisible(false);
      } else {
        console.log('Denied');
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
            />
            <Button
              label={Strings.turnOn}
              Style={styles.buttonStyle}
              labelStyle={styles.buttonLabel}
              bordered
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

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: '20rem',
    paddingBottom: '30vrem',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderRadius: '15rem',
    paddingVertical: '20vrem',
    paddingHorizontal: '30rem',
  },
  title: {
    fontSize: '14rem',
    fontWeight: '900',
    color: Colors.darkGreen,
    marginBottom: '10vrem',
    marginLeft: '10rem',
  },
  subText: {
    fontSize: '12rem',
    fontWeight: '100',
    color: Colors.subTitleText,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    marginBottom: '20vrem',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '122rem',
    height: '36vrem',
  },
  buttonLabel: {
    fontSize: '10rem',
    letterSpacing: '0.07rem',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LocationCheck;
