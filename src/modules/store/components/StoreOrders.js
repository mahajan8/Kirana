import React, {useState, useEffect} from 'react';
import {View, Text, SectionList, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/storeOrdersStyles';
import Clock from '../../../assets/images/clock.svg';
import GreenCheck from '../../../assets/images/green_circle_tick.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {connect} from 'react-redux';
import {getOrders} from '../../orders/Api';

// let sections = [
//   {title: 'Active orders', data: [1, 2]},
//   {title: 'Past orders', data: [1, 2, 3, 4]},
// ];

const StoreOrders = (props) => {
  // const renderHeaders = ({section: {title}}) => (
  //   <View style={styles.sectionHeaderContainer}>
  //     <Text style={styles.sectionName}>{title}</Text>
  //   </View>
  // );
  const [activeOrders, setActiveOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  const [count, setCount] = useState(null);
  const [endReachCallable, setEndReachCallable] = useState(true);

  useEffect(() => {
    getActiveOrders();
    getPastOrders();
  }, []);
  const getActiveOrders = () => {
    const data = {
      start: -1,
      limit: -1,
      conditions: [
        {
          key: 'SEARCH_BY_USER_ID',
          value: '5fc9f013a941d902e71e30a0',
          context: null,
        },
        // new preparing dispatched
        // if store id in props add condition
      ],
      sorts: [{key: 'SORT_BY_ID', value: false, context: null}],
    };
    props.getOrders(data, (results, totalCount) => setActiveOrders(results));
  };
  const getPastOrders = (start = 0) => {
    const data = {
      start,
      limit: 10,
      conditions: [
        {
          key: 'SEARCH_BY_USER_ID',
          value: '5fc9f013a941d902e71e30a0',
          context: null,
        },
        // new preparing dispatched
        // if store id in props add condition
      ],
      sorts: [{key: 'SORT_BY_ID', value: false, context: null}],
    };
    props.getOrders(data, (results, totalCount) => {
      setPastOrders([...pastOrders, ...results]);
      setCount(totalCount);
    });
  };
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
        {/*<SectionList
          sections={sections}
          renderSectionHeader={renderHeaders}
          keyExtractor={(item, index) => `orderSection${index}`}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        />*/}
        <FlatList
          data={pastOrders}
          renderItem={renderItem}
          keyExtractor={(item, index) => `pastOrder${index}`}
          onMomentumScrollBegin={() => setEndReachCallable(false)}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            if (!endReachCallable && pastOrders.length < count) {
              getPastOrders(pastOrders.length);
              setEndReachCallable(true);
            }
          }}
          ListHeaderComponent={() => (
            <FlatList
              data={activeOrders}
              renderItem={renderItem}
              keyExtractor={(item, index) => `activeOrders${index}`}
              ListFooterComponent={() => <Text>past order</Text>}
              ListHeaderComponent={() => <Text>active order</Text>}
            />
          )}
          ListFooterComponent={() => {
            if (props.loading && pastOrders.length) {
              return <Text> ADD LIST LOADER</Text>;
            } else {
              return null;
            }
          }}
        />
      </View>
    </SafeArea>
  );
};
const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {
  getOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreOrders);
