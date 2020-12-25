import React from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {commonStyles} from '../../commons/styles/commonStyles';
import {styles} from '../styles/trackOrderInfoStyles';
import DownArrow from '../../../assets/images/down_arrow.svg';

let trackingList = [
  {title: Strings.orderPlaced, subTitle: '12 Sept 2020, 2:00 PM '},
  {title: Strings.orderAccepted, subTitle: Strings.orderAcceptedSub},
  {title: Strings.partnedOnWay, subTitle: Strings.onTheWaySub},
  {title: Strings.orderPicked, subTitle: Strings.orderPickedSub},
  {title: Strings.orderDelivered, subTitle: '12 Sept 2020, 2:00 PM '},
  {title: Strings.orderRejected, subTitle: '12 Sept 2020, 2:00 PM '},
];

const TrackOrderInfo = (props) => {
  let {trackStatus} = props;

  const renderTrackingCircle = () => (
    <View style={styles.trackingCircleContainer}>
      <View style={styles.line} />
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.dottedLine} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.rowContainer, styles.trackingInfoContainer]}>
        {renderTrackingCircle()}
        <View style={styles.trackingStatus}>
          <Text style={styles.trackingStatusLabel}>
            {trackingList[trackStatus].title}
          </Text>
          <Text style={styles.trackingStatusSub}>
            {trackingList[trackStatus].subTitle}
          </Text>
        </View>
        <DownArrow style={styles.arrowIcon} />
      </View>

      <View style={[styles.rowContainer, styles.orderInfoContainer]}>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.itemCountText}>3 items</Text>
            <View style={styles.dot} />
            <Text style={styles.price}>{Strings.currency} 610</Text>
          </View>

          <Text style={styles.orderDetails}>
            {Strings.orderDetails} {'>'}
          </Text>
        </View>

        <View>
          <Text style={styles.paymentStatus}>Paid Sucessfully</Text>
          {/* TODO: Add Check Image */}
        </View>
      </View>
    </View>
  );
};

export default TrackOrderInfo;
