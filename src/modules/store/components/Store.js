/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import SafeArea from '../../commons/components/SafeArea';
import {Strings} from '../../../utils/values/Strings';
import {Dimensions, View, Text, Pressable} from 'react-native';
import {commonStyles} from '../../commons/styles/commonStyles';
import {TabView} from 'react-native-tab-view';
import {styles} from '../styles/storeStyles';
import {connect} from 'react-redux';
import ShopActive from '../../../assets/images/shop_active.svg';
import ShopInactive from '../../../assets/images/shop_inactive.svg';
import OrdersActive from '../../../assets/images/orders_active.svg';
import OrdersInactive from '../../../assets/images/orders_inactive.svg';
import ExploreActive from '../../../assets/images/explore_active.svg';
import ExploreInactive from '../../../assets/images/explore_inactive.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import Explore from './Explore';
import StoreOrders from './StoreOrders';
import StoreCategories from './StoreCategories';

// TODO: Add Icons for Explore
let routes = [
  {
    key: 'first',
    title: Strings.shop,
    ActiveIcon: ShopActive,
    InactiveIcon: ShopInactive,
  },
  {
    key: 'second',
    title: Strings.explore,
    ActiveIcon: ExploreActive,
    InactiveIcon: ExploreInactive,
  },
  {
    key: 'third',
    title: Strings.orders,
    ActiveIcon: OrdersActive,
    InactiveIcon: OrdersInactive,
  },
];
let initialLayout = {height: 0, width: Dimensions.get('window').width};

const Store = (props) => {
  const [tabIndex, setTabIndex] = useState(0);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <StoreCategories storeId={props.storeId} />;
      case 'second':
        return <Explore storeId={props.storeId} />;
      case 'third':
        return <StoreOrders />;
    }
  };

  const renderTabBar = () => {
    return (
      <View style={[commonStyles.shadow, styles.tabRow]}>
        {routes.map((item, index) => {
          let {title, ActiveIcon, InactiveIcon} = item;
          let selected = tabIndex === index ? true : false;
          return (
            <Pressable
              key={index.toString()}
              onPress={() => onChangeTab(index)}
              style={styles.tabItemContainer}>
              {selected ? <ActiveIcon /> : <InactiveIcon />}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
