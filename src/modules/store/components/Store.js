/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import SafeArea from '../../commons/components/SafeArea';
import {Strings} from '../../../utils/values/Strings';
import {Dimensions, View, Text, Pressable} from 'react-native';
import {commonStyles} from '../../commons/styles/commonStyles';
import {TabView} from 'react-native-tab-view';
import {styles} from '../styles/storeStyles';
import {connect} from 'react-redux';
import StoreProducts from './StoreProducts';
import ShopInactive from '../../../assets/images/shop_inactive.svg';
import OrdersInactive from '../../../assets/images/orders_inactive.svg';
import ExploreActive from '../../../assets/images/explore_active.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import Explore from './Explore';
import StoreOrders from './StoreOrders';

// TODO: Add Icons for Tabs
let routes = [
  {key: 'first', title: Strings.shop, Icon: ShopInactive},
  {key: 'second', title: Strings.explore, Icon: ExploreActive},
  {key: 'third', title: Strings.orders, Icon: OrdersInactive},
];
let initialLayout = {height: 0, width: Dimensions.get('window').width};

const Store = (props) => {
  const [tabIndex, setTabIndex] = useState(0);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <StoreProducts />;
      case 'second':
        return <Explore />;
      case 'third':
        return <StoreOrders />;
    }
  };

  const renderTabBar = () => {
    return (
      <View style={[commonStyles.shadow, styles.tabRow]}>
        {routes.map((item, index) => {
          let {title, Icon} = item;
          return (
            <Pressable
              key={index.toString()}
              onPress={() => onChangeTab(index)}
              style={styles.tabItemContainer}>
              <Icon
                width={EStyleSheet.value('16rem')}
                height={EStyleSheet.value('16rem')}
              />
              <Text
                style={[
                  styles.label,
                  tabIndex === index && styles.selectedLabel,
                ]}>
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
      <View style={{flex: 1}}>
        <TabView
          navigationState={{
            ...{routes},
            ...{index: tabIndex},
          }}
          swipeEnabled={true}
          renderTabBar={renderTabBar}
          tabBarPosition={'bottom'}
          renderScene={renderScene}
          onIndexChange={(index) => onChangeTab(index)}
          initialLayout={initialLayout}
          lazy
        />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
