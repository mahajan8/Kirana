import PropTypes from 'prop-types';
import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

const Loader = (props) => {
  const {show} = props;
  if (show) {
    return (
      <View style={[styles.loading]}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  } else {
    return null;
  }
};

const styles = EStyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
    elevation: 10,
  },
});

Loader.propTypes = {
  show: PropTypes.bool,
};

export default Loader;
