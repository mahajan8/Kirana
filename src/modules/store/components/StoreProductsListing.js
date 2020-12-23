/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, memo} from 'react';
import {View, Text, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import ProductBox from './ProductBox';
import {commonStyles} from '../../commons/styles/commonStyles';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';
import Button from '../../commons/components/Button';

const List = (props) => {
  let {list, label, onMorePress, noShadow, noHeader, onPress, id} = props;
  const [horizontalList, setHorizontalList] = useState([]);

  useEffect(() => {
    setHorizontalList(
      list.length > 5 ? [...list.slice(0, 5), {viewAll: true}] : list,
    );
  }, []);
  const renderHeader = () =>
    !noHeader && (
      <View style={styles.listHeader}>
        <Text style={styles.listLabel}>{label}</Text>
        <Text style={styles.viewMore} onPress={onMorePress && onMorePress}>
          {Strings.view}{' '}
          {/* {list && (list.length > 5 ? list.length - 5 + ' ' : null)} */}
          {Strings.more}
        </Text>
      </View>
    );

  const renderProduct = (item, index) => (
    <ProductBox key={`product${item + index}`} onPress={onPress} item={item} />
  );

  return (
    <View>
      <View style={[styles.listContainer, !noShadow && commonStyles.shadow]}>
        {renderHeader()}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {horizontalList.map((item, index) => {
            if (item.viewAll) {
              return (
                <View style={styles.productContainer} key={`viewAll`}>
                  <Button
                    Style={styles.viewAllButton}
                    labelStyle={styles.viewAllLabel}
                    label={Strings.viewAll}
                    bordered
                    onPress={onMorePress && onMorePress}
                  />
                </View>
              );
            } else {
              return renderProduct(item, index);
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '16rem',
  },
  listLabel: {
    fontFamily: Fonts.medium,
    fontSize: '12rem',
    color: Colors.titleText,
    letterSpacing: '-0.17rem',
  },
  viewMore: {
    fontFamily: Fonts.medium,
    fontSize: '11rem',
    color: Colors.themeGreen,
  },
  listContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '15vrem',
    paddingLeft: '16rem',
    marginBottom: '8vrem',
  },
  productContainer: {
    marginTop: '12vrem',
    marginRight: '30rem',
    width: '110rem',
    height: '220vrem',
    backgroundColor: Colors.lightStatusBar,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllButton: {
    width: '79rem',
    height: '31vrem',
    borderRadius: '2rem',
    borderColor: Colors.themeGreen,
    backgroundColor: 'transparent',
  },
  viewAllLabel: {
    fontSize: '11rem',
  },
});
function arePropsEqual(prevProps, nextProps) {
  return prevProps.id === nextProps.id;
}
export default memo(List, arePropsEqual);
