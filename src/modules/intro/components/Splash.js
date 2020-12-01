/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/introStyle';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
// import {getStoreInfo} from '../../onboarding/Api';
import {getAuthToken} from '../../../utils/utility/LocalStore';

const Splash = (props) => {
  useEffect(() => {
    // setTimeout(()=>Actions.replace('introduction'),500)
    (async () => {
      const token = await getAuthToken();

      if (token) {
        Actions.reset('drawer');
      } else {
        Actions.reset('introduction');
      }
    })();
  }, []);

  return (
    <SafeArea statusBarColor={Colors.themeGreen}>
      <View style={styles.container}>
        <Text style={{color: '#FFF', fontSize: EStyleSheet.value(20)}}>
          Kirana Kart
        </Text>
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
