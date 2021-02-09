import React from 'react';
import {Text, View, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Camera from '../../../assets/images/camera.svg';
import Cross from '../../../assets/images/cross.svg';
import ImagePicker from 'react-native-image-picker';
import {commonStyles} from '../styles/commonStyles';
import ModalContainer from './ModalContainer';
import {styles} from '../styles/imagepickStyles';
import {ripple} from '../../../utils/utility/Utils';

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
          // console.log('User cancelled image picker');
        } else if (response.error) {
          // console.log('ImagePicker Error: ', response.error);
        } else {
          onSelectImage(response);
          setVisible(false);
        }
      },
    );
  };

  return (
    <ModalContainer
      visible={visible}
      setVisible={setVisible}
      containerStyle={styles.container}>
      <Pressable activeOpacity={1} style={styles.innerContainer}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{Strings.selectFrom} </Text>

          <Pressable
            onPress={() => setVisible(false)}
            hitSlop={commonStyles.hitSlop}>
            <Cross
              width={EStyleSheet.value('$spacingExtraMedium')}
              height={EStyleSheet.value('$spacingExtraMedium')}
            />
          </Pressable>
        </View>

        <Pressable
          android_ripple={ripple}
          style={styles.optionsView}
          onPress={() => openImagePicker(0)}>
          <Camera
            width={EStyleSheet.value('$spacingNormalMedium')}
            height={EStyleSheet.value('$spacingExtraMedium')}
          />
          <Text style={styles.optionsText}>{Strings.camera}</Text>
        </Pressable>

        <Pressable
          android_ripple={ripple}
          style={styles.optionsView}
          onPress={() => openImagePicker(1)}>
          <Camera
            width={EStyleSheet.value('$spacingNormalMedium')}
            height={EStyleSheet.value('$spacingExtraMedium')}
          />
          <Text style={styles.optionsText}>{Strings.gallery}</Text>
        </Pressable>
      </Pressable>
    </ModalContainer>
  );
};

export default ImagePick;
