import PropTypes from 'prop-types';
import React from 'react';
import {Modal, Pressable} from 'react-native';
import {styles} from '../styles/modalContainerStyles';

const ModalContainer = (props) => {
  const {
    visible,
    setVisible,
    children,
    containerStyle,
    cancellable = true,
  } = props;

  return (
    <Modal
      visible={visible}
      onRequestClose={() => {
        if (cancellable) {
          setVisible(false);
        }
      }}
      transparent={true}
      animated
      animationType="none">
      <Pressable
        activeOpacity={1}
        style={[styles.modalContainer, containerStyle && containerStyle]}
        onPress={() => {
          if (cancellable) {
            setVisible(false);
          }
        }}>
        <Pressable>{children}</Pressable>
      </Pressable>
    </Modal>
  );
};

ModalContainer.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  containerStyle: PropTypes.object,
  cancellable: PropTypes.bool,
};

export default ModalContainer;
