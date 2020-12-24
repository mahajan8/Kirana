import React, {Component} from 'react';
import {Dimensions, LogBox, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import AppRouter from './src/utils/Router';
import store from './src/utils/Store';
import {Fonts} from './src/utils/values/Fonts';

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
  }
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
