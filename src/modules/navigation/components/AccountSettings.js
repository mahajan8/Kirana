import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {valid, Validation} from '../../../utils/utility/Validations';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import Input from '../../commons/components/Input';
import Otp from '../../commons/components/Otp';
import SafeArea from '../../commons/components/SafeArea';
import {commonStyles} from '../../commons/styles/commonStyles';
import {styles} from '../styles/accountSettingStyles';

const AccountSettings = (props) => {
  let {viewType} = props;
  const [number, setNumber] = useState('');
  const [seconds, setSeconds] = useState(30);
  const [disabled, setDisabled] = useState(true);
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
    <View>
      <Text style={styles.heading}>{Strings.enterNewNumber}</Text>
      <Otp ref={otp} isComplete={(complete) => setDisabled(!complete)} />

      <Text style={styles.resendText}>
        {seconds ? Strings.resendWait : Strings.preResend}
        <Text
          style={styles.coloredText}
          // onPress={() => !seconds && resend()}
        >
          {seconds ? '00:' + seconds : Strings.resend}
        </Text>
      </Text>
    </View>
  );

  const changeNumber = () => (
    <View>
      <Text style={styles.heading}>{Strings.verifyNumber}</Text>
      <Input
        label={Strings.mobileNumber}
        value={number}
        onChange={setNumber}
        containerStyle={styles.input}
        type={'number'}
        errorMessage={Strings.invalidNumber}
        error={number && !valid(number, Validation.mobile)}
      />
    </View>
  );

  const viewNumber = () => (
    <View style={[styles.rowContainer, styles.numberContainer]}>
      <View>
        <Text style={styles.numberLabel}>{Strings.mobileNumber}</Text>
        <Text style={styles.number}>{'9830098300'}</Text>
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
        return !valid(number, Validation.mobile);
      case 2:
        return disabled;
      default:
        return false;
    }
  };

  const onSubmit = () => {
    if (viewType === 1) {
      Actions.accountSettings({viewType: 2, number: number});
    } else {
      alert(otp.current.submitOTP());
    }
  };

  return (
    <SafeArea>
      <Header
        title={viewType ? Strings.changeNumber : Strings.accountSetting}
        type={1}
      />
      <View style={styles.container}>
        {viewType && (
          <View>
            <View style={[styles.rowContainer, styles.currentNumberRow]}>
              <Text style={styles.currentNumberLabel}>
                {Strings.currentNumber}
              </Text>
              <Text style={styles.currentNumber}>{'9830098300'}</Text>
            </View>
            <View style={styles.seperator} />
          </View>
        )}
        {renderByType()}
      </View>
      {viewType && (
        <View style={commonStyles.buttonBottomContainer}>
          <Button
            label={viewType === 1 ? Strings.getOtp : Strings.verify}
            disabled={getDisabled()}
            onPress={onSubmit}
          />
        </View>
      )}
    </SafeArea>
  );
};

export default AccountSettings;