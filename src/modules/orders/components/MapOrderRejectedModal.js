import React from 'react';
import {View, Text, Pressable} from 'react-native';
import ModalContainer from '../../commons/components/ModalContainer';
import {styles} from '../styles/mapOrderRejectedStyles';
import Cross from '../../../assets/images/cross.svg';
import OrderRejected from '../../../assets/images/payment_failed.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import {commonStyles} from '../../commons/styles/commonStyles';

const MapOrderRejectedModal = (props) => {
  let {visible, setVisible} = props;

  return (
    <ModalContainer
      visible={visible}
      setVisible={setVisible}
      containerStyle={styles.modalContainer}>
      <Pressable style={styles.container} onPress={() => setVisible(false)}>
        <View style={styles.imageContainer}>
          <Pressable style={styles.crossIcon} hitSlop={commonStyles.hitSlop}>
            <Cross
              width={EStyleSheet.value('$spacingExtraMedium')}
              height={EStyleSheet.value('$spacingExtraMedium')}
            />
          </Pressable>
          <OrderRejected />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>{Strings.mapOrderRejectedHeading}</Text>
          <Text style={styles.desc}>{Strings.mapOrderRejectedSub}</Text>
          <Button
            Style={styles.buttonStyle}
            labelStyle={styles.buttonLabel}
            label={Strings.tryOtherStores}
            onPress={() => {
              Actions.alternativeStores();
              setVisible(false);
            }}
          />
        </View>
      </Pressable>
    </ModalContainer>
  );
};

export default MapOrderRejectedModal;
