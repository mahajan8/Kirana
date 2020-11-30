import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import ReferModal from './ReferModal';

const Onboarding = () => {
  const [visible, setVisible] = useState(true);
  return (
    <SafeArea>
      <View>
        <Text></Text>
      </View>
      <ReferModal visible={visible} setVisible={setVisible} />
    </SafeArea>
  );
};

export default Onboarding;
