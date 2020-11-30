import React, {useState} from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import Header from '../../commons/components/Header';
import {styles} from '../styles/referalStyles';
import ReferImage from '../../../assets/images/referal_image.svg';
import Tick from '../../../assets/images/green_circle_tick.svg';
import Input from '../../commons/components/Input';
import {commonStyles} from '../../commons/styles/commonStyles';
import Whatsapp from '../../../assets/images/whatsapp.svg';
import Share from '../../../assets/images/share.svg';

const Referal = (props) => {
  const [referal, setReferal] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <SafeArea>
      <Header title={Strings.referal} type={1} />
      <View style={[styles.headlineContainer, !success && styles.rowContainer]}>
        <View>
          <Text style={styles.headlineTitle}>
            {success ? Strings.referSuccessTitle : Strings.getFreeDelivery}
          </Text>
          <Text style={styles.headlineSub}>
            {success ? Strings.referSuccessSub : Strings.enterReferal}
          </Text>
        </View>
        {success ? (
          <View style={styles.buttonsContainer}>
            <Button
              label={Strings.whatsapp}
              Style={styles.buttonStyle}
              labelStyle={styles.buttonLabel}
              bordered
              Icon={
                <Whatsapp
                  width={EStyleSheet.value('12rem')}
                  height={EStyleSheet.value('12rem')}
                />
              }
            />
            <Button
              label={Strings.moreOptions}
              Style={styles.buttonStyle}
              labelStyle={styles.buttonLabel}
              bordered
              Icon={
                <Share
                  width={EStyleSheet.value('12rem')}
                  height={EStyleSheet.value('12rem')}
                />
              }
            />
          </View>
        ) : (
          <ReferImage
            width={EStyleSheet.value('57rem')}
            height={EStyleSheet.value('50rem')}
          />
        )}
      </View>
      <Input
        label={Strings.referal}
        value={referal}
        onChange={setReferal}
        type={'number'}
        comp={
          success && (
            <Tick
              style={styles.greenTick}
              width={EStyleSheet.value('18rem')}
              height={EStyleSheet.value('18rem')}
            />
          )
        }
      />
      <View style={commonStyles.buttonBottomContainer}>
        <Button
          label={Strings.done}
          disabled={!referal}
          onPress={() => setSuccess(true)}
        />
      </View>
    </SafeArea>
  );
};

export default Referal;
