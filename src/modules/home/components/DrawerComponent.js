import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
import RightArrow from '../../../assets/images/right_arrow.svg';
import {logout} from '../../../utils/utility/Utils';
import SafeArea from '../../commons/components/SafeArea';
import {Fonts} from '../../../utils/values/Fonts';

let options = [
  {icon: MyOrders, label: Strings.myOrders},
  {icon: Addresses, label: Strings.addresses},
  {icon: Refer, label: Strings.referFriends},
  {icon: Settings, label: Strings.settings},
  {icon: Support, label: Strings.support},
  {icon: Terms, label: Strings.termsConditions},
  {icon: Privacy, label: Strings.privacyPolicy},
];

const actions = (index) => {
  switch (index) {
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
      console.log(Actions.state);
      break;
    case 6:
      logout();
      break;
    default:
      break;
  }
};

const renderOptions = (Icon, label, index) => {
  return (
    <TouchableOpacity style={styles.optionsRow} onPress={() => actions(index)}>
      <Icon
        style={{marginRight: EStyleSheet.value('20rem')}}
        width={EStyleSheet.value('24rem')}
        height={EStyleSheet.value('24rem')}
      />
      <Text style={styles.optionLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const DrawerComponent = () => {
  return (
    <SafeArea statusBarColor={Colors.white}>
      <View style={styles.greenContainer}>
        <Text style={styles.number}>+91 9830098300</Text>
        <Text style={styles.completeSetup}>{Strings.completeAccSetup}</Text>
      </View>
      <View style={styles.banner}>
        <FreeDelivery
          width={EStyleSheet.value('56rem')}
          height={EStyleSheet.value('37rem')}
        />
        <View style={styles.freeDeliveryTextContainer}>
          <Text style={styles.freeDelivery}>{Strings.getFreeDelivery}</Text>
          <Text style={styles.freeDeliverySub}>
            {Strings.drawerFreeDeliverySub}
          </Text>
        </View>
        <View style={styles.arrow}>
          <RightArrow
            width={EStyleSheet.value('12rem')}
            height={EStyleSheet.value('12rem')}
          />
        </View>
      </View>
      {options.map((item, index) => (
        <View key={`$option${item.label}`}>
          {(index === 3 || index === 5) && <View style={styles.seperator} />}
          {renderOptions(item.icon, item.label, index)}
        </View>
      ))}
      {/* </View> */}
    </SafeArea>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  greenContainer: {
    paddingTop: '20vrem',
    paddingHorizontal: '20rem',
    paddingBottom: '24vrem',
    backgroundColor: Colors.themeGreen,
  },
  number: {
    fontSize: '16rem',
    fontFamily: Fonts.medium,
    color: Colors.white,
    lineHeight: '22rem',
  },
  completeSetup: {
    fontSize: '9rem',
    fontFamily: Fonts.regular,
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  banner: {
    backgroundColor: Colors.lightBlue,
    marginHorizontal: '20rem',
    height: '70vrem',
    marginTop: '16vrem',
    borderRadius: '5rem',
    marginBottom: '16vrem',
    padding: '15rem',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: {
    fontFamily: Fonts.regular,
    fontSize: '12rem',
    color: '#424242',
    lineHeight: '18rem',
    letterSpacing: '0.08rem',
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '10vrem',
    paddingHorizontal: '16rem',
  },
  seperator: {
    marginHorizontal: '20rem',
    backgroundColor: Colors.seperatorColor,
    height: '1vrem',
    marginVertical: '5.5vrem',
  },
  freeDeliveryTextContainer: {
    marginLeft: '16rem',
  },
  freeDelivery: {
    fontFamily: Fonts.medium,
    fontSize: '10rem',
    color: Colors.darkGreen,
  },
  freeDeliverySub: {
    fontFamily: Fonts.regular,
    fontSize: '8rem',
    color: '#424242',
    letterSpacing: '0.13rem',
    width: '121rem',
  },
  arrow: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default DrawerComponent;
