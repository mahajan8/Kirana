import React, {useState, useRef, useEffect} from 'react';
import {View, Text} from 'react-native';
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

const VerifyOtp = (props) => {
  const otp = useRef(null);

  const [disabled, setDisabled] = useState(true);
  const [seconds, setSeconds] = useState(30);

  const verify = () => {
    if (otp.current.submitOTP()) {
      let pars = {
        mobile: props.number,
        otp_code: otp.current.submitOTP(),
        user_type: 30,
      };
      props.verifyOtp(pars);
    }
  };

  const resend = () => {
    let pars = {
      mobile: props.number,
      country_code: '+91',
    };

    props.sendOtp(pars);
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
      <View style={{flex: 1}}>
        <Header
          title={Strings.verifyOtp}
          subTitle={Strings.otpSent + props.number}
        />

        <Otp ref={otp} isComplete={(complete) => setDisabled(!complete)} />

        <Text style={styles.resendText}>
          {seconds ? Strings.resendWait : Strings.preResend}
          <Text style={styles.coloredText} onPress={() => !seconds && resend()}>
            {seconds ? '00:' + seconds : Strings.resend}
          </Text>
        </Text>

        <View style={commonStyles.buttonBottomContainer}>
          <Button
            label={Strings.verify}
            onPress={() => verify()}
            disabled={disabled}
          />
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
  verifyOtp,
  sendOtp,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOtp);
