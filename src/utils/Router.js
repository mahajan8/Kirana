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
import AlgoliaSearch from '../modules/store/components/algolia/AlgoliaSearch';
import Cart from '../modules/cart/components/Cart';
import PaymentStatus from '../modules/cart/components/PaymentStatus';
import OrderDetails from '../modules/orders/components/OrderDetails';
import TrackOrder from '../modules/orders/components/TrackOrder';
import MyOrders from '../modules/navigation/components/MyOrders';
import OrderCancelled from '../modules/orders/components/OrderCancelled';
import AlternativeStores from '../modules/orders/components/AlternativeStores';
import Rating from '../modules/orders/components/Rating';

const AppRouter = (notificationPayload) => {
  return (
    <Router backAndroidHandler={() => {}}>
      <Stack key="root" hideNavBar>
        <Scene
          key="splash"
          component={Splash}
          initial={true}
          notificationPayload={notificationPayload}
        />
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
        <Scene key="algoliaSearch" component={AlgoliaSearch} />
        <Scene key="cart" component={Cart} />
        <Scene key="paymentStatus" component={PaymentStatus} />
        <Scene key="searchProducts" component={SearchProducts} />
        <Scene key="orderDetails" component={OrderDetails} />
        <Scene key="trackOrder" component={TrackOrder} />
        <Scene key="myOrders" component={MyOrders} />
        <Scene key="orderCancelled" component={OrderCancelled} />
        <Scene key="alternativeStores" component={AlternativeStores} />
        <Scene key="rating" component={Rating} />
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
