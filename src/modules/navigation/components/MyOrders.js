import React from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import OrderList from '../../orders/components/OrderList';

const MyOrders = () => {
  return (
    <SafeArea>
      <Header title={Strings.myOrders} type={1} />
      <OrderList />
    </SafeArea>
  );
};

export default MyOrders;
