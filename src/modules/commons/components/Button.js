import React from 'react';
import {Text, TouchableOpacity, Keyboard} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';

const Button = (props) => {
  const {Style, label, onPress, disabled, labelStyle, bordered, Icon} = props;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
        bordered && styles.bordered,
        Style && Style,
      ]}
      disabled={disabled}
      onPress={() => {
        Keyboard.dismiss();
        if (onPress) onPress();
      }}>
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
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  button: {
    borderRadius: '10rem',
    paddingVertical: '15rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.themeGreen,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: '14rem',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  disabledButton: {
    backgroundColor: Colors.seperatorColor,
  },
  bordered: {
    borderColor: Colors.borderGray,
    borderWidth: '1rem',
    backgroundColor: Colors.white,
  },
});

export default Button;
