import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Strings} from '../../../utils/values/Strings';
import Camera from '../../../assets/images/camera.svg';
import Cross from '../../../assets/images/cross.svg';
import ImagePicker from 'react-native-image-picker';
import {commonStyles} from '../styles/commonStyles';

const ImagePick = (props) => {
  const {visible, setVisible, onSelectImage} = props;

  const openImagePicker = (type) => {
    const options = {
      title: Strings.addProfilePhoto,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      includeBase64: false,
    };

    ImagePicker[type ? 'launchImageLibrary' : 'launchCamera'](
      options,
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          onSelectImage(response);
          setVisible(false);
        }
      },
    );
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={true}
      animated
      animationType="slide">
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => setVisible(false)}>
        <TouchableOpacity activeOpacity={1} style={styles.innerContainer}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{Strings.selectFrom} </Text>

            <TouchableOpacity
              onPress={() => setVisible(false)}
              hitSlop={commonStyles.hitSlop}>
              <Cross
                width={EStyleSheet.value('14rem')}
                height={EStyleSheet.value('14vrem')}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.optionsView}
            onPress={() => openImagePicker(0)}>
            <Camera
              width={EStyleSheet.value('17rem')}
              height={EStyleSheet.value('13vrem')}
            />
            <Text style={styles.optionsText}>{Strings.camera}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionsView}
            onPress={() => openImagePicker(1)}>
            <Camera
              width={EStyleSheet.value('17rem')}
              height={EStyleSheet.value('13vrem')}
            />
            <Text style={styles.optionsText}>{Strings.gallery}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingBottom: '22vrem',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: '5rem',
    paddingHorizontal: '20rem',
    paddingTop: '16vrem',
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20vrem',
  },
  titleText: {
    color: Colors.darkGreen,
    lineHeight: '24rem',
    fontSize: '14rem',
    fontWeight: '500',
  },
  optionsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '30rem',
  },
  optionsText: {
    color: Colors.darkGray,
    fontSize: '12rem',
    marginLeft: '12rem',
    fontWeight: '500',
  },
});

export default ImagePick;
