import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import Header from '../../commons/components/Header';
import {styles} from '../styles/languageStyle';
import Radio from '../../../assets/images/radio_selected.svg';
import {Colors} from '../../../utils/values/Colors';

const Language = () => {
  const [selected, setSelected] = useState(undefined);

  const isSelected = (option) => {
    if (selected == option) {
      return (
        <Radio
          height={EStyleSheet.value('20vrem')}
          width={EStyleSheet.value('20rem')}
        />
      );
    } else {
      return <View style={styles.unselectedRadio} />;
    }
  };

  return (
    <SafeArea statusBarColor={Colors.lightGreen}>
      <View style={styles.container}>
        <View>
          <Header title={Strings.chooseLanguage} />

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              selected == 0 && styles.selectedButton,
            ]}
            onPress={() => setSelected(0)}>
            <Text
              style={[
                styles.languageText,
                selected == 0 && styles.selectedText,
              ]}>
              {Strings.hinglish}
              <Text style={styles.languageDesc}>{Strings.hinglishDesc}</Text>
            </Text>

            {isSelected(0)}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              selected == 1 && styles.selectedButton,
            ]}
            onPress={() => setSelected(1)}>
            <Text
              style={[
                styles.languageText,
                selected == 1 && styles.selectedText,
              ]}>
              {Strings.english}
            </Text>

            {isSelected(1)}
          </TouchableOpacity>
        </View>

        <Button
          label={Strings.next}
          onPress={() => Actions.login()}
          disabled={!(selected >= 0)}
        />
      </View>
    </SafeArea>
  );
};

export default Language;
