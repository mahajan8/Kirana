import React, {useState} from 'react';
import {Text, View, Modal, Pressable, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import Cross from '../../../assets/images/cross.svg';
import Check from '../../../assets/images/green_check.svg';
import {Fonts} from '../../../utils/values/Fonts';

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
        animationType="slide">
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

const styles = EStyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: '15rem',
    borderTopRightRadius: '15rem',
    maxHeight: '560vrem',
    overflow: 'hidden',
  },
  container: {
    alignSelf: 'center',
    marginTop: '35rem',
    width: '90%',
    height: '54rem',
    borderWidth: '1.2rem',
    borderRadius: '5rem',
    borderColor: Colors.borderGray,
    paddingHorizontal: '16rem',
    paddingVertical: '15rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: '15rem',
    lineHeight: '20rem',
    color: Colors.grayText,
  },
  downArrow: {
    fontSize: '10rem',
    color: Colors.grayText,
    transform: [{scaleX: 2}, {rotate: '180deg'}],
    textAlignVertical: 'center',
  },
  selectedText: {
    color: Colors.titleText,
    fontFamily: Fonts.medium,
  },
  selectedLabel: {
    position: 'absolute',
    fontSize: '13rem',
    marginLeft: '14rem',
    backgroundColor: '#FFF',
    paddingHorizontal: '2rem',
    lineHeight: '16rem',
    top: '-10rem',
    color: Colors.themeGreen,
  },
  titleView: {
    backgroundColor: Colors.lightGreen,
    paddingVertical: '14vrem',
    paddingHorizontal: '20rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '16rem',
    lineHeight: '24rem',
    fontFamily: Fonts.medium,
    color: Colors.darkGreen,
  },
  listStyle: {
    width: '90%',
    alignSelf: 'center',
  },
  itemName: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.subTitleText,
    letterSpacing: '0.1rem',
  },
  itemBox: {
    paddingBottom: '30rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Picker;
