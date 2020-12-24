import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Pressable,
} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import {styles} from '../styles/otpStyles';
import {connect} from 'react-redux';
import Otp from '../../commons/components/Otp';
import {verifyOtp, sendOtp} from '../Api';
import {Actions} from 'react-native-router-flux';
import {commonStyles} from '../../commons/styles/commonStyles';
import Loader from '../../commons/components/Loader';
import {Colors} from '../../../utils/values/Colors';
import ErrorIcon from '../../../assets/images/error_icon.svg';

const VerifyOtp = (props) => {
  const otp = useRef(null);

  const [disabled, setDisabled] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const [error, setError] = useState(false);

  const verify = () => {
    if (otp.current.submitOTP()) {
      let pars = {
        mobile: props.number,
        otp_code: otp.current.submitOTP(),
        user_type: 30,
      };
      props.verifyOtp(pars, () => setError(true));
    }
  };

  const resend = () => {
    let pars = {
      mobile: props.number,
      country_code: '+91',
    };

    props.sendOtp(pars);
    otp.current.clear();
    setSeconds(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds) setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

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
            title={Strings.verifyOtp}
            subTitle={Strings.otpSent + props.number}
            noShadow
          />

          <Otp ref={otp} isComplete={(complete) => setDisabled(!complete)} />

          {error && (
            <View style={styles.rowContainer}>
              <ErrorIcon />
              <Text style={styles.errorMessage}>{Strings.otpError}</Text>
            </View>
          )}
          <View style={commonStyles.bottomTextContainer}>
            {seconds ? (
              <Text style={styles.resendText}>
                {seconds ? Strings.resendWait : ''}
                <Text style={styles.coloredText}>{'00:' + seconds}</Text>
              </Text>
            ) : (
              <Pressable onPress={resend}>
                <Text style={[styles.resendText, styles.coloredText]}>
                  {Strings.resend}
                </Text>
              </Pressable>
            )}
          </View>

          <View style={commonStyles.buttonBottomContainer}>
            <Button
              label={Strings.verify}
              onPress={verify}
              disabled={disabled}
            />
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
  verifyOtp,
  sendOtp,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOtp);
