import {Actions} from 'react-native-router-flux';
import instance from '../../utils/AxiosInstance';
import {Urls} from '../../utils/utility/Urls';
import {setAuthToken} from '../../utils/utility/LocalStore';
import {setToken} from './AuthActions';
import {getUserDetails} from '../home/Api';
import {getFormBody} from '../../utils/utility/Utils';

export const sendOtp = (pars) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.sendOtp, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        if (Actions.currentScene != 'otp') Actions.otp({number: pars.mobile});
        // alert(res.data.data.otp);
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const verifyOtp = (pars, error) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.verifyOtp, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        // Actions.otp({number: pars.mobile})
        const {is_new_user, api_token} = res.data.data;
        dispatch(setToken(api_token));
        setAuthToken(api_token);
        dispatch(getUserDetails(is_new_user));
      } else {
        if (error) {
          error();
        }
      }
    });
  };
};
