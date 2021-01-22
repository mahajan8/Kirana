import React from 'react';
import {Text, View, Modal} from 'react-native';
import NoInternetImage from '../../../assets/images/no_internet.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from './Button';
import store from '../../../utils/Store';
import {setNoInternet} from '../../authentication/AuthActions';
import {styles} from '../styles/noInternetStyles';
import ModalContainer from './ModalContainer';

const NoInternet = (props) => {
  return (
    <ModalContainer visible={true} cancellable={false}>
      <View style={styles.container}>
        <NoInternetImage />
        <Text style={styles.noInternetTitle}>{Strings.noConnection}</Text>
        <Text style={styles.noInternetSub}>{Strings.noInternetSub}</Text>
        <Button
          label={Strings.refresh}
          Style={styles.buttonStyle}
          labelStyle={styles.buttonLabel}
          onPress={() => {
            if (props.retry) {
              props.retry();
            } else {
              store.dispatch(setNoInternet(false));
            }
          }}
        />
      </View>
    </ModalContainer>
  );
};

export default NoInternet;
