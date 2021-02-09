import React, {Component} from 'react';
import {Platform, Text, DeviceEventEmitter} from 'react-native';
import {Provider} from 'react-redux';
import AppRouter from './src/utils/Router';
import {environment} from './src/config/EnvConfig';
import store from './src/utils/Store';
import CleverTap from 'clevertap-react-native';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import appsFlyer from 'react-native-appsflyer';
import {
  handleNotificationClick,
  setDimensions,
} from './src/utils/utility/Utils';

import * as Sentry from '@sentry/react-native';

// Sentry Configuration
Sentry.init({
  dsn:
    'https://474fb48af2bf47f3bb6c2f5de0c162a9@o488021.ingest.sentry.io/5591167',
});

// AppsFlyer Configuration
appsFlyer.initSdk(
  {
    devKey: 'EXaY9ocjMHyDn25EZxDCCS',
    isDebug: environment !== 'production',
    appId: '1549920826',
    onInstallConversionDataListener: true, //Optional
    onDeepLinkListener: true, //Optional
  },
  (result) => {
    console.log(result);
  },
  (error) => {
    console.error(error);
  },
);
const onInstallConversionFailure = appsFlyer.onInstallConversionFailure(
  (data) => {
    console.log(
      `AppsFlyer On Install Converstion Failure: ${JSON.stringify(data)}`,
    );
  },
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (Text.defaultProps == null) {
      Text.defaultProps = {};
    }
    Text.defaultProps.allowFontScaling = false;
    this.configureSDK();
    // Set EStyleSheet global variables and settings
    setDimensions();
  }
  async componentDidMount() {
    if (Platform.OS === 'android') {
      this.getFcmToken();
    }
    this.initializeListeners();
  }
  configureSDK = () => {
    CleverTap.setDebugLevel(3);
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
    if (fcmToken) {
      CleverTap.setPushToken('FCM-Token', fcmToken);
    } else {
      // console.log('FCM Token', 'No Token Received');
    }
  };
  initializeListeners = () => {
    CleverTap.addListener(
      CleverTap.CleverTapPushNotificationClicked,
      (event) => {
        handleNotificationClick(
          Platform.OS === 'ios' ? event.customExtras : event,
        );
      },
    );
  };
  componentWillUnmount() {
    if (DeviceEventEmitter) {
      DeviceEventEmitter.removeAllListeners();
    }

    CleverTap.removeListener(CleverTap.CleverTapPushNotificationClicked);
  }
  render() {
    let notificationPayload = this.props
      .UIApplicationLaunchOptionsRemoteNotificationKey;
    return (
      <Provider store={store}>
        <AppRouter
          notificationPayload={notificationPayload ? notificationPayload : null}
        />
      </Provider>
    );
  }
}
