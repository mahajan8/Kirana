import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import EStyleSheet from 'react-native-extended-stylesheet';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/customerSupportStyles';
import HeadLineIcon from '../../../assets/images/account_setup_image.svg';
import Input from '../../commons/components/Input';

const AccountSetup = (props) => {
  const [fullName, setFullName] = useState('');
  return (
    <SafeArea>
      <Header title={Strings.accountSetup} type={1} />

      <View style={[styles.rowContainer, styles.infoContainer]}>
        <Text style={styles.helpText}>{Strings.accountSetupNameHeadline}</Text>
        <HeadLineIcon
          width={EStyleSheet.value('44rem')}
          height={EStyleSheet.value('44rem')}
        />
      </View>
      <Input label={Strings.fullName} value={fullName} onChange={setFullName} />
    </SafeArea>
  );
};

export default AccountSetup;
