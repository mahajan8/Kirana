import React, {useState} from 'react';
import {Text, View, Modal, Pressable, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import Cross from '../../../assets/images/cross.svg';
import Check from '../../../assets/images/green_check.svg';
import {styles} from '../styles/pickerStyles';

const Picker = (props) => {
  const {
    value,
    label,
    list,
    setValue,
    containerStyle,
    listKey,
    disabled,
  } = props;

  const [visible, setVisible] = useState(false);

  const header = () => <View style={{height: EStyleSheet.value('24vrem')}} />;

  let selected = value >= 0;

  return (
    <Pressable
      disabled={disabled}
      activeOpacity={1}
      style={[
        styles.container,
        selected && {borderColor: Colors.themeGreen},
        containerStyle && containerStyle,
      ]}
      onPress={() => setVisible(true)}>
      {selected ? <Text style={styles.selectedLabel}>{label}</Text> : null}

      <Text style={[styles.label, selected && styles.selectedText]}>
        {selected ? (listKey ? list[value][listKey] : list[value]) : label}
      </Text>

      <Text style={[styles.downArrow]}>^</Text>

      <Modal
        visible={visible}
        onRequestClose={() => setVisible(false)}
        transparent={true}
        animated
        animationType="none">
        <Pressable
          activeOpacity={1}
          style={styles.modalContainer}
          onPress={() => setVisible(false)}>
          <Pressable activeOpacity={1} style={styles.innerContainer}>
            <View style={styles.titleView}>
              <Text>{label}</Text>

              <Pressable onPress={() => setVisible(false)}>
                <Cross
                  width={EStyleSheet.value('14rem')}
                  height={EStyleSheet.value('14vrem')}
                />
              </Pressable>
            </View>

            <FlatList
              data={list}
              renderItem={({item, index}) => (
                <Pressable
                  style={styles.itemBox}
                  onPress={() => {
                    setValue(index);
                    setVisible(false);
                  }}>
                  <Text
                    style={[
                      styles.itemName,
                      value == index && {color: Colors.themeGreen},
                    ]}>
                    {listKey ? item[listKey] : item}
                  </Text>
                  {value == index && (
                    <Check
                      width={EStyleSheet.value('17rem')}
                      height={EStyleSheet.value('12rem')}
                    />
                  )}
                </Pressable>
              )}
              keyExtractor={(item, index) => `PickerItem${index}`}
              contentContainerStyle={styles.listStyle}
              ListHeaderComponent={header}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </Pressable>
  );
};

export default Picker;
