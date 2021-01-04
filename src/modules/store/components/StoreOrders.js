/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {connect} from 'react-redux';
import {getOrders} from '../../orders/Api';
import OrderList from '../../orders/components/OrderList';

const StoreOrders = (props) => {
  let {selectedStore} = props.homeReducer;
  return (
    <SafeArea>
      <OrderList storeId={selectedStore.id} />
    </SafeArea>
  );
};
const mapStateToProps = (state) => ({
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StoreOrders);
