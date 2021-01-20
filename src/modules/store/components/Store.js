/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import SafeArea from '../../commons/components/SafeArea';
import {Strings} from '../../../utils/values/Strings';
import {Dimensions, View, Text, Pressable} from 'react-native';
import {commonStyles} from '../../commons/styles/commonStyles';
import {TabView} from 'react-native-tab-view';
import {styles} from '../styles/storeStyles';
import {connect} from 'react-redux';
import ShopInactive from '../../../assets/images/shop_inactive.svg';
import OrdersInactive from '../../../assets/images/orders_inactive.svg';
import ExploreInactive from '../../../assets/images/explore_inactive.svg';
import Explore from './Explore';
import StoreOrders from './StoreOrders';
import StoreCategories from './StoreCategories';
import {ripple} from '../../../utils/utility/Utils';
import { Colors } from '../../../utils/values/Colors';

// TODO: Add Icons for Explore
let routes = [
  {
    key: 'first',
    title: Strings.shop,
    Icon: ShopInactive,
  },
  {
    key: 'second',
    title: Strings.explore,
    Icon: ExploreInactive,
  },
  {
    key: 'third',
    title: Strings.orders,
    Icon: OrdersInactive,
  },
];
let initialLayout = {height: 0, width: Dimensions.get('window').width};

const Store = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <StoreCategories />;
      case 'second':
        return <Explore />;
      case 'third':
        return <StoreOrders resetTab={() => setTabIndex(0)} />;
    }
  };

  const renderTabBar = () => {
    return (
      <View style={[commonStyles.shadow, styles.tabRow]}>
        {routes.map((item, index) => {
          let {title, Icon} = item;
          let selected = tabIndex === index ? true : false;
          return (
            <Pressable
              android_ripple={ripple}
              key={index.toString()}
              onPress={() => onChangeTab(index)}
              style={styles.tabItemContainer}>
              <Icon fill={selected ? Colors.themeGreen : Colors.lightGray} />
              <Text style={[styles.label, selected && styles.selectedLabel]}>
                {title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  const onChangeTab = (index) => {
    setTabIndex(index);
  };
  return (
    <SafeArea>
      <TabView
        navigationState={{
          ...{routes},
          ...{index: tabIndex},
        }}
        swipeEnabled={false}
        renderTabBar={renderTabBar}
        tabBarPosition={'bottom'}
        renderScene={renderScene}
        onIndexChange={(index) => onChangeTab(index)}
        initialLayout={initialLayout}
        lazy
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  homeState: state.homeReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
