import React from 'react';
import {View, Text} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import OrderList from '../../orders/components/OrderList';

const MyOrders = () => {
  return (
    <SafeArea>
      <OrderList />
    </SafeArea>
  );
};

export default MyOrders;
