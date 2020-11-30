import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Input from '../../commons/components/Input';
import Header from '../../commons/components/Header';
import {styles} from '../styles/loginStyle';
import {valid, Validation} from '../../../utils/utility/Validations';
import Loader from '../../commons/components/Loader';
import {sendOtp} from '../Api';
import {connect} from 'react-redux';
import {commonStyles} from '../../commons/styles/commonStyles';
import {Colors} from '../../../utils/values/Colors';

const Login = (props) => {
  const [number, setNumber] = useState('');

  const login = () => {
    let pars = {
      mobile: number,
      country_code: '+91',
    };

    props.sendOtp(pars);
  };

  return (
    <SafeArea statusBarColor={Colors.lightGreen}>
      <View style={{flex: 1}}>
        <Header title={Strings.loginTitle} subTitle={Strings.loginSubTitle} />

        <Input
          label={Strings.mobileNumber}
          value={number}
          onChange={(number) => setNumber(number)}
          type={'phone'}
          errorMessage={Strings.invalidNumber}
          error={number && !valid(number, Validation.mobile)}
          containerStyle={{marginTop: 0}}
        />

        <View style={commonStyles.buttonBottomContainer}>
          <Button
            label={Strings.continue}
            onPress={() => login()}
            disabled={!valid(number, Validation.mobile)}
          />

          <Text style={styles.termsText}>
            {Strings.accepting}
            <Text
              style={styles.coloredText}
              onPress={() => console.log('terms')}>
              {Strings.terms}
            </Text>
            {Strings.and}
            <Text
              style={styles.coloredText}
              onPress={() => console.log('privacy')}>
              {Strings.privacy}
            </Text>
          </Text>
        </View>
      </View>
      <Loader show={props.loading} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  sendOtp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
