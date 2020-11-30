import React, {useState} from 'react';
import {Text, TouchableOpacity, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getTimeString} from '../../../utils/utility/Utils';
import {Fonts} from '../../../utils/values/Fonts';

const TimePick = (props) => {
  const {label, value, setTime, selected, setSelected, min} = props;

  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setSelected(true);
      setTime(selectedDate);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => setShow(true)}
      activeOpacity={1}
      style={[Styles.container, selected && {borderColor: Colors.themeGreen}]}>
      {selected ? <Text style={Styles.selectedLabel}>{label}</Text> : null}

      <Text style={[Styles.label, selected && Styles.selectedText]}>
        {selected ? getTimeString(value) : label}
      </Text>

      <Text style={[Styles.downArrow]}>^</Text>

      {show && (
        <DateTimePicker
          value={value}
          mode={'time'}
          is24Hour={false}
          display="default"
          onChange={onChange}
          onTouchCancel={() => console.log('cancel')}
          minimumDate={min}
        />
      )}
    </TouchableOpacity>
  );
};

const Styles = EStyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '35rem',
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
});

export default TimePick;
