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
    animationType = 'none',
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
      animationType={animationType}>
      <Pressable
        activeOpacity={1}
        style={[styles.modalContainer, containerStyle && containerStyle]}
        onPress={() => {
          if (cancellable) {
            setVisible(false);
          }
        }}>
        {children}
      </Pressable>
    </Modal>
  );
};

ModalContainer.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  containerStyle: PropTypes.object,
  cancellable: PropTypes.bool,
  animationType: PropTypes.oneOf(['none', 'fade', 'slide']),
};

export default ModalContainer;
