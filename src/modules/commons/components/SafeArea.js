import React, {Component, Fragment} from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {Colors} from '../../../utils/values/Colors';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class SafeArea extends Component {
  static defaultProps = {
    statusBarColor: Colors.white,
    statusBarStyle: 'dark-content',
    bottomBarColor: Colors.white,
    statusBarHidden: false,
  };

  render() {
    let {
      statusBarColor,
      bottomBarColor,
      statusBarStyle,
      statusBarHidden,
    } = this.props;
    return (
      <Fragment>
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle={statusBarStyle}
          hidden={statusBarHidden}
        />
        <SafeAreaView
          style={[
            styles.safeAreaTop,
            {
              backgroundColor: statusBarColor,
            },
          ]}
        />
        <SafeAreaView
          style={[
            styles.safeAreaBottom,
            {
              backgroundColor: bottomBarColor,
            },
          ]}>
          <View style={styles.container}>{this.props.children}</View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  safeAreaTop: {
    flex: 0,
    backgroundColor: Colors.white,
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
