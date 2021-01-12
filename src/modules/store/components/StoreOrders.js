/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Pressable, View, Text, Dimensions} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {connect} from 'react-redux';
import {getOrders} from '../../orders/Api';
import OrderList from '../../orders/components/OrderList';
import {TabView} from 'react-native-tab-view';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/storeOrdersStyles';
import {ripple} from '../../../utils/utility/Utils';

let routes = [
  {
    key: 'first',
    title: Strings.thisStore,
  },
  {
    key: 'second',
    title: Strings.allOrders,
  },
];

let initialLayout = {height: 0, width: Dimensions.get('window').width};

const StoreOrders = (props) => {
  let {selectedStore} = props.homeReducer;
  const [tabIndex, setTabIndex] = useState(0);

  const renderTabBar = () => {
    return (
      <View style={styles.tabContainer}>
        <View style={styles.tabRow}>
          {routes.map((item, index) => {
            let {title} = item;
            let selected = tabIndex === index ? true : false;
            return (
              <Pressable
                android_ripple={ripple}
                key={index.toString()}
                onPress={() => setTabIndex(index)}
                style={[
                  styles.tabItemContainer,
                  selected && styles.selectedTab,
                ]}>
                <Text style={[styles.label, selected && styles.selectedLabel]}>
                  {title}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  };

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <OrderList storeOrders={true} resetTab={props.resetTab} />;
      case 'second':
        return <OrderList />;
    }
  };

  return (
    <SafeArea>
      {/* <OrderList storeId={selectedStore.id} /> */}
      <TabView
        navigationState={{
          ...{routes},
          ...{index: tabIndex},
        }}
        swipeEnabled={true}
        renderTabBar={renderTabBar}
        tabBarPosition={'top'}
        renderScene={renderScene}
        onIndexChange={(index) => setTabIndex(index)}
        initialLayout={initialLayout}
      />
    </SafeArea>
  );
};
const mapStateToProps = (state) => ({
  homeReducer: state.homeReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StoreOrders);
