import React from 'react';
import {Text, Modal, Pressable, View} from 'react-native';
import Button from '../../commons/components/Button';
import {styles} from '../styles/alertModalStyles';

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
    invert,
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
              bordered={invert}
            />

            {label2 && (
              <Button
                label={label2}
                Style={styles.button}
                labelStyle={styles.buttonLabel}
                onPress={button2Press}
                bordered={!invert}
              />
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default AlertModal;
