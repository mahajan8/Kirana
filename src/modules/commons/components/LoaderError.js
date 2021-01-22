import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import ErrorScreen from './ErrorScreen';
import NoInternet from './NoInternet';
import EStyleSheet from 'react-native-extended-stylesheet';
import Loader from './Loader';
import {Colors} from '../../../utils/values/Colors';

const LoaderError = (props) => {
  let {loading, apiError, noInternet} = props.authReducer;
  if (loading || apiError || noInternet) {
    return (
      <View style={styles.container}>
        {apiError && <ErrorScreen retry={props.retry} />}
        {noInternet && <NoInternet retry={props.retry} />}
        {loading && !props.hideLoader && <Loader show={true} />}
      </View>
    );
  } else {
    return null;
  }
};

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoaderError);
