import React, {useState} from 'react';
import {Text, Pressable, Platform} from 'react-native';
import {Colors} from '../../../utils/values/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getTimeString} from '../../../utils/utility/Utils';
import {styles} from '../styles/timePickStyles';

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
    <Pressable
      onPress={() => setShow(true)}
      activeOpacity={1}
      style={[styles.container, selected && {borderColor: Colors.themeGreen}]}>
      {selected ? <Text style={styles.selectedLabel}>{label}</Text> : null}

      <Text style={[styles.label, selected && styles.selectedText]}>
        {selected ? getTimeString(value) : label}
      </Text>

      <Text style={[styles.downArrow]}>^</Text>

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
    </Pressable>
  );
};

export default TimePick;
