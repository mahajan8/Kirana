import React from 'react';
import {View, Text, Pressable, Linking} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {Colors} from '../../../utils/values/Colors';
import {Strings} from '../../../utils/values/Strings';
import MyOrders from '../../../assets/images/my_orders.svg';
import Addresses from '../../../assets/images/addresses_location.svg';
import Refer from '../../../assets/images/refer_icon.svg';
import Settings from '../../../assets/images/settings.svg';
import Support from '../../../assets/images/support.svg';
import Terms from '../../../assets/images/terms.svg';
import Privacy from '../../../assets/images/privacy.svg';
import FreeDelivery from '../../../assets/images/get_free_delivery.svg';
import Logout from '../../../assets/images/logout.svg';
import RightArrow from '../../../assets/images/right_arrow.svg';
import {logout, ripple} from '../../../utils/utility/Utils';
import SafeArea from '../../commons/components/SafeArea';
import {connect} from 'react-redux';
import {styles} from '../styles/drawerStyles';
import {Urls} from '../../../utils/utility/Urls';

let options = [
  {icon: MyOrders, label: Strings.myOrders},
  {icon: Addresses, label: Strings.addresses},
  {icon: Refer, label: Strings.referFriends},
  {icon: Settings, label: Strings.settings},
  {icon: Support, label: Strings.support},
  {icon: Terms, label: Strings.termsConditions},
  {icon: Privacy, label: Strings.privacyPolicy},
  {icon: Logout, label: Strings.logout},
];

const actions = (index) => {
  // Switch case for Drawer option Selected
  switch (index) {
    case 0:
      Actions.myOrders();
      break;
    case 1:
      Actions.addresses();
      break;
    case 2:
      Actions.referFriends();
      break;
    case 3:
      Actions.accountSettings();
      break;
    case 4:
      Actions.support();
      break;
    case 5:
      Linking.openURL(Urls.termsUrl);
      break;
    case 6:
      Linking.openURL(Urls.privacyUrl);
      break;
    case 7:
      logout();
      break;
    default:
      break;
  }
};

const renderOptions = (Icon, label, index) => {
  return (
    <Pressable
      android_ripple={ripple}
      style={styles.optionsRow}
      onPress={() => {
        Actions.drawerClose();
        actions(index);
      }}>
      <Icon style={styles.optionIcon} />
      <Text style={styles.optionLabel}>{label}</Text>
    </Pressable>
  );
};

const DrawerComponent = (props) => {
  let {userDetails} = props;

  return (
    <SafeArea statusBarColor={Colors.white}>
      <View style={styles.greenContainer}>
        <Text style={styles.number}>{userDetails.mobile}</Text>
        <Pressable onPress={Actions.accountSetup}>
          <Text style={styles.completeSetup}>
            {userDetails.first_name
              ? Strings.editAccountDetails
              : Strings.completeAccSetup}
          </Text>
        </Pressable>
      </View>

      <Pressable style={styles.banner} android_ripple={ripple}>
        <FreeDelivery
          width={EStyleSheet.value('$spacingMassive')}
          height={EStyleSheet.value('$spacingMediumHuge')}
        />

        <View style={styles.freeDeliveryTextContainer}>
          <Text style={styles.freeDelivery}>{Strings.getFreeDelivery}</Text>
          <Text style={styles.freeDeliverySub}>
            {Strings.drawerFreeDeliverySub}
          </Text>
        </View>

        <View style={styles.arrow}>
          <RightArrow
            width={EStyleSheet.value('$spacingMedium')}
            height={EStyleSheet.value('$spacingMedium')}
          />
        </View>
      </Pressable>

      {/* Map options to render Drawer Items */}
      {options.map((item, index) => (
        <View key={`$option${item.label}`}>
          {(index === 3 || index === 5 || index === 7) && (
            <View style={styles.seperator} />
          )}
          {renderOptions(item.icon, item.label, index)}
        </View>
      ))}
      {/* </View> */}
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.homeReducer.userDetails,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);
