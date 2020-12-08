import React from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/filterStyles';

let filters = [
  {
    name: 'Category',
    filters: ['Groceries', 'Dairy & Bakery', 'Cheese', 'Chocolates'],
    type: 0,
  },
  {
    name: 'Brand',
    filters: ['Amul', 'Mother Dairy', 'Cadbury', 'Govardhan'],
    type: 0,
  },
  {
    name: 'Sort',
    filters: ['Price: Lowest First', 'Price: Lowest First'],
    type: 1,
  },
];

const Filters = () => {
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
      <Text></Text>
    </SafeArea>
  );
};

export default Filters;
