import React from 'react';
import {Modal, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const ModalContainer = (props) => {
  let {visible, setVisible, containerStyle} = props;

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={true}
      animated
      animationType="none">
      <Pressable
        activeOpacity={1}
        style={[styles.container, containerStyle && containerStyle]}
        onPress={() => setVisible(false)}>
        {props.children}
      </Pressable>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

export default ModalContainer;
