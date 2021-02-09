/* eslint-disable eqeqeq */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import Back from '../../../assets/images/back-arrow.svg';
import {commonStyles} from '../styles/commonStyles';
import {styles} from '../styles/headerStyles';

// type =0 --> Auth Header with title and subtitle
// type =1 --> Row Header with title and back arrow

const Header = (props) => {
  const {
    title,
    subTitle,
    type = 0,
    noShadow,
    comp,
    containerStyle,
    onBack,
    headerRight,
    noBorder,
    titleComp,
  } = props;

  return (
    <View
      style={[
        !noShadow && styles.headerShadow,
        styles.container,
        type != 0 && styles.container2,
        containerStyle && containerStyle,
        type === 0 && !noBorder && styles.bottomBorder,
      ]}>
      <View style={styles.rowContainer}>
        <Pressable
          onPress={() => {
            if (onBack) {
              onBack();
            } else {
              Actions.pop();
            }
          }}
          hitSlop={commonStyles.hitSlop}>
          <Back
            width={EStyleSheet.value('$spacingNormalMedium')}
            height={EStyleSheet.value('$spacingExtraMedium')}
          />
        </Pressable>

        {type == 1 &&
          (titleComp ? (
            titleComp
          ) : (
            <Text style={styles.type1Title}>{title}</Text>
          ))}

        {headerRight && (
          <View style={styles.headerRightContainer}>{headerRight}</View>
        )}
      </View>

      {type == 0 ? (
        <View>
          {title && <Text style={styles.title}>{title}</Text>}
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}

          {/* <View style={styles.seperator} /> */}
          {comp && comp}
        </View>
      ) : null}
    </View>
  );
};

export default Header;
