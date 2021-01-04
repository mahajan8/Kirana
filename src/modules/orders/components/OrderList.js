/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/orderListStyles';
import {Strings} from '../../../utils/values/Strings';
import {connect} from 'react-redux';
import {getOrders} from '../Api';
import Loader from '../../commons/components/Loader';
import OrderListItem from './OrderListItem';
import {orderStatus} from '../../../utils/values/Values';
import {clearOrders} from '../OrderActions';
import OrderListShimmer from './OrderListShimmer';

const OrderList = (props) => {
  const [endReachCallable, setEndReachCallable] = useState(true);
  const {userDetails} = props.homeReducer;
  const {pastOrders, activeOrders, totalCount} = props.orderReducer;

  useEffect(() => {
    getOrderList();
  }, []);

  const getOrderList = () => {
    props.clearOrders();
    getActiveOrders();
    getPastOrders();
  };

  const getActiveOrders = () => {
    let {
      ORDER_PLACED,
      ORDER_ACCEPTED,
      ORDER_DISPATCHED,
      ORDER_UPDATED,
      ORDER_PARTIALLY_ACCEPTED,
      ORDER_OUT_FOR_DELIVERY,
    } = orderStatus;

    let data = {
      start: -1,
      limit: -1,
      conditions: [
        {
          key: 'SEARCH_BY_USER_ID',
          value: userDetails.id,
          context: null,
        },
        {
          key: 'SEARCH_BY_STATUS_IN',
          value: [
            ORDER_PLACED,
            ORDER_ACCEPTED,
            ORDER_DISPATCHED,
            ORDER_UPDATED,
            ORDER_PARTIALLY_ACCEPTED,
            ORDER_OUT_FOR_DELIVERY,
          ],
          context: null,
        },
      ],
      sorts: [{key: 'SORT_BY_ID', value: false, context: null}],
    };

    if (props.storeId) {
      data.conditions = [
        ...data.conditions,
        {
          key: 'SEARCH_BY_STORE_ID',
          value: props.storeId,
          context: null,
        },
      ];
    }

    props.getOrders(data);
  };

  const getPastOrders = (start = 0) => {
    let {
      ORDER_DELIVERED,
      ORDER_CANCELLED,
      ORDER_REJECTED,
      ORDER_NOT_PLACED,
    } = orderStatus;

    let data = {
      start,
      limit: 10,
      conditions: [
        {
          key: 'SEARCH_BY_USER_ID',
          value: userDetails.id,
          context: null,
        },
        {
          key: 'SEARCH_BY_STATUS_IN',
          value: [
            ORDER_DELIVERED,
            ORDER_CANCELLED,
            ORDER_REJECTED,
            ORDER_NOT_PLACED,
          ],
          context: null,
        },
      ],
      sorts: [{key: 'SORT_BY_ID', value: false, context: null}],
    };

    if (props.storeId) {
      data.conditions = [
        ...data.conditions,
        {
          key: 'SEARCH_BY_STORE_ID',
          value: props.storeId,
          context: null,
        },
      ];
    }

    props.getOrders(data);
  };

  return (
    <FlatList
      data={pastOrders}
      renderItem={({item}) => <OrderListItem item={item} />}
      keyExtractor={(item, index) => `pastOrder${index}`}
      onMomentumScrollBegin={() => setEndReachCallable(false)}
      onEndReachedThreshold={0.1}
      onEndReached={() => {
        if (!endReachCallable && pastOrders.length < totalCount) {
          getPastOrders(pastOrders.length);
          setEndReachCallable(true);
        }
      }}
      ListHeaderComponent={
        pastOrders.length && (
          <FlatList
            data={activeOrders}
            renderItem={({item}) => (
              <OrderListItem item={item} refresh={getOrderList} />
            )}
            keyExtractor={(item, index) => `activeOrders${index}`}
            ListFooterComponent={
              pastOrders.length && (
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionName}>{Strings.pastOrders}</Text>
                </View>
              )
            }
            ListHeaderComponent={
              activeOrders.length && (
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionName}>{Strings.activeOrders}</Text>
                </View>
              )
            }
          />
        )
      }
      ListFooterComponent={() => {
        if (props.loading && pastOrders.length) {
          return (
            <View style={styles.listLoaderContainer}>
              <Loader show={true} />
            </View>
          );
        } else {
          return null;
        }
      }}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
      ListEmptyComponent={<OrderListShimmer count={4} />}
    />
  );
};
const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  homeReducer: state.homeReducer,
  orderReducer: state.orderReducer,
});

const mapDispatchToProps = {
  getOrders,
  clearOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
