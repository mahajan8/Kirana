/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/introStyle';
import {Colors} from '../../../utils/values/Colors';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import SplashLogo from '../../../assets/images/splash-logo.svg';
import {getAuthToken} from '../../../utils/utility/LocalStore';
import {getUserDetails} from '../../home/Api';
import EStyleSheet from 'react-native-extended-stylesheet';
import {setToken} from '../../authentication/AuthActions';

const Splash = (props) => {
  useEffect(() => {
    handleNavigation();
  }, []);
  const handleNavigation = async () => {
    const token = await getAuthToken();
    if (token) {
      props.getUserDetails();
      props.setToken(token);
    } else {
      Actions.reset('introduction');
    }
  };
  return (
    <SafeArea statusBarColor={Colors.themeGreen}>
      <View style={styles.container}>
        <SplashLogo
          height={EStyleSheet.value('40rem')}
          width={EStyleSheet.value('210rem')}
        />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getUserDetails,
  setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
