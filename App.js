import React, {Component} from 'react';
import {Dimensions, Platform, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import AppRouter from './src/utils/Router';
import store from './src/utils/Store';
import CleverTap from 'clevertap-react-native';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';

// import * as Sentry from '@sentry/react-native';

// Sentry.init({
//   dsn: 'https://474fb48af2bf47f3bb6c2f5de0c162a9@o488021.ingest.sentry.io/5591167',
// });

// Extended Style Sheet Configuration
let {height, width} = Dimensions.get('window');
let [trueWidth, trueHeight] =
  width > height ? [height, width] : [width, height];

EStyleSheet.build({
  $rem: trueWidth / 360,
  $vrem: trueHeight / 700,
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (Text.defaultProps == null) {
      Text.defaultProps = {};
    }
    Text.defaultProps.allowFontScaling = false;
    this.configureSDK();
  }
  async componentDidMount() {
    if (Platform.OS === 'android') {
      this.getFcmToken();
    }
    CleverTap.recordEvent('iOS event');
    // this.initializeListeners();
  }
  configureSDK = () => {
    CleverTap.createNotificationChannel(
      'pushChannel',
      'Channel name',
      'Channel description',
      5,
      true,
    );
  };
  getFcmToken = async () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    } else {
      firebase.app(); // if already initialized, use that one
    }
    const fcmToken = await messaging().getToken();
    console.log('FCM Token', fcmToken);
    if (fcmToken) {
      CleverTap.setPushToken('FCM-Token', fcmToken);
    } else {
      console.log('FCM Token', 'No Token Received');
    }
  };
  initializeListeners = () => {
    CleverTap.addListener(
      CleverTap.CleverTapInAppNotificationButtonTapped,
      (event) => {
        console.log('Event', event);
      },
    );

    CleverTap.addListener(
      CleverTap.CleverTapInAppNotificationDismissed,
      (event) => {
        console.log('Event', event);
      },
    );

    CleverTap.addListener(
      CleverTap.CleverTapPushNotificationClicked,
      (event) => {
        //alert('Notification Click from App', event);
        console.log('Notification Click from App', event);
        //alert('Notification Click from App');
      },
    );
  };
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
