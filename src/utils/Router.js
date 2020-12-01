import React from 'react';
import {Scene, Router, Stack, Drawer} from 'react-native-router-flux';
import Splash from '../modules/intro/components/Splash';
import Introduction from '../modules/intro/components/Introduction';
import SelectLanguage from '../modules/intro/components/SelectLanguage';
import Login from '../modules/authentication/components/Login';
import VerifyOtp from '../modules/authentication/components/VerifyOtp';
import Onboarding from '../modules/onboarding/components/Onboarding';
import Referal from '../modules/onboarding/components/Referal';
import SearchLocation from '../modules/onboarding/components/SearchLocation';
import AddAddress from '../modules/home/components/AddAddress';
import Addresses from '../modules/home/components/Addresses';
import Home from '../modules/home/components/Home';
import DrawerComponent from '../modules/home/components/DrawerComponent';

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
        <Scene key="searchLocation" component={SearchLocation} />
        <Scene key="addAddress" component={AddAddress} />
        <Scene key="addresses" component={Addresses} />
        <Scene
          key="drawer"
          drawer={true}
          drawerPosition="left"
          contentComponent={DrawerComponent}
          drawerWidth={'80%'}>
          <Scene key="home" component={Home} hideNavBar />
        </Scene>
      </Stack>
    </Router>
  );
};

export default AppRouter;
