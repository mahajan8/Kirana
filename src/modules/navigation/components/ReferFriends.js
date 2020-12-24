import React from 'react';
import {View, Text, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {styles} from '../styles/referFriendsStyles';
import ReferImage from '../../../assets/images/refer_image.svg';
import Whatsapp from '../../../assets/images/whatsapp.svg';
import Share from '../../../assets/images/share.svg';
import Back from '../../../assets/images/back-arrow.svg';
import SafeArea from '../../commons/components/SafeArea';

const ReferFriends = () => {
  return (
    <SafeArea>
      <View style={styles.imageContainer}>
        <ReferImage
          width={EStyleSheet.value('286rem')}
          height={EStyleSheet.value('176rem')}
        />
        <Pressable style={styles.backButton} onPress={Actions.pop}>
          <Back
            width={EStyleSheet.value('16rem')}
            height={EStyleSheet.value('14rem')}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={styles.referHeadline}>{Strings.referScreenHeadline}</Text>
        <Text style={styles.referSub}>{Strings.referScreenSub}</Text>

        <View style={styles.bottomContainer}>
          <View style={styles.buttonsContainer}>
            <Button
              label={Strings.whatsapp}
              Style={styles.buttonStyle}
              labelStyle={styles.buttonLabel}
              Icon={
                <Whatsapp
                  width={EStyleSheet.value('16rem')}
                  height={EStyleSheet.value('16rem')}
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
                  width={EStyleSheet.value('16rem')}
                  height={EStyleSheet.value('16rem')}
                />
              }
            />
          </View>
          <Text style={styles.seeInvites} onPress={() => Actions.invites()}>
            {Strings.seeInvites}
          </Text>
        </View>
      </View>
    </SafeArea>
  );
};

export default ReferFriends;
