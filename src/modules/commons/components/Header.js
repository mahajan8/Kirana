/* eslint-disable eqeqeq */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Actions} from 'react-native-router-flux';
import Back from '../../../assets/images/back-arrow.svg';
import Search from '../../../assets/images/search.svg';
import {Strings} from '../../../utils/values/Strings';
import {commonStyles} from '../styles/commonStyles';

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
  } = props;

  return (
    <View
      style={[
        styles.container,
        type != 0 && styles.container2,
        !noShadow && commonStyles.shadow,
        containerStyle && containerStyle,
      ]}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
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
        </TouchableOpacity>

        {type == 1 && <Text style={styles.type1Title}>{title}</Text>}

        {headerRight && (
          <View style={styles.headerRightContainer}>{headerRight}</View>
        )}
      </View>

      {type == 0 ? (
        <View>
          <Text style={styles.title}>{title}</Text>
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
    backgroundColor: '#FFF',
  },
  container2: {
    paddingVertical: '12rem',
    marginBottom: 0,
    paddingHorizontal: '16rem',
  },
  title: {
    color: Colors.titleText,
    fontSize: '18rem',
    fontWeight: '500',
    marginTop: '12vrem',
  },
  subTitle: {
    color: Colors.subTitleText,
    fontSize: '12rem',
    letterSpacing: '0.2rem',
    fontWeight: '100',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: '12vrem',
  },
  type1Title: {
    color: Colors.titleText,
    fontSize: '16rem',
    fontWeight: '500',
    marginLeft: '16rem',
  },
  headerRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
