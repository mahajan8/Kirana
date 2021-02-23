import React from 'react';
import {View, Dimensions, Image, Pressable} from 'react-native';
import {getMediaUrl} from '../../../utils/utility/Utils';
import {styles} from '../styles/productImageStyles';
import ImageZoom from 'react-native-image-pan-zoom';
import Back from '../../../assets/images/back-arrow.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import SafeArea from '../../commons/components/SafeArea';
import {commonStyles} from '../../commons/styles/commonStyles';
import {Actions} from 'react-native-router-flux';

const ProductImage = (props) => {
  return (
    <SafeArea>
      <Pressable
        style={styles.backIcon}
        hitSlop={commonStyles.hitSlop}
        onPress={Actions.pop}>
        <Back
          width={EStyleSheet.value('$spacingNormalMedium')}
          height={EStyleSheet.value('$spacingExtraMedium')}
        />
      </Pressable>

      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={250}
        imageHeight={250}>
        <Image
          style={styles.productImage}
          source={{uri: getMediaUrl(props.image)}}
        />
      </ImageZoom>
    </SafeArea>
  );
};

export default ProductImage;
