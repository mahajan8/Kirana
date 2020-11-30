/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import instance from '../../utils/AxiosInstance';
import {setLoading} from '../authentication/AuthActions';
import {AppConfig} from '../../config/AppConfig';
import {environment} from '../../config/EnvConfig';
import axios from 'axios';
import {Strings} from '../../utils/values/Strings';

export const uploadMedia = (pars, fnc) => {
  return (dispatch) => {
    instance
      .post(Urls.upload, pars)
      .then((res) => {
        dispatch(setLoading(false));

        const success = !res.data.error;
        if (success) {
          if (fnc) {
            fnc(res.data.data);
          }
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

export const getAddressFromLocation = (pars, callback, err) => {
  let params = {
    latlng: pars.lat + ',' + pars.lng,
    result_type: 'locality|route',
    key: AppConfig[environment].googlePlacesKey,
  };

  var data =
    '?' +
    Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');

  axios
    .get(Urls.googleGeocode + data)
    .then((res) => {
      let {results} = res.data;

      if (results.length) {
        let {formatted_address, geometry, address_components} = results[0];

        let nameIndex = address_components.findIndex(
          (item) =>
            item.types.includes('neighborhood') ||
            item.types.includes('route') ||
            item.types.includes('sublocality') ||
            item.types.includes('locality'),
        );

        let name =
          nameIndex != -1
            ? address_components[nameIndex].long_name
            : Strings.unknown;

        let location = {
          lat: pars.lat,
          lng: pars.lng,
          geometry,
          name,
          formatted_address,
        };
        callback(location);
      } else {
        err();
      }
    })
    .catch((error) => {
      console.log(error);
      err(error);
    });
};
