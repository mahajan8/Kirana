import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Splash from '../modules/intro/components/Splash';
import Introduction from '../modules/intro/components/Introduction';
import SelectLanguage from '../modules/intro/components/SelectLanguage';
import Login from '../modules/authentication/components/Login';
import VerifyOtp from '../modules/authentication/components/VerifyOtp';
import Onboarding from '../modules/onboarding/components/Onboarding';
import Referal from '../modules/onboarding/components/Referal';

const AppRouter = () => {
  return (
    <Router backAndroidHandler={() => {}}>
      <Stack key="root" hideNavBar>
        <Scene key="splash" component={Splash} />
        <Scene key="introduction" component={Introduction} />
        <Scene key="selectLanguage" component={SelectLanguage} />
        <Scene key="login" component={Login} />
        <Scene key="otp" component={VerifyOtp} />
        <Scene key="onboarding" component={Onboarding} />
        <Scene key="referal" component={Referal} />
      </Stack>
    </Router>
  );
};

export default AppRouter;
