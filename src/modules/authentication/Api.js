import {Actions} from 'react-native-router-flux';
import instance from '../../utils/AxiosInstance';
import {Urls} from '../../utils/utility/Urls';
import {setAuthToken} from '../../utils/utility/LocalStore';
import {setLoading, setToken} from './AuthActions';

export const sendOtp = (pars) => {
  return (dispatch) => {
    var formBody = Object.keys(pars)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(pars[key]),
      )
      .join('&');

    instance
      .post(Urls.sendOtp, formBody)
      .then((res) => {
        dispatch(setLoading(false));

        const success = !res.data.error;
        if (success) {
          if (Actions.currentScene != 'otp') Actions.otp({number: pars.mobile});
          alert(res.data.data.otp);
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoading(false));
      });
  };
};

export const verifyOtp = (pars) => {
  return (dispatch) => {
    var formBody = Object.keys(pars)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(pars[key]),
      )
      .join('&');

    instance
      .post(Urls.verifyOtp, formBody)
      .then((res) => {
        dispatch(setLoading(false));

        const success = !res.data.error;
        if (success) {
          // Actions.otp({number: pars.mobile})
          let token = res.data.data.api_token;
          dispatch(setToken(token));
          setAuthToken(token);
          Actions.reset('searchLocation');
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoading(false));
      });
  };
};
