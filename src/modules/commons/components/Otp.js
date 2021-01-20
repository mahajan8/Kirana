import React, {Component} from 'react';
import {View, TextInput, Platform, Keyboard} from 'react-native';
import {Colors} from '../../../utils/values/Colors';
import {styles} from '../styles/otpStyles';
import OtpAutocomplete from 'react-native-otp-autocomplete';

export default class Otp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: ['', '', '', ''],
      placeHolder: ['0', '0', '0', '0'],
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

  getHash = () =>
    OtpAutocomplete.getHash().then(console.log).catch(console.log);

  startListeningForOtp = () =>
    OtpAutocomplete.getOtp()
      .then((p) => OtpAutocomplete.addListener(this.otpHandler))
      .catch((p) => console.log(p));

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      Keyboard.dismiss();
      OtpAutocomplete.removeListener();
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
    const {focus, error, placeHolder} = this.state;

    return (
      <View style={styles.otpView}>
        {this.state.otp.map((item, index) => {
          let otp = this.state.otp;
          return (
            <TextInput
              key={`otp${index}`}
              style={[
                styles.otpField,
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
              placeholder={placeHolder[index]}
              multiline={Platform.OS === 'android'}
              placeholderTextColor={Colors.grayText}
              underlineColorAndroid="transparent"
              selectionColor={Colors.themeGreen}
              ref={(ref) => (this['otp' + index] = ref)}
              onFocus={() => {
                let placeHolderArr = ['0', '0', '0', '0'];
                placeHolderArr[index] = '';
                this.setState({placeHolder: placeHolderArr});
              }}
              // onFocus={() => {
              //   this.setState({focus: index});
              //   if (otp[index] == '') {
              //     for (var i = 0; i < index; i++) {
              //       if (otp[i] == '') {
              //         this['otp' + i].focus();
              //         break;
              //       }
              //     }
              //   } else {
              //     for (var i = otp.length - 1; i > index; i--) {
              //       if (otp[i] != '') {
              //         if (i == otp.length - 1) {
              //           this['otp' + i].focus();
              //         } else {
              //           this['otp' + (i + 1)].focus();
              //         }
              //         break;
              //       }
              //     }
              //   }
              // }}
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
