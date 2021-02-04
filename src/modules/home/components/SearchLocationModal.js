import React from 'react';
import {Pressable} from 'react-native';
import ModalContainer from '../../commons/components/ModalContainer';
import Search from '../../onboarding/components/SearchLocation';
import {styles} from '../styles/searchLocationModalStyles';

const SearchLocationModal = (props) => {
  let {visible, setVisible, setLocation, cancellable} = props;

  return (
    <ModalContainer
      visible={visible}
      setVisible={setVisible}
      containerStyle={styles.container}
      cancellable={cancellable}
      animationType={'fade'}>
      {/* animation type passed from hore, types are fade,slide and none  */}
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
