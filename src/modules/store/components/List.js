/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {Strings} from '../../../utils/values/Strings';
import ProductBox from './ProductBox';
import {commonStyles} from '../../commons/styles/commonStyles';
import {Colors} from '../../../utils/values/Colors';

const List = (props) => {
  let {vertical, list, label, onMorePress, noShadow, noHeader, onPress} = props;
  const [horizontalList, setHorizontalList] = useState([]);

  useEffect(() => {
    if (!vertical) {
      setHorizontalList(list.length > 5 ? list.slice(5) : list);
    }
  }, []);

  const renderHeader = () =>
    !noHeader && (
      <View style={styles.listHeader}>
        <Text style={styles.listLabel}>{label}</Text>
        <Text style={styles.viewMore} onPress={onMorePress && onMorePress}>
          {Strings.view}{' '}
          {list && (list.length > 5 ? list.length - 5 + ' ' : null)}
          {Strings.more}
        </Text>
      </View>
    );

  const renderProduct = (item) => (
    <ProductBox key={`product${item}`} vertical={vertical} onPress={onPress} />
  );

  return (
    <View>
      {vertical ? (
        <FlatList
          data={list}
          renderItem={({item}) => renderProduct(item)}
          keyExtractor={(item, index) => `product${index}`}
          numColumns={2}
          contentContainerStyle={[
            styles.listContainer,
            !noShadow && commonStyles.shadow,
          ]}
          ListHeaderComponent={renderHeader()}
        />
      ) : (
        <View style={[styles.listContainer, !noShadow && commonStyles.shadow]}>
          {renderHeader()}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {horizontalList.map((item) => renderProduct(item))}
          </ScrollView>
        </View>
      )}
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
    fontWeight: '500',
    fontSize: '12rem',
    color: Colors.titleText,
    letterSpacing: '-0.17rem',
  },
  viewMore: {
    fontWeight: '500',
    fontSize: '11rem',
    color: Colors.themeGreen,
  },
  listContainer: {
    backgroundColor: Colors.white,
    paddingVertical: '15vrem',
    paddingLeft: '16rem',
    marginBottom: '8vrem',
  },
});

export default List;