/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {connect} from 'react-redux';
import Header from '../../commons/components/Header';
import {styles} from '../styles/searchLocationStyles';
import Loader from '../../commons/components/Loader';
import {setLoading} from '../../authentication/AuthActions';
import Search from './SearchLocation';

const SearchLocation = (props) => {
  return (
    <SafeArea>
      <Header noShadow containerStyle={styles.headerContainer} noBorder />
      <Search setLocation={props.saveLocation ? props.saveLocation : false} />
      <Loader show={props.loading} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  location: state.homeReducer.location,
});

const mapDispatchToProps = {
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchLocation);
