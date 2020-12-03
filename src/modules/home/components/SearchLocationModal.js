/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Modal} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import Loader from '../../commons/components/Loader';
import Search from '../../onboarding/components/Search';

const SearchLocationModal = (props) => {
  let {visible, setVisible} = props;

  return (
    <Modal
      visible={visible}
      //   onRequestClose={() => console.log('back')}
      transparent={true}
      animated
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Search modal onSelect={() => setVisible(false)} />
        </View>
      </View>
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
