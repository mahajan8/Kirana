import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/accountSetupStyles';
import HeadLineIcon from '../../../assets/images/account_setup_image.svg';
import Input from '../../commons/components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import BottomButton from '../../commons/components/BottomButton';
import {commonStyles} from '../../commons/styles/commonStyles';
import {updateUserDetails} from '../Api';
import {connect} from 'react-redux';
import LoaderError from '../../commons/components/LoaderError';

const AccountSetup = (props) => {
  let {first_name} = props.userDetails;

  const [fullName, setFullName] = useState(first_name ? first_name : '');

  const saveDetails = () => {
    let pars = {
      name: fullName,
    };
    props.updateUserDetails(pars);
  };

  return (
    <SafeArea>
      <Header title={Strings.accountSetup} type={1} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        style={commonStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.rowContainer, styles.infoContainer]}>
          <Text style={styles.headline}>
            {Strings.accountSetupNameHeadline}
          </Text>
          <HeadLineIcon />
        </View>
        <Input
          label={Strings.fullName}
          value={fullName}
          onChange={setFullName}
        />
      </KeyboardAwareScrollView>
      <BottomButton
        label={Strings.save}
        onPress={saveDetails}
        disabled={!fullName}
      />
      <LoaderError retry={saveDetails} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  userDetails: state.homeReducer.userDetails,
});

const mapDispatchToProps = {
  updateUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetup);
