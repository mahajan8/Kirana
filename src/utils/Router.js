import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Splash from '../modules/intro/components/Splash';
import Introduction from '../modules/intro/components/Introduction';
import SelectLanguage from '../modules/intro/components/SelectLanguage';
import Login from '../modules/authentication/components/Login';
import VerifyOtp from '../modules/authentication/components/VerifyOtp';
import Onboarding from '../modules/onboarding/components/Onboarding';
import Referal from '../modules/onboarding/components/Referal';
import AddressSearch from '../modules/onboarding/components/AddressSearch';
import AddAddress from '../modules/navigation/components/AddAddress';
import Addresses from '../modules/navigation/components/Addresses';
import Home from '../modules/home/components/Home';
import DrawerComponent from '../modules/home/components/DrawerComponent';
import StoreSubCategories from '../modules/store/components/StoreSubCategories';
import ProductsList from '../modules/store/components/ProductsList';
import ProductDetails from '../modules/store/components/ProductDetails';
import SearchStoreProducts from '../modules/home/components/SearchStoreProducts';
import StoreProductsResults from '../modules/home/components/StoreProductsResults';
import ReferFriends from '../modules/navigation/components/ReferFriends';
import Invites from '../modules/navigation/components/Invites';
import CustomerSupport from '../modules/navigation/components/CustomerSupport';
import AccountSettings from '../modules/navigation/components/AccountSettings';
import AccountSetup from '../modules/navigation/components/AccountSetup';
import Store from '../modules/store/components/Store';
import Filters from '../modules/store/components/Filters';
import StoreCategories from '../modules/store/components/StoreCategories';
import SearchProducts from '../modules/store/components/SearchProducts';
import OrderDetails from '../modules/orders/components/OrderDetails';
import TrackOrder from '../modules/orders/components/TrackOrder';

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
        <Scene key="addressSearch" component={AddressSearch} />
        <Scene key="addAddress" component={AddAddress} />
        <Scene key="addresses" component={Addresses} />
        <Scene key="storeCategories" component={StoreCategories} />
        <Scene key="storeSubCategories" component={StoreSubCategories} />
        <Scene key="productsList" component={ProductsList} />
        <Scene key="productDetails" component={ProductDetails} />
        <Scene key="searchStoreProducts" component={SearchStoreProducts} />
        <Scene key="storeProductsResults" component={StoreProductsResults} />
        <Scene key="referFriends" component={ReferFriends} />
        <Scene key="invites" component={Invites} />
        <Scene key="support" component={CustomerSupport} />
        <Scene key="accountSettings" component={AccountSettings} />
        <Scene key="accountSetup" component={AccountSetup} />
        <Scene key="store" component={Store} />
        <Scene key="filters" component={Filters} />
        <Scene key="searchProducts" component={SearchProducts} />
        <Scene key="orderDetails" component={OrderDetails} />
        <Scene key="trackOrder" component={TrackOrder} />
        <Scene
          key="drawer"
          drawer={true}
          drawerPosition="left"
          swipeEnabled={true}
          contentComponent={DrawerComponent}
          drawerWidth={330}>
          <Scene key="home" component={Home} hideNavBar />
        </Scene>
      </Stack>
    </Router>
  );
};

export default AppRouter;
