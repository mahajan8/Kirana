import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Pressable,
  Linking,
} from 'react-native';
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
import {Urls} from '../../../utils/utility/Urls';
import {ripple} from '../../../utils/utility/Utils';

const Login = (props) => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

  const login = () => {
    if (!valid(number, Validation.mobile)) {
      setError(true);
    } else {
      if (error) {
        setError(false);
      }
      let pars = {
        mobile: number,
        country_code: '+91',
        user_type: 30,
      };
      props.sendOtp(pars);
    }
  };

  const privacyPolicyClick = () => {
    Linking.openURL(Urls.privacyUrl);
  };
  const tncClick = () => {
    Linking.openURL(Urls.termsUrl);
  };

  return (
    <SafeArea statusBarColor={Colors.lightGreen}>
      <KeyboardAvoidingView
        style={commonStyles.scrollContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 20}>
        <ScrollView
          contentContainerStyle={commonStyles.scrollContainer}
          bounces={false}
          keyboardShouldPersistTaps="handled">
          <Header
            title={Strings.loginTitle}
            subTitle={Strings.loginSubTitle}
            noShadow
          />

          <View style={styles.codeContainer}>
            <View style={styles.codeSubContainer}>
              {/*<Text style={styles.codeLabel}>Code</Text>*/}
              <Text style={styles.codeValue}>+91</Text>
            </View>
            <Input
              label={Strings.mobileNumber}
              value={number}
              onChange={(number) => setNumber(number)}
              type={'phone'}
              errorMessage={Strings.invalidNumber}
              error={error}
              containerStyle={styles.numberInputContainer}
              max={10}
            />
          </View>

          <View
            style={[commonStyles.buttonBottomContainer, styles.bottomButton]}>
            <Button
              label={Strings.continue}
              onPress={() => login()}
              disabled={!number}
            />
            <View style={styles.bottomTextContainer}>
              <Text style={styles.termsText}>{Strings.accepting}</Text>
              <Pressable onPress={tncClick} android_ripple={ripple}>
                <Text style={[styles.termsText, styles.coloredText]}>
                  {Strings.terms}
                </Text>
              </Pressable>
              <Text style={styles.termsText}>{Strings.and}</Text>
              <Pressable onPress={privacyPolicyClick} android_ripple={ripple}>
                <Text style={[styles.termsText, styles.coloredText]}>
                  {Strings.privacy}
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
