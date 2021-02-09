/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/filterStyles';
import Checked from '../../../assets/images/checked.svg';
import Unchecked from '../../../assets/images/unchecked.svg';
import RadioSelected from '../../../assets/images/filter_radio_selected.svg';
import RadioUnselected from '../../../assets/images/filter_radio_unselected.svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import {commonStyles} from '../../commons/styles/commonStyles';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {ripple} from '../../../utils/utility/Utils';

let filtersList = [
  {name: 'Brands', type: 0},
  {name: 'Category', type: 0},
  {name: 'Sort', type: 1},
];

let sortOptions = ['Price: Lowest First', 'Price: Highest First'];

const Filters = (props) => {
  let {filterBrands, filterCategories} = props.storeReducer;

  const [filterIndex, setFilterIndex] = useState(
    filterBrands.length < 2 ? (filterCategories.length < 2 ? 2 : 1) : 0,
  );
  // If options in a Filter Category < 2, then initialize the filterIndex to the next index.
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState(null);

  useEffect(() => {
    // Check and initialize filters already selected.
    let {brands, categories, price_sort} = props.filters;
    let selected_brands = brands.map((item) => {
      let i = filterBrands.findIndex((obj) => obj === item);
      return i;
    });
    let selected_categories = categories.map((item) => {
      let i = filterCategories.findIndex((obj) => obj.id === item);
      return i;
    });
    setSelectedBrands([...selected_brands]);
    setSelectedCategories([...selected_categories]);
    setSelectedSort(price_sort);
  }, []);

  const getChecked = (index) => {
    // Retrun Checked/Unchecked box for brand and categories and Radio button for sort
    if (filterIndex === 2) {
      return selectedSort === index ? <RadioSelected /> : <RadioUnselected />;
    } else {
      let selected = filterIndex === 0 ? selectedBrands : selectedCategories;
      return selected.includes(index) ? (
        <Checked
          width={EStyleSheet.value('$spacingNormal')}
          height={EStyleSheet.value('$spacingNormal')}
        />
      ) : (
        <Unchecked
          width={EStyleSheet.value('$spacingNormal')}
          height={EStyleSheet.value('$spacingNormal')}
        />
      );
    }
  };

  const toggleSelectFilter = (index) => {
    let arr = [];
    // Selecting filter type to make change
    switch (filterIndex) {
      case 0:
        arr = selectedBrands;
        break;
      case 1:
        arr = selectedCategories;
        break;
      case 2:
        arr = selectedSort;
        break;
    }

    // Toggle/Select another option
    if (filterIndex !== 2) {
      if (arr.includes(index)) {
        let selectedIndex = arr.findIndex((i) => i === index);
        arr.splice(selectedIndex, 1);
      } else {
        arr.push(index);
      }
    } else {
      arr = index;
    }

    //Save back to the selected filter type
    switch (filterIndex) {
      case 0:
        setSelectedBrands([...arr]);
        break;
      case 1:
        setSelectedCategories([...arr]);
        break;
      case 2:
        setSelectedSort(arr);
        break;
    }
  };

  const applyFilters = () => {
    let brands = selectedBrands.map((item) => filterBrands[item]);
    let categories = selectedCategories.map(
      (item) => filterCategories[item].id,
    );
    let priceSort = selectedSort;

    let filters = {
      brands: brands,
      categories: categories,
      price_sort: priceSort,
    };
    // Send selected filters to previous screen to make api call with said fiters.
    Actions.pop();
    props.saveFilters(filters);
  };

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
            onPress={() => {
              setSelectedBrands([]);
              setSelectedCategories([]);
              setSelectedSort(null);
            }}
          />
        }
      />
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          {filtersList.map((item, index) => {
            if (
              (index === 0 && filterBrands.length < 2) ||
              (index === 1 && filterCategories.length < 2)
            ) {
              // If selected filter options are less than 2, don't show filter
              return null;
            } else {
              return (
                <Pressable
                  key={`filter${index}`}
                  android_ripple={ripple}
                  onPress={() => setFilterIndex(index)}
                  style={styles.filterNameContainer}>
                  <Text
                    style={[
                      styles.filterName,
                      filterIndex === index && styles.selectedFilterName,
                    ]}>
                    {item.name}
                  </Text>
                </Pressable>
              );
            }
          })}
        </View>
        <View style={styles.listOuterContainer}>
          <FlatList
            data={
              filterIndex === 0
                ? filterBrands
                : filterIndex === 1
                ? filterCategories
                : sortOptions
            }
            renderItem={({item, index}) => (
              <Pressable
                android_ripple={ripple}
                style={styles.optionContainer}
                onPress={() => toggleSelectFilter(index)}>
                {getChecked(index)}
                <Text style={styles.optionsText}>
                  {filterIndex === 1 ? item.name : item}
                </Text>
              </Pressable>
            )}
            keyExtractor={(item, index) => `option${index}`}
            contentContainerStyle={styles.listContainer}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
        </View>
      </View>
      <View style={[styles.buttonContainer, commonStyles.shadow]}>
        <Button label={Strings.apply} onPress={applyFilters} />
      </View>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  storeReducer: state.storeReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
