/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Animated} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// import Images from '../util/images'
import {Colors} from '../../../utils/values/Colors';
import ErrorIcon from '../../../assets/images/error_icon.svg';
import {styles} from '../styles/inputStyles';
const dp = (size) => EStyleSheet.value(size + 'rem');

const Input = (props) => {
  const [focused, setFocus] = useState(false);
  const [secure, setSecure] = useState(true);

  const [anim] = useState(new Animated.Value(0));

  const getType = () => {
    let {type} = props;

    switch (type) {
      case 'number':
        return 'number-pad';
      case 'phone':
        return 'phone-pad';
      case 'email':
        return 'email-address';
      default:
        return 'ascii-capable';
    }
  };

  useEffect(() => {
    Animated.timing(anim, {
      toValue: focused ? 1 : 0,
      duration: 50,
      useNativeDriver: false,
    }).start();
  }, [focused]);

  let move = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, dp(-25)],
  });

  let size = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [dp(15), dp(13)],
  });

  // const eye =
  // <Pressable style={{width:'10%', alignItems:'center', justifyContent:'center', alignSelf:'center' }} onPress={()=>setSecure(!secure)} >
  //     <Image source={secure?Images.hide:Images.view} style={{width:dp(20), height:dp(20), resizeMode:'contain'}} />
  // </Pressable>

  const {
    label,
    value,
    onChange,
    pass,
    comp,
    long,
    edit = true,
    ref,
    errorMessage,
    containerStyle,
    error,
    multiline,
    borderedContainerStyle,
  } = props;

  return (
    <View style={[styles.container, containerStyle && containerStyle]}>
      <View
        style={[
          styles.borderedContainer,
          {
            borderColor:
              focused || value ? Colors.themeGreen : Colors.borderGray,
          },
        ]}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: pass || comp ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: pass || comp ? 'center' : null,
          }}>
          <TextInput
            placeholder={long && label}
            value={value}
            onChangeText={(text) => {
              onChange(text);
            }}
            style={[styles.textInput, comp && {flex: 1}]}
            ref={ref}
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
              anim.setValue(0);
            }}
            autoCapitalize={props.autoCapitalize}
            maxLength={props.max}
            // keyboardType={props.num?'number-pad':'ascii-capable'}
            keyboardType={getType()}
            secureTextEntry={pass || props.secure ? secure : false}
            editable={edit}
            multiline={multiline ? true : false}
            selection={multiline ? {start: 0} : null}
          />

          {/* {pass?eye:null} */}
          {comp && comp}
        </View>

        <Animated.Text
          style={[
            styles.label,
            focused || value
              ? {color: Colors.themeGreen, lineHeight: dp(16)}
              : {color: Colors.grayText},
            !value ? {top: move, fontSize: size} : styles.focusedLabel,
          ]}>
          {label}
        </Animated.Text>
      </View>
      {error && errorMessage ? (
        <View style={styles.rowContainer}>
          <ErrorIcon />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Input;
