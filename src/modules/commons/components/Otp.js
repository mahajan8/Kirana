import React, {Component} from 'react';
import {View, TextInput, Platform, Keyboard} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';
import RNOtpVerify from 'react-native-otp-verify';

export default class Otp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: ['', '', '', ''],
      error: false,
      focus: undefined,
    };
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      this.getHash();
      this.startListeningForOtp();
    }
  }

  isComplete() {
    let arr = this.state.otp;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == null || arr[i] == '') {
        return false;
      }
    }
    return true;
  }

  getOtp(otp) {
    let otpString = '';
    otp.map((item) => {
      otpString = otpString + item;
    });

    return otpString;
  }

  otpHandler = (message) => {
    const otpCode = /(\d{4})/g.exec(message)[1];
    if (otpCode) {
      let {otp} = this.state;
      otp[0] = otpCode.charAt(0);
      otp[1] = otpCode.charAt(1);
      otp[2] = otpCode.charAt(2);
      otp[3] = otpCode.charAt(3);
      this.setState(
        {
          otp,
        },
        () => {
          this.props.isComplete(true);
          this.props.verify();
        },
      );
    }
  };

  getHash = () => RNOtpVerify.getHash().then(console.log).catch(console.log);

  startListeningForOtp = () =>
    RNOtpVerify.getOtp()
      .then((p) => RNOtpVerify.addListener(this.otpHandler))
      .catch((p) => console.log(p));

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      Keyboard.dismiss();
      RNOtpVerify.removeListener();
    }
  }
  submitOTP() {
    if (this.isComplete()) {
      let otp = this.getOtp(this.state.otp);
      if (this.state.focus >= 0) this['otp' + this.state.focus].blur();
      this.setState({
        // otp: ['', '', '', ''],
        error: false,
        focus: undefined,
      });
      return otp;
    } else {
      this.setState({error: true});
      return false;
    }
  }

  clear() {
    this.setState({
      otp: ['', '', '', ''],
    });
  }

  render() {
    const {focus, error} = this.state;

    return (
      <View style={Styles.otpView}>
        {this.state.otp.map((item, index) => {
          let otp = this.state.otp;
          return (
            <TextInput
              key={`otp${index}`}
              style={[
                Styles.otpField,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  borderColor:
                    error && this.state.otp[index] == ''
                      ? 'red'
                      : focus == index || this.state.otp[index] != ''
                      ? Colors.themeGreen
                      : Colors.borderGray,
                },
              ]}
              maxLength={1}
              keyboardType="number-pad"
              value={item}
              placeholder="0"
              multiline={Platform.OS === 'android'}
              placeholderTextColor={Colors.grayText}
              underlineColorAndroid="transparent"
              selectionColor={Colors.themeGreen}
              ref={(ref) => (this['otp' + index] = ref)}
              onFocus={() => {
                this.setState({focus: index});
                if (otp[index] == '') {
                  for (var i = 0; i < index; i++) {
                    if (otp[i] == '') {
                      this['otp' + i].focus();
                      break;
                    }
                  }
                } else {
                  for (var i = otp.length - 1; i > index; i--) {
                    if (otp[i] != '') {
                      if (i == otp.length - 1) {
                        this['otp' + i].focus();
                      } else {
                        this['otp' + (i + 1)].focus();
                      }
                      break;
                    }
                  }
                }
              }}
              onChangeText={(value) => {
                otp[index] = value;
                if (index < this.state.otp.length - 1 && value != '') {
                  this['otp' + (index + 1)].focus();
                } else if (this.isComplete(otp)) {
                  this.setState({error: false});
                }
                this.setState({otp: []});
                this.setState({otp: otp});
                this.props.isComplete(this.isComplete());
              }}
              onKeyPress={(event) => {
                if (event.nativeEvent.key === 'Backspace' && otp[index] == '') {
                  if (index > 0) {
                    otp[index - 1] = '';
                    this.setState({otp: []});
                    this.setState({otp: otp});
                    this['otp' + (index - 1)].focus();
                  }
                }
              }}
              onBlur={() => this.setState({focus: undefined})}
            />
          );
        })}
      </View>
    );
  }
}

const Styles = EStyleSheet.create({
  otpField: {
    height: '56rem',
    width: '68rem',
    backgroundColor: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: '18rem',
    borderWidth: 1,
    borderColor: Colors.borderGray,
    borderRadius: '10rem',
    color: Colors.titleText,
    fontFamily: Fonts.medium,
    ...(Platform.OS == 'android' && {
      paddingBottom: 0,
      paddingTop: 0,
    }),
  },
  otpView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    marginBottom: '10rem',
  },
  submit: {
    borderTopWidth: 1,
    width: '100%',
    paddingVertical: '10rem',
    alignItems: 'center',
    marginTop: '30rem',
    borderColor: '#D8D8D8',
  },
  heading: {
    marginTop: '20rem',
    fontSize: '14rem',
    width: '80%',
    textAlign: 'center',
  },
});
