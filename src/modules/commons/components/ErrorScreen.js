import React from 'react';
import {Text, View, Modal} from 'react-native';
import ErrorImage from '../../../assets/images/error_image.svg';
import {Strings} from '../../../utils/values/Strings';
import Button from './Button';
import {setApiError} from '../../authentication/AuthActions';
import store from '../../../utils/Store';
import Loader from './Loader';
import {connect} from 'react-redux';
import {styles} from '../styles/errorScreenStyles';
import ModalContainer from './ModalContainer';

const ErrorScreen = (props) => {
  return (
    <ModalContainer visible={true} cancellable={false}>
      <View style={styles.container}>
        <ErrorImage />
        <Text style={styles.noInternetTitle}>{Strings.oops}</Text>
        <Text style={styles.noInternetSub}>{Strings.somethingWentWrong}</Text>
        <Button
          label={Strings.refresh}
          Style={styles.buttonStyle}
          labelStyle={styles.buttonLabel}
          onPress={() => {
            if (props.retry) {
              props.retry();
            } else {
              store.dispatch(setApiError(false));
            }
          }}
        />

        <View style={styles.loaderContainer}>
          <Loader show={props.loading} />
        </View>
      </View>
    </ModalContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorScreen);
