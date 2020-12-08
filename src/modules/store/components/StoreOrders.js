import React from 'react';
import {View, Text, SectionList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/storeOrdersStyles';
import Clock from '../../../assets/images/clock.svg';
import GreenCheck from '../../../assets/images/green_circle_tick.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';

let sections = [
  {title: 'Active orders', data: [1, 2]},
  {title: 'Past orders', data: [1, 2, 3, 4]},
];

const StoreOrders = () => {
  const renderHeaders = ({section: {title}}) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionName}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <View style={styles.orderContainer}>
      {/* First row with clock and Date of Order  */}
      <View style={[styles.rowContainer, styles.dateContainer]}>
        {/* TODO: Change to green clock  */}
        <Clock
          style={styles.icons}
          width={EStyleSheet.value('14rem')}
          height={EStyleSheet.value('14rem')}
        />
        <Text style={styles.detailText}>{'11 Sep 2020, 7:00 pm'}</Text>
      </View>

      {/* Second Row with Address Details  */}
      <View style={styles.rowContainer}>
        {/* Restaurant Details  */}
        <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
          <Clock
            style={styles.icons}
            width={EStyleSheet.value('14rem')}
            height={EStyleSheet.value('14rem')}
          />
          <View>
            <Text style={styles.name}>{'The Baker’s Dozen'}</Text>
            <Text style={styles.locationText} numberOfLines={1}>
              {'Pratikshat Junior College Pratikshat Junior College'}
            </Text>
          </View>
        </View>
        <View style={styles.dottedLine} />
        {/* User Address to Deliver Details  */}
        <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
          <Clock
            style={styles.icons}
            width={EStyleSheet.value('14rem')}
            height={EStyleSheet.value('14rem')}
          />
          <View>
            <Text style={styles.name}>{'The Baker’s Dozen'}</Text>
            <Text style={styles.locationText} numberOfLines={1}>
              {'Pratikshat Junior College Pratikshat Junior College'}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.seperator} />

      {/* Third row with payment status and track button  */}
      <View style={[styles.rowContainer, styles.trackContainer]}>
        <View style={styles.rowContainer}>
          <GreenCheck
            style={styles.icons}
            width={EStyleSheet.value('16rem')}
            height={EStyleSheet.value('16rem')}
          />
          <Text style={styles.detailText}>
            {Strings.paid}
            <Text style={styles.greenText}>
              {' '}
              {Strings.currency} {'627'}
            </Text>
          </Text>
        </View>
        <Button
          label={Strings.trackOrder}
          Style={styles.trackButton}
          labelStyle={styles.trackLabel}
        />
      </View>
    </View>
  );

  return (
    <SafeArea>
      <View>
        <SectionList
          sections={sections}
          renderSectionHeader={renderHeaders}
          keyExtractor={(item, index) => `orderSection${index}`}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        />
      </View>
    </SafeArea>
  );
};

export default StoreOrders;
