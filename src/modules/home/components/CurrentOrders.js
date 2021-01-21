import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getKeyByValue} from '../../../utils/utility/Utils';
import {Strings} from '../../../utils/values/Strings';
import {orderStatusLabels} from '../../../utils/values/Values';
import Button from '../../commons/components/Button';
import {styles} from '../styles/currentOrdersStyle';

const CurrentOrders = (props) => {
  const renderTrackingCircle = () => (
    <View style={styles.trackingCircleContainer}>
      <View style={styles.line} />
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.dottedLine} />
    </View>
  );

  let {currentOrders} = props;

  let multiple = currentOrders.length > 1 ? true : false;

  return currentOrders.length ? (
    <View style={[styles.container]}>
      {renderTrackingCircle()}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          {multiple
            ? Strings.activeOrdersCount(currentOrders.length)
            : `${Strings.yourOrderIs}: ${getKeyByValue(orderStatusLabels, 20)}`}
        </Text>
        <Text style={styles.subTitle}>
          {multiple ? Strings.multipleStores : "The Baker's Dozen"}
        </Text>
      </View>
      <Button
        label={multiple ? Strings.viewOrders : Strings.trackOrder}
        Style={styles.buttonStyle}
        bordered
        labelStyle={styles.buttonLabel}
      />
    </View>
  ) : null;
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  currentOrders: state.homeReducer.currentOrders,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentOrders);
