import React from 'react';
import {Text, Modal, Pressable, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';

const AlertModal = (props) => {
  const {
    visible,
    setVisible,
    heading,
    desc,
    label1,
    label2,
    button1Press,
    button2Press,
  } = props;

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={true}
      animated
      animationType="none">
      <Pressable
        style={styles.modalContainer}
        onPress={() => setVisible(false)}>
        <Pressable style={styles.innerContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.desc}>{desc}</Text>
          <View style={[styles.buttonsContainer, label2 && styles.twoButtons]}>
            <Button
              label={label1}
              Style={styles.button}
              labelStyle={styles.buttonLabel}
              onPress={button1Press}
            />

            {label2 && (
              <Button
                label={label2}
                Style={styles.button}
                labelStyle={styles.buttonLabel}
                onPress={button2Press}
                bordered
              />
            )}
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
    paddingHorizontal: '20rem',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    borderRadius: '15rem',
    overflow: 'hidden',
    paddingHorizontal: '20rem',
    paddingVertical: '25vrem',
  },
  heading: {
    color: Colors.darkGreen,
    letterSpacing: '0.2rem',
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
  },
  desc: {
    color: Colors.subTitleText,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    marginTop: '10rem',
    marginBottom: '20rem',
  },
  button: {
    width: '122rem',
    height: '36vrem',
    borderRadius: '6rem',
  },
  buttonLabel: {
    fontSize: '10rem',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  twoButtons: {
    justifyContent: 'space-around',
  },
});

export default AlertModal;
