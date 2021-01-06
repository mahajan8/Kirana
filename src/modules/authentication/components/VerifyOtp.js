import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import {styles} from '../styles/otpStyles';
import {connect} from 'react-redux';
import Otp from '../../commons/components/Otp';
import {verifyOtp, sendOtp} from '../Api';
import {commonStyles} from '../../commons/styles/commonStyles';
import Loader from '../../commons/components/Loader';
import {Colors} from '../../../utils/values/Colors';
import ErrorIcon from '../../../assets/images/error_icon.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import BottomButton from '../../commons/components/BottomButton';

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
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        style={commonStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Header
          title={Strings.verifyOtp}
          subTitle={Strings.otpSent + props.number}
          noShadow
        />

        <Otp
          ref={otp}
          isComplete={(complete) => setDisabled(!complete)}
          verify={verify}
        />

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
      </KeyboardAwareScrollView>

      <BottomButton
        label={Strings.verify}
        onPress={verify}
        disabled={disabled}
      />

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
