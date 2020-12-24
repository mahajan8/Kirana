/* eslint-disable eqeqeq */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Actions} from 'react-native-router-flux';
import Back from '../../../assets/images/back-arrow.svg';
import Search from '../../../assets/images/search.svg';
import {Strings} from '../../../utils/values/Strings';
import {commonStyles} from '../styles/commonStyles';
import {Fonts} from '../../../utils/values/Fonts';

// type =0 --> Auth Header with title and subtitle
// type =1 --> Row Header with title and back arrow
// type =2 --> Type 1 header with Create Product and search button

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
            width={EStyleSheet.value('18rem')}
            height={EStyleSheet.value('14rem')}
          />
        </Pressable>

        {type == 1 && <Text style={styles.type1Title}>{title}</Text>}

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

const styles = EStyleSheet.create({
  container: {
    padding: '20rem',
    borderColor: Colors.seperatorColor,
    // borderBottomWidth: 1,
    marginBottom: '35rem',
    backgroundColor: Colors.white,
  },
  container2: {
    paddingVertical: '12rem',
    marginBottom: 0,
    paddingHorizontal: '16rem',
  },
  title: {
    color: Colors.titleText,
    fontSize: '18rem',
    fontFamily: Fonts.medium,
    marginTop: '12vrem',
  },
  subTitle: {
    color: Colors.subTitleText,
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    fontFamily: Fonts.regular,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: '12vrem',
  },
  type1Title: {
    color: Colors.titleText,
    fontSize: '16rem',
    fontFamily: Fonts.medium,
    marginLeft: '16rem',
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerShadow: {
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  bottomBorder: {
    borderBottomWidth: '1rem',
    borderBottomColor: Colors.seperatorColor,
  },
});

export default Header;
