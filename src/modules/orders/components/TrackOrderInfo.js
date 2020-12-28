import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import {styles} from '../styles/trackOrderInfoStyles';
import DownArrow from '../../../assets/images/down_arrow.svg';
import GreenCheck from '../../../assets/images/green_circle_tick.svg';
import EStyleSheet from 'react-native-extended-stylesheet';

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
  const [collapsed, setCollapsed] = useState(false);

  const renderTrackingCircle = () => (
    <View style={styles.trackingCircleContainer}>
      <View style={styles.line} />
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.dottedLine} />
    </View>
  );

  const showCollapsedState = () => (
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
      <Pressable style={styles.arrowIcon} onPress={() => setCollapsed(false)}>
        <DownArrow />
      </Pressable>
    </View>
  );

  const showExpandedState = () => {
    let trackingArray = trackingList.slice(0, 5);
    return (
      <View style={styles.expandedContainer}>
        {trackingArray.map((item, index) => {
          if (index > 4) {
            return null;
          } else {
            let current = trackStatus === index ? true : false;
            return (
              <View style={[styles.expandedStatusContainer]}>
                <View style={styles.trackingCircleContainer}>
                  {current ? (
                    <View style={styles.outerCircle}>
                      <View style={styles.innerCircle} />
                      <View style={styles.transparentCurrentCircle} />
                    </View>
                  ) : index < trackStatus ? (
                    <GreenCheck
                      width={EStyleSheet.value('14rem')}
                      height={EStyleSheet.value('14rem')}
                    />
                  ) : (
                    <View style={styles.upcomingStatusCircle} />
                  )}
                  {index !== trackingArray.length - 1 && (
                    <View style={current ? styles.dottedLine : styles.line} />
                  )}
                </View>
                <View>
                  <Text
                    style={
                      current
                        ? styles.expandedCurrentStatus
                        : styles.expandedStatus
                    }>
                    {trackingList[index].title}
                  </Text>
                  {current && (
                    <Text style={styles.expandedCurrentSub}>
                      {trackingList[index].subTitle}
                    </Text>
                  )}
                </View>
              </View>
            );
          }
        })}
        <Pressable
          style={styles.expandedArrowIcon}
          onPress={() => setCollapsed(true)}>
          <DownArrow />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {collapsed ? showCollapsedState() : showExpandedState()}
      <View style={[styles.rowContainer, styles.orderInfoContainer]}>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.itemCountText}>3 items</Text>
            <View style={styles.dot} />
            <Text style={styles.price}>{Strings.currency} 610</Text>
          </View>

          {/* TODO: Add Right arrow image if needed */}
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
