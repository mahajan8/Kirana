/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from '../styles/orderListShimmerStyles';
import Clock from '../../../assets/images/green_clock.svg';
import FromIcon from '../../../assets/images/order_location_from.svg';
import ToIcon from '../../../assets/images/order_location_to.svg';

const OrderListShimmer = (props) => {
  let {count = 2} = props;

  const [list, setList] = useState(['', '']);

  useEffect(() => {
    let arr = [];
    while (arr.length < count) arr.push('');
    setList(arr);
  }, []);

  const renderItem = (item, index) => (
    <View style={styles.orderContainer}>
      {/* First row with clock and Date of Order  */}
      <View style={[styles.rowContainer, styles.dateContainer]}>
        <Clock style={styles.icons} />
        <Text style={styles.detailText} />
      </View>

      {/* Second Row with Address Details  */}
      <View style={[styles.rowContainer, styles.addressContainer]}>
        {/* Restaurant Details  */}
        <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
          <FromIcon style={styles.icons} />
          <View>
            <View style={styles.addressName} />
            <View style={styles.locationText} />
          </View>
        </View>
        <View style={styles.dottedLine} />
        {/* User Address to Deliver Details  */}
        <View style={[styles.rowContainer, styles.storeDetailsContainer]}>
          <ToIcon style={styles.icons} />
          <View>
            <View style={styles.addressName} />
            <View style={styles.locationText} />
          </View>
        </View>
      </View>

      <View style={styles.seperator} />

      {/* Third row with payment status and track button  */}
      <View style={[styles.rowContainer, styles.trackContainer]}>
        <View style={styles.rowContainer}>
          <View style={styles.checkIcon} />
          <View style={styles.detailText} />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={list}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(item, index) => `orderItem${index}`}
      contentContainerStyle={[styles.listContainer]}
    />
  );
};
export default OrderListShimmer;
