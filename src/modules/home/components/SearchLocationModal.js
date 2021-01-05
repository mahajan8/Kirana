/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Modal, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import Loader from '../../commons/components/Loader';
import Search from '../../onboarding/components/SearchLocation';

const SearchLocationModal = (props) => {
  let {visible, setVisible, setLocation, cancellable} = props;

  const onBack = () => {
    if (cancellable) {
      setVisible(false);
    }
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onBack}
      transparent={true}
      animated
      animationType="none">
      <Pressable style={styles.container} onPress={onBack}>
        <Pressable style={styles.innerContainer}>
          <Search
            modal
            onSelect={(location) => {
              setLocation(location);
              setVisible(false);
            }}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: '15rem',
    borderTopRightRadius: '15rem',
    paddingTop: '14vrem',
    width: '100%',
    height: '80%',
  },
});

export default SearchLocationModal;
