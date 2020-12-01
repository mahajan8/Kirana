import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import Header from '../../commons/components/Header';
import {styles} from '../styles/addAddressStyles';
import Input from '../../commons/components/Input';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const AddAddress = () => {
  return (
    <SafeArea>
      <Text></Text>
    </SafeArea>
  );
};

export default AddAddress;
