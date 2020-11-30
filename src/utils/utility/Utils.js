import {Actions} from 'react-native-router-flux';
import {Linking, Platform} from 'react-native';
import {Strings} from '../values/Strings';
import {AppConfig} from '../../config/AppConfig';
import {environment} from '../../config/EnvConfig';
import Urls from './Urls';
import {removeAuthToken} from './LocalStore';
import {logoutUser} from '../../modules/authentication/AuthActions';
import store from '../Store';
const {dispatch} = store;

export const clipText = (text, limit) => {
  if (text.length >= limit) {
    text = text.substring(0, limit - 2).concat('...');
  }
  return text;
};

export const handleOnBackPress = () => {
  if (Actions.state.index === 0) {
    return false;
  }
  Actions.pop();
  return true;
};

export const getFormBody = (data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue =
      typeof data[property] === 'object'
        ? encodeURIComponent(JSON.stringify(data[property]))
        : encodeURIComponent(data[property]);

    if (data[property] !== null) {
      formBody.push(encodedKey + '=' + encodedValue);
    }
  }
  formBody = formBody.join('&');
  //console.log('FormBody', formBody);
  return formBody;
};

export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const getFormData = (uri, name, imageType, type, module, subModule) => {
  let formdata = new FormData();
  formdata.append('file', {
    uri: uri,
    name: name,
    type: 'image/png',
  });
  formdata.append('type', type);
  formdata.append('module', module);
  formdata.append('sub_module', subModule);
  return formdata;
};

export const formatDate = (date) => {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  return day + '/' + month + '/' + year;
};

export const contactViaEmail = () => {
  Linking.openURL(
    `mailto:${Strings.contactMail}.com?subject=${Strings.contactMailSubject}&body=${Strings.contactMailBody}`,
  );
};

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export const getMediaUrl = (path) => {
  let url;
  if (path) {
    url = AppConfig[environment].storageBaseUrl.concat(path);
  } else {
    url = 'https://img.icons8.com/officel/2x/user.png';
  }
  return url;
};

export const getTopReactions = (reactions_count) => {
  let reactions = {...reactions_count};
  let sortable = [];

  delete reactions.created_on;
  delete reactions.total_count;
  delete reactions.top_reactions;

  for (let key in reactions) {
    if (reactions.hasOwnProperty(key)) {
      if (reactions[key] > 0) {
        sortable.push([key, reactions[key]]);
      }
    }
  }
  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });

  let sortArray = Object.values(sortable);
  reactions = [];
  for (let i = sortArray.length; i > 0; i--) {
    reactions.push(sortArray[i - 1][0]);
  }
  //console.log('getTopReactions', reactions);
  return reactions.slice(0, 3);
};

export const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getPollResults = (options, poll_results) => {
  let total_vote = poll_results.total_vote;
  let poll_result = deepClone(poll_results);
  let results = [];
  delete poll_result.total_vote;
  delete poll_result.created_on;
  delete poll_result.results;
  for (let item of options) {
    results.push(
      poll_result[item]
        ? `${Number(((100 * poll_result[item]) / total_vote).toFixed(0))}%`
        : '0%',
    );
  }
  return results;
};

export const getAttachmentPublicUrlPath = (module, sub_module, attachment) => {
  const media_base_url =
    sub_module === 'user'
      ? AppConfig[environment].storageBaseUrl
      : AppConfig[environment].mediaBaseUrl;
  const bucket = 'b' + parseInt(attachment.id / 1000 + 1);
  const attachment_name = attachment.name.replace(/ /g, '-');
  if (attachment.localUri) {
    return attachment.localUri;
  } else if (attachment.error) {
    return AppConfig[environment].storageBaseUrl + attachment.path;
  } else {
    return `${media_base_url}${module}/${sub_module}/${bucket}/${attachment.code}/${attachment_name}.m3u8`;
  }
};

export const getImagePublicUrlPath = (module, sub_module, attachment, size) => {
  const media_base_url =
    sub_module === 'user'
      ? AppConfig[environment].storageBaseUrl
      : AppConfig[environment].mediaBaseUrl;
  const bucket = 'b' + parseInt(attachment.id / 1000 + 1);
  //const attachment_name = attachment.name.replace(/ /g, '-');
  if (attachment.localUri) {
    if (size === 's' || size === 'l') {
      return attachment.localUri;
    } else {
      return attachment.thumbnailPath;
    }
  } else if (attachment.error) {
    if (size === 'thumb') {
      return 'https://theboxband.com/wp-content/themes/jamsession/images/textures/tex8.jpg';
    } else {
      return AppConfig[environment].storageBaseUrl + attachment.path;
    }
  } else {
    let attachment_name =
      size === 'thumb' ? '00001.png' : attachment.name.replace(/ /g, '-');
    return `${media_base_url}${module}/${sub_module}/${bucket}/${attachment.code}/${size}-${attachment_name}`;
  }
};

export const getPostBucketImage = (attachment, size) => {
  return getImagePublicUrlPath('feed', 'post', attachment, size);
};

export const getPostBucketAttachment = (attachment) => {
  return getAttachmentPublicUrlPath('feed', 'post', attachment);
};

export const getPostActionBucketImage = (attachment, size) => {
  let url = getImagePublicUrlPath('feed', 'post-action', attachment, size);
  return url;
};

export const getPostActionBucketAttachment = (attachment) => {
  return getAttachmentPublicUrlPath('feed', 'post-action', attachment);
};

export const clipInBetween = (desc, keyword) => {
  let limit = 50;
  let continuation = '...';
  let index = desc.toLowerCase().indexOf(keyword.toLowerCase());

  let firstIndex = index === -1 ? 0 : index - limit;
  let lastIndex = index === -1 ? firstIndex + 120 : index + limit;

  let result = desc.substring(firstIndex, lastIndex);
  if (firstIndex > 0) {
    result = continuation.concat(result);
  }
  if (desc.length > 100) {
    result = result.concat(continuation);
  }
  return result;
};

export const withHttp = (url) => {
  return !/^https?:\/\//i.test(url) ? `http://${url}` : url;
};

export const getAppLink = () => {
  if (Platform.OS === 'android') {
    return Urls.playStoreLink;
  } else {
    return Urls.appStoreLink;
  }
};

export const getTimeString = (date, timeString) => {
  let hours = '';
  let minutes = '';
  if (date) {
    hours = date.getHours();
    minutes = date.getMinutes();
  } else {
    let arr = timeString.split(':');
    hours = arr[0];
    minutes = arr[1];
  }
  hours = Number(hours);
  minutes = Number(minutes);
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

export const getDateObject = (timeString) => {
  let arr = timeString.split(':');
  let date = new Date();

  date.setHours(arr[0], arr[1], arr[2]);

  return date;
};

export const logout = () => {
  dispatch(logoutUser());
  removeAuthToken();
  Actions.reset('introduction');
};
