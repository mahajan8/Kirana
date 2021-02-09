import React from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/invitesStyles';
import Check from '../../../assets/images/green_circle_tick.svg';
import NextFreeDeliveries from '../../../assets/images/next_free_deliveries.svg';
import EStyleSheet from 'react-native-extended-stylesheet';

const Invites = () => {
  return (
    <SafeArea>
      <Header title={Strings.yourInvites} type={1} />

      <View style={[styles.headingContainer, styles.rowContainer]}>
        <Text style={styles.rewarded}>{Strings.rewarded}</Text>
        <Text style={styles.rewarded}>{'2'}</Text>
      </View>

      <View style={[styles.rowContainer, styles.inviteRow]}>
        <Text style={styles.number}>7900171608</Text>
        <View style={styles.rowContainer}>
          <Check
            width={EStyleSheet.value('$spacingExtraMedium')}
            height={EStyleSheet.value('$spacingExtraMedium')}
          />
          <Text style={styles.rewardDate}>Rewarded on 05 Oct</Text>
        </View>
      </View>
      <View style={[styles.rowContainer, styles.inviteRow]}>
        <Text style={styles.number}>7900171608</Text>
        <View style={styles.rowContainer}>
          <Check
            width={EStyleSheet.value('$spacingExtraMedium')}
            height={EStyleSheet.value('$spacingExtraMedium')}
          />
          <Text style={styles.rewardDate}>Rewarded on 05 Oct</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.rowContainer, styles.bannerContainer]}>
          <Text style={styles.nextFree}>
            {Strings.yourNext}
            <Text style={styles.freeDeliveryCount}> 3 </Text>
            {Strings.deliveriesWillFree}
          </Text>
          <NextFreeDeliveries
            width={EStyleSheet.value('124rem')}
            height={EStyleSheet.value('67rem')}
          />
        </View>
      </View>
    </SafeArea>
  );
};

export default Invites;
