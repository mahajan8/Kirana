import React from 'react';
import {View, Text, Pressable} from 'react-native';
import ModalContainer from '../../commons/components/ModalContainer';
import {styles} from '../styles/viewOriginalModalStyles';
import Cross from '../../../assets/images/cross.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import OrderItem from './OrderItem';

const ViewOriginalModal = (props) => {
  let {visible, setVisible, originalItem} = props;

  return (
    <ModalContainer
      visible={visible}
      setVisible={setVisible}
      containerStyle={styles.modalContainer}>
      <View activeOpacity={1} style={styles.innerContainer}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{Strings.originalItem}</Text>

          <Pressable onPress={() => setVisible(false)}>
            <Cross
              width={EStyleSheet.value('14rem')}
              height={EStyleSheet.value('14rem')}
            />
          </Pressable>
        </View>

        <OrderItem item={originalItem} />
      </View>
    </ModalContainer>
  );
};

export default ViewOriginalModal;
