import React from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ReferImage from '../../../assets/images/refer_image.svg';
import Whatsapp from '../../../assets/images/whatsapp.svg';
import Share from '../../../assets/images/share.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import {styles} from '../styles/referModalStyles';

const ReferModal = (props) => {
  let {visible, setVisible} = props;

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={true}
      animated
      animationType="none">
      <Pressable
        activeOpacity={1}
        style={styles.modalContainer}
        onPress={() => setVisible(false)}>
        <Pressable activeOpacity={1} style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <ReferImage
              width={EStyleSheet.value('248rem')}
              height={EStyleSheet.value('130rem')}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.referHeadline}>{Strings.referHeadline}</Text>
            <Text style={styles.referSub}>{Strings.referSub}</Text>
            <View style={styles.buttonsContainer}>
              <Button
                label={Strings.whatsapp}
                Style={styles.buttonStyle}
                labelStyle={styles.buttonLabel}
                Icon={
                  <Whatsapp
                    width={EStyleSheet.value('12rem')}
                    height={EStyleSheet.value('12rem')}
                  />
                }
              />
              <Button
                label={Strings.moreOptions}
                Style={styles.buttonStyle}
                labelStyle={styles.buttonLabel}
                bordered
                Icon={
                  <Share
                    width={EStyleSheet.value('12rem')}
                    height={EStyleSheet.value('12rem')}
                  />
                }
              />
            </View>
            <Text
              style={styles.gotReferal}
              onPress={() => {
                Actions.referal();
                setVisible(false);
              }}>
              {Strings.gotReferal}
            </Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ReferModal;
