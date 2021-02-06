/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from '../styles/orderListStyles';
import {Strings} from '../../../utils/values/Strings';
import {connect} from 'react-redux';
import {getOrders} from '../Api';
import OrderListItem from './OrderListItem';
import {orderStatus} from '../../../utils/values/Values';
import {clearOrders, setActiveOrders, setPastOrders} from '../OrderActions';
import {
  setStoreActiveOrders,
  setStorePastOrders,
  clearStoreOrders,
} from '../../store/StoreActions';
import OrderListShimmer from './OrderListShimmer';
import CartEmpty from '../../../assets/images/empty_cart.svg';
import {Actions} from 'react-native-router-flux';
import Button from '../../commons/components/Button';
import LoaderError from '../../commons/components/LoaderError';

const OrderList = (props) => {
  const [endReachCallable, setEndReachCallable] = useState(true);
  const {userDetails, selectedStore} = props.homeReducer;
  const {pastOrders, activeOrders, totalCount} = props.orderReducer;
  const {
    storePastOrders,
    storeActiveOrders,
    storeTotalCount,
  } = props.storeReducer;
  const {storeOrders} = props;

  useEffect(() => {
    getOrderList();
    return () => {
      props.clearOrders();
      props.clearStoreOrders();
    };
  }, []);

  const getOrderList = () => {
    getActiveOrders();
    getPastOrders();
  };

  const getActiveOrders = () => {
    // Get Active Orders list
    let {
      ORDER_PLACED,
      ORDER_ACCEPTED,
      ORDER_DELIVERY_ASSIGNED,
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
            ORDER_DELIVERY_ASSIGNED,
            ORDER_UPDATED,
            ORDER_PARTIALLY_ACCEPTED,
            ORDER_OUT_FOR_DELIVERY,
          ],
          context: null,
        },
      ],
      sorts: [{key: 'SORT_BY_ID', value: false, context: null}],
    };

    if (storeOrders) {
      data.conditions = [
        ...data.conditions,
        {
          key: 'SEARCH_BY_STORE_ID',
          value: selectedStore.id,
          context: null,
        },
      ];
    }

    props.getOrders(data, (results, total) => {
      // Set Active Orders in Reducer
      if (storeOrders) {
        props.setStoreActiveOrders(results);
      } else {
        props.setActiveOrders(results);
      }
    });
  };

  const getPastOrders = (start = 0) => {
    // Get Past Orders list
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
            // ORDER_NOT_PLACED,
          ],
          context: null,
        },
      ],
      sorts: [{key: 'SORT_BY_ID', value: false, context: null}],
    };

    if (storeOrders) {
      data.conditions = [
        ...data.conditions,
        {
          key: 'SEARCH_BY_STORE_ID',
          value: selectedStore.id,
          context: null,
        },
      ];
    }

    props.getOrders(data, (results, total) => {
      // Set Past Orders in Reducer
      if (storeOrders) {
        props.setStorePastOrders(results, total);
      } else {
        props.setPastOrders(results, total);
      }
    });
  };

  const renderTitle = (label) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionName}>{label}</Text>
    </View>
  );

  const renderActiveList = () => (
    // Active Orders List Component
    <FlatList
      data={storeOrders ? storeActiveOrders : activeOrders}
      renderItem={({item}) => (
        <OrderListItem item={item} refresh={getOrderList} />
      )}
      keyExtractor={(item, index) => `activeOrders${index}`}
      ListFooterComponent={showPastHeader && renderTitle(Strings.pastOrders)}
      ListHeaderComponent={
        showActiveHeader && renderTitle(Strings.activeOrders)
      }
      ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
    />
  );

  const renderLoader = () => {
    let showLoader = storeOrders
      ? storePastOrders.length
        ? true
        : false
      : pastOrders.length
      ? true
      : false;

    return (
      <View style={styles.listLoaderContainer}>
        <LoaderError hideLoader={!showLoader} />
      </View>
    );
  };

  let showActiveHeader = storeOrders
    ? storeActiveOrders.length
      ? true
      : false
    : activeOrders.length
    ? true
    : false;

  let showPastHeader = storeOrders
    ? storePastOrders.length
      ? true
      : false
    : pastOrders.length
    ? true
    : false;

  return (
    <FlatList
      data={storeOrders ? storePastOrders : pastOrders}
      renderItem={({item}) => <OrderListItem item={item} past />}
      keyExtractor={(item, index) => `pastOrder${index}`}
      onMomentumScrollBegin={() => setEndReachCallable(false)}
      onEndReachedThreshold={0.1}
      onEndReached={() => {
        // Load more past orders if list end reached and more orders available
        if (
          !endReachCallable &&
          ((!storeOrders && pastOrders.length < totalCount) ||
            (storeOrders && storePastOrders.length < storeTotalCount))
        ) {
          setEndReachCallable(true);
          getPastOrders(
            storeOrders ? storePastOrders.length : pastOrders.length,
          );
        }
      }}
      ListHeaderComponent={renderActiveList()}
      ListFooterComponent={renderLoader()}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
      ListEmptyComponent={() => {
        let myOrders =
          Actions.currentScene === 'myOrders'
            ? true
            : storeOrders
            ? false
            : true;

        if (
          (storeOrders && !storeActiveOrders.length) ||
          (!storeOrders && !activeOrders.length)
        ) {
          return props.loading ? (
            <OrderListShimmer count={4} />
          ) : (
            <View style={styles.emptyListContainer}>
              <View style={styles.emptyListInnerContainer}>
                <CartEmpty />
                <Text style={styles.heading}>
                  {myOrders ? Strings.myOrdersEmpty : Strings.cartEmptyTitle}
                </Text>
                <Text style={styles.desc}>
                  {myOrders
                    ? Strings.myOrdersEmptySub
                    : Strings.addFromThisStore}
                </Text>
              </View>
              <Button
                label={myOrders ? Strings.exploreStores : Strings.addProducts}
                onPress={() => {
                  if (myOrders) {
                    Actions.popTo('_home');
                  } else {
                    props.resetTab();
                  }
                }}
              />
            </View>
          );
        } else {
          return null;
        }
      }}
    />
  );
};
const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  homeReducer: state.homeReducer,
  orderReducer: state.orderReducer,
  storeReducer: state.storeReducer,
});

const mapDispatchToProps = {
  getOrders,
  clearOrders,
  setActiveOrders,
  setPastOrders,
  setStoreActiveOrders,
  setStorePastOrders,
  clearStoreOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
