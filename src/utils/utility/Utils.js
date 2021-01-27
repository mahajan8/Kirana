import {Actions} from 'react-native-router-flux';
import {Dimensions, Linking, Platform} from 'react-native';
import {Strings} from '../values/Strings';
import {AppConfig} from '../../config/AppConfig';
import {environment} from '../../config/EnvConfig';
import Urls from './Urls';
import {removeAuthToken} from './LocalStore';
import {logoutUser} from '../../modules/authentication/AuthActions';
import store from '../Store';
import {Colors} from '../values/Colors';
import {notificationType} from '../values/Values';
import {setSelectedOrderId} from '../../modules/orders/OrderActions';
import EStyleSheet from 'react-native-extended-stylesheet';
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
    url =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-SJgS0wvz4a8Y2QXVrZ5iDwFpTbK9ilTqg&usqp=CAU';
  }
  return url;
};

export const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
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

export const ripple = {
  color: Colors.black10,
  backgroundColor: true,
  radius: 200,
};

export const decodePolyline = (t, e) => {
  for (
    var n,
      o,
      u = 0,
      l = 0,
      r = 0,
      d = [],
      h = 0,
      i = 0,
      a = null,
      c = Math.pow(10, e || 5);
    u < t.length;

  ) {
    (a = null), (h = 0), (i = 0);
    do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
    do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (o = 1 & i ? ~(i >> 1) : i >> 1),
      (l += n),
      (r += o),
      d.push([l / c, r / c]);
  }
  return (d = d.map(function (t) {
    return {latitude: t[0], longitude: t[1]};
  }));
};

export const handleNotificationClick = (event) => {
  let {redirection_type, store_id, store_name, order_id, order_status} = event;
  let {orderDetails, orderRating, orderTracking} = notificationType;

  switch (redirection_type) {
    case orderDetails:
      dispatch(setSelectedOrderId(order_id));
      Actions.orderDetails();
      break;
    case orderRating:
      if (Actions.currentScene !== 'rating') {
        Actions.rating({order: {order_id, store_name}});
      }
      break;
    case orderTracking:
      dispatch(setSelectedOrderId(order_id));
      Actions.trackOrder();
      break;
  }
};

export const setDimensions = () => {
  let {height, width} = Dimensions.get('window');
  let [trueWidth, trueHeight] =
    width > height ? [height, width] : [width, height];

  EStyleSheet.build({
    $rem: trueWidth / 360,
    $vrem: trueHeight / 700,

    // Font Dimensions
    $fontExtraHugeHeader: '44rem',
    $fontExtraHugeSubheader: '42rem',
    $fontHugeHeader: '40rem',
    $fontXXHuge: '36rem',
    $fontXHuge: '32rem',
    $fontExtraHuge: '28rem',
    $fontHuge: '24rem',
    $fontExtraLarge: '22rem',
    $fontLarge: '20rem',
    $fontExtraNormal: '18rem',
    $fontNormal: '16rem',
    $fontSmall: '14rem',
    $fontTiny: '12rem',
    $fontSuperTiny: '10rem',
    $fontTinyExtreme: '8rem',

    // Spacing Dimensions
    $spacingTitan: '100rem',
    $spacingSuperColossal: '80rem',
    $spacingColossal: '76rem',
    $spacingExtraMassive: '72rem',
    $spacingMassive: '54rem',
    $spacingVeryHuge: '48rem',
    $spacingExtraHuge: '40rem',
    $spacingMediumHuge: '36rem',
    $spacingHuge: '32rem',
    $spacingLessHuge: '30rem',
    $spacingVeryLarge: '28rem',
    $spacingExtraLarge: '26rem',
    $spacingLarge: '24rem',
    $spacingSuperNormal: '22rem',
    $spacingExtraNormal: '20rem',
    $spacingNormalMedium: '18rem',
    $spacingNormal: '16rem',
    $spacingExtraMedium: '14rem',
    $spacingMedium: '12rem',
    $spacingSuperSmall: '10rem',
    $spacingSmall: '8rem',
    $spacingSmallExtreme: '6rem',
    $spacingTiny: '4rem',
    $spacingTinyExtreme: '2rem',
  });
};
