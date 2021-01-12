import React from 'react';
import {Modal, Pressable} from 'react-native';
import Search from '../../onboarding/components/SearchLocation';
import {styles} from '../styles/searchLocationModalStyles';

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

export default SearchLocationModal;
