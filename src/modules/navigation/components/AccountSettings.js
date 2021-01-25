import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {valid, Validation} from '../../../utils/utility/Validations';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import Input from '../../commons/components/Input';
import Otp from '../../commons/components/Otp';
import SafeArea from '../../commons/components/SafeArea';
import {commonStyles} from '../../commons/styles/commonStyles';
import {sendOtpToChangeNumber, verifyOtpChangeNumber} from '../Api';
import {styles} from '../styles/accountSettingStyles';
import ErrorIcon from '../../../assets/images/error_icon.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import BottomButton from '../../commons/components/BottomButton';
import LoaderError from '../../commons/components/LoaderError';

const AccountSettings = (props) => {
  let {viewType, userDetails} = props;
  const [number, setNumber] = useState('');
  const [seconds, setSeconds] = useState(30);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);

  const otp = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const verifyOtp = () => (
    //Render Otp Layout
    <View>
      <Text style={styles.heading}>{Strings.enterNewNumber}</Text>
      <Otp
        ref={otp}
        isComplete={(complete) => setDisabled(!complete)}
        verify={onSubmit}
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
          <Pressable onPress={() => onSubmit(true)}>
            <Text style={[styles.resendText, styles.coloredText]}>
              {Strings.resend}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );

  const changeNumber = () => (
    // Render Number Input Layout
    <View>
      <Text style={styles.heading}>{Strings.verifyNumber}</Text>
      <Input
        label={Strings.mobileNumber}
        value={number}
        onChange={setNumber}
        containerStyle={styles.input}
        type={'number'}
        errorMessage={Strings.invalidNumber}
        error={error}
        max={10}
      />
    </View>
  );

  const viewNumber = () => (
    //Render Current Number with change button
    <View style={[styles.rowContainer, styles.numberContainer]}>
      <View>
        <Text style={styles.numberLabel}>{Strings.mobileNumber}</Text>
        <Text style={styles.number}>{userDetails.mobile}</Text>
      </View>
      <Button
        Style={styles.changeButton}
        labelStyle={styles.changeButtonLabel}
        label={Strings.change}
        onPress={() => Actions.accountSettings({viewType: 1})}
      />
    </View>
  );

  const renderByType = () => {
    // Render Page by viewType passed in params.
    switch (viewType) {
      case 1:
        return changeNumber();
      case 2:
        return verifyOtp();
      default:
        return viewNumber();
    }
  };

  const getDisabled = () => {
    switch (viewType) {
      case 1:
        return !number;
      case 2:
        return disabled;
      default:
        return false;
    }
  };

  const onSubmit = (resend = false) => {
    if (viewType === 1 || resend) {
      if (!valid(number, Validation.mobile) && !resend) {
        setError(true);
      } else {
        if (error) {
          setError(false);
        }
        let pars = {
          new_mobile: resend ? props.number : number,
          country_code: '+91',
          user_type: 30,
        };
        props.sendOtpToChangeNumber(pars, () => {
          if (!resend) {
            Actions.accountSettings({viewType: 2, number: number});
          }
        });
        if (resend) {
          otp.current.clear();
          setSeconds(30);
        }
      }
    } else {
      if (otp.current.submitOTP()) {
        let pars = {
          new_mobile: props.number,
          otp_code: otp.current.submitOTP(),
        };
        props.verifyOtpChangeNumber(pars, () => setError(true));
      }
    }
  };

  return (
    <SafeArea>
      <Header
        title={viewType ? Strings.changeNumber : Strings.accountSetting}
        type={1}
      />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        style={commonStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {viewType && (
            <View>
              <View style={[styles.rowContainer, styles.currentNumberRow]}>
                <Text style={styles.currentNumberLabel}>
                  {Strings.currentNumber}
                </Text>
                <Text style={styles.currentNumber}>{userDetails.mobile}</Text>
              </View>
              <View style={styles.seperator} />
            </View>
          )}
          {renderByType()}
        </View>
      </KeyboardAwareScrollView>
      {viewType && (
        <BottomButton
          label={viewType === 1 ? Strings.getOtp : Strings.verify}
          disabled={getDisabled()}
          onPress={onSubmit}
        />
      )}
      <LoaderError retry={onSubmit} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  userDetails: state.homeReducer.userDetails,
});

const mapDispatchToProps = {
  sendOtpToChangeNumber,
  verifyOtpChangeNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
