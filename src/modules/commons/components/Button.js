import React from 'react';
import {Text, Pressable, Keyboard} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ripple} from '../../../utils/utility/Utils';
import {Colors} from '../../../utils/values/Colors';
import {styles} from '../styles/buttonStyles';

const Button = (props) => {
  const {Style, label, onPress, disabled, labelStyle, bordered, Icon} = props;

  return (
    <Pressable
      style={[
        styles.button,
        bordered && styles.bordered,
        Style && Style,
        disabled && styles.disabledButton,
      ]}
      disabled={disabled}
      onPress={() => {
        Keyboard.dismiss();
        if (onPress) onPress();
      }}
      android_ripple={ripple}>
      {Icon && Icon}
      <Text
        style={[
          styles.label,
          {
            color: bordered
              ? Colors.themeGreen
              : disabled
              ? Colors.lightGray
              : Colors.white,
          },
          labelStyle && labelStyle,
          Icon && {marginLeft: EStyleSheet.value('6rem')},
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
