import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/filterStyles';
import Checked from '../../../assets/images/checked.svg';
import Unchecked from '../../../assets/images/unchecked.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import { commonStyles } from '../../commons/styles/commonStyles';

let filters = [
  {
    name: 'Category',
    options: ['Groceries', 'Dairy & Bakery', 'Cheese', 'Chocolates'],
    type: 0,
  },
  {
    name: 'Brand',
    options: ['Amul', 'Mother Dairy', 'Cadbury', 'Govardhan'],
    type: 0,
  },
  {
    name: 'Sort',
    options: ['Price: Lowest First', 'Price: Lowest First'],
    type: 1,
  },
];

const Filters = () => {
  const [filterIndex, setFilterIndex] = useState(0);

  return (
    <SafeArea>
      <Header
        title={Strings.filter}
        type={1}
        headerRight={
          <Button
            label={Strings.clearAll}
            Style={styles.clearAllButton}
            labelStyle={styles.clearAllLabel}
            bordered
          />
        }
      />
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          {filters.map((item, index) => (
            <TouchableOpacity
              key={`filter${index}`}
              onPress={() => setFilterIndex(index)}
              style={styles.filterNameContainer}>
              <Text
                style={[
                  styles.filterName,
                  filterIndex === index && styles.selectedFilterName,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={filters[filterIndex].options}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.optionContainer}>
                <Unchecked
                  width={EStyleSheet.value('16rem')}
                  height={EStyleSheet.value('16rem')}
                />
                <Text style={styles.optionsText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => `option${index}`}
            contentContainerStyle={styles.listContainer}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
        </View>
      </View>
      <View style={[styles.buttonContainer, commonStyles.shadow]}>
        <Button
            label={Strings.apply}
            
        />
      </View>
    </SafeArea>
  );
};

export default Filters;
