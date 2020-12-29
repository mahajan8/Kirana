import React, {Component} from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {commonStyles} from '../styles/commonStyles';
import {Strings} from '../../../utils/values/Strings';
// import RoundedButton from './RoundedButton';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Button from './Button';

export default class BottomButton extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={'position'}
        enabled={Platform.OS === 'ios' ? true : false}
        keyboardVerticalOffset={getStatusBarHeight()}>
        <View style={commonStyles.bottomButtonContainer}>
          <Button {...this.props} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
