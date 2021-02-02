import React from 'react';
import {View, Text, Pressable, Linking} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {Colors} from '../../../utils/values/Colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/customerSupportStyles';
import Help from '../../../assets/images/help_image.svg';
import Phone from '../../../assets/images/phone.svg';
import Whatsapp from '../../../assets/images/whatsapp.svg';
import Mail from '../../../assets/images/mail.svg';
import RightArrow from '../../../assets/images/right_arrow.svg';

let options = [
  {
    Icon: Phone,
    title: Strings.phoneNumber,
    sub: '+91 8591233907',
    iconBg: '#0072f0',
  },
  {
    Icon: Whatsapp,
    title: Strings.whatsapp,
    sub: Strings.whatsappHelp,
    iconBg: '#40c042',
  },
  {
    Icon: Mail,
    title: Strings.email,
    sub: Strings.supportEmail,
    iconBg: '#c83743',
  },
];

const CustomerSupport = (props) => {
  const helpAction = (index) => {
    switch (index) {
      case 0:
        Linking.openURL(`tel:${'+91 8591233907'}`);
        break;
      case 1:
        Linking.openURL(`whatsapp://send?phone=${'+91 8591233907'}`);
        break;
      case 2:
        Linking.openURL(`mailto:${Strings.supportEmail}`);
        break;
    }
  };

  const renderOption = (item, index) => {
    let {Icon, title, sub, iconBg} = item;

    return (
      <View key={`helpOption${index}`}>
        <Pressable
          style={[styles.rowContainer, styles.helpOptionContainer]}
          onPress={() => helpAction(index)}>
          <View style={[styles.imageContainer, {backgroundColor: iconBg}]}>
            <Icon
              width={EStyleSheet.value('16rem')}
              height={EStyleSheet.value('16rem')}
            />
          </View>
          <View style={styles.helpOptionTextContainer}>
            <Text style={styles.helpOptionTitle}>{title}</Text>
            <Text style={styles.helpOptionSub}>{sub}</Text>
          </View>

          <RightArrow
            width={EStyleSheet.value('10rem')}
            height={EStyleSheet.value('10rem')}
          />
        </Pressable>
        {index < options.length - 1 && <View style={styles.seperator} />}
      </View>
    );
  };

  return (
    <SafeArea>
      <Header title={Strings.customerSupport} type={1} />

      <View style={[styles.rowContainer, styles.infoContainer]}>
        <Text style={styles.helpText}>{Strings.helpText}</Text>
        <Help
          width={EStyleSheet.value('44rem')}
          height={EStyleSheet.value('44rem')}
        />
      </View>

      {options.map(renderOption)}
    </SafeArea>
  );
};

export default CustomerSupport;
