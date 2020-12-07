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
import AddAddress from '../modules/navigation/components/AddAddress';
import Addresses from '../modules/navigation/components/Addresses';
import Home from '../modules/home/components/Home';
import DrawerComponent from '../modules/home/components/DrawerComponent';
import StoreProducts from '../modules/store/components/StoreProducts';
import ProductsBySubCategory from '../modules/store/components/ProductsBySubCategory';
import ProductsList from '../modules/store/components/ProductsList';
import ProductDetails from '../modules/store/components/ProductDetails';
import SearchProducts from '../modules/home/components/SearchProducts';
import SearchProductResults from '../modules/home/components/SearchProductResults';
import ReferFriends from '../modules/navigation/components/ReferFriends';
import Invites from '../modules/navigation/components/Invites';
import CustomerSupport from '../modules/navigation/components/CustomerSupport';
import AccountSettings from '../modules/navigation/components/AccountSettings';
import AccountSetup from '../modules/navigation/components/AccountSetup';

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
        <Scene key="storeProducts" component={StoreProducts} />
        <Scene key="productsBySubCategory" component={ProductsBySubCategory} />
        <Scene key="productsList" component={ProductsList} />
        <Scene key="productDetails" component={ProductDetails} />
        <Scene key="searchProducts" component={SearchProducts} />
        <Scene key="searchProductResults" component={SearchProductResults} />
        <Scene key="referFriends" component={ReferFriends} />
        <Scene key="invites" component={Invites} />
        <Scene key="support" component={CustomerSupport} />
        <Scene key="accountSettings" component={AccountSettings} />
        <Scene key="accountSetup" component={AccountSetup} />
        <Scene
          key="drawer"
          drawer={true}
          drawerPosition="left"
          swipeEnabled={true}
          contentComponent={DrawerComponent}
          drawerWidth={'80%'}>
          <Scene key="home" component={Home} hideNavBar />
        </Scene>
      </Stack>
    </Router>
  );
};

export default AppRouter;
