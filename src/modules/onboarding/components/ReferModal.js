import React from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import ReferImage from '../../../assets/images/refer_image.svg';
import Whatsapp from '../../../assets/images/whatsapp.svg';
import Share from '../../../assets/images/share.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import {Fonts} from '../../../utils/values/Fonts';

const ReferModal = (props) => {
  let {visible, setVisible} = props;

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={true}
      animated
      animationType="slide">
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

const styles = EStyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    overflow: 'hidden',
    width: '320rem',
    borderRadius: '21rem',
  },
  imageContainer: {
    height: '208vrem',
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
    paddingTop: '50vrem',
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  referHeadline: {
    color: Colors.titleText,
    fontFamily: Fonts.semiBold,
    fontSize: '16rem',
    textAlign: 'center',
    width: '196rem',
  },
  referSub: {
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
    fontSize: '12rem',
    lineHeight: '18rem',
    letterSpacing: '0.2rem',
    textAlign: 'center',
    width: '258rem',
    marginBottom: '25vrem',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '20rem',
    marginBottom: '25vrem',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonStyle: {
    width: '134rem',
    height: '36vrem',
  },
  buttonLabel: {
    fontSize: '10rem',
    letterSpacing: '0.07rem',
  },
  gotReferal: {
    fontSize: '13rem',
    lineHeight: '18rem',
    color: Colors.themeGreen,
    fontFamily: Fonts.medium,
    marginBottom: '25vrem',
  },
});

export default ReferModal;
