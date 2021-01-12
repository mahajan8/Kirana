import React from 'react';
import {Modal, Pressable} from 'react-native';
import ModalContainer from '../../commons/components/ModalContainer';
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
    <ModalContainer
      visible={visible}
      setVisible={setVisible}
      containerStyle={styles.container}
      cancellable={cancellable}>
      <Pressable style={styles.innerContainer}>
        <Search
          modal
          onSelect={(location) => {
            setLocation(location);
            setVisible(false);
          }}
        />
      </Pressable>
    </ModalContainer>
  );
};

export default SearchLocationModal;
