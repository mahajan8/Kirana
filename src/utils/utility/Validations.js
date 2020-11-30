export const Validation = {
  mail: 'mail',
  number: 'number',
  mobile: 'mobile',
  pincode: 'pincode',
  text: 'text',
  alphaNumeric: 'alphaNumeric',
  percentage: 'percentage',
};

export const valid = (item, type, disabled) => {
  if (item !== null) {
    if (item.trim() !== '') {
      switch (type) {
        case Validation.mail:
          return disabled ? !validateEmail(item) : validateEmail(item);
        case Validation.number:
          return disabled ? !validateNumber(item) : validateNumber(item);
        case Validation.mobile:
          return disabled ? !validateMobNumber(item) : validateMobNumber(item);
        case Validation.pincode:
          return disabled ? !validatePinCode(item) : validatePinCode(item);
        case Validation.text:
          return disabled ? !validateName(item) : validateName(item);
        case Validation.alphaNumeric:
          return disabled
            ? !validateAlphaNumeric(item)
            : validateAlphaNumeric(item);
        case Validation.percentage:
          return disabled
            ? !validatePercentage(item)
            : validatePercentage(item);
        default:
          return disabled ? !validateEscape(item) : validateEscape(item);
      }
    } else {
      if (disabled) {
        return true;
      }
    }
  } else {
    return disabled ? false : true;
  }
};

export const validateEscape = (text) => {
  const regex = /(<([^>]+)>)/gi;
  return !regex.test(text);
};

export const validateName = (value) => {
  let regex = /^([0-9a-zA-Z’‘’' ]+\s)*[0-9a-zA-Z’‘’' ]+$/; //let regex = /^[a-zA-Z ]+$/;
  return regex.test(value) && value !== null && validateEscape(value);
};

export const validateLegalName = (value) => {
  let regex = /^([a-zA-Z’‘’')\( ]+\s)*[a-zA-Z’‘’' ]+$/; //let regex = /^[a-zA-Z ]+$/;
  return regex.test(value) && value !== null && validateEscape(value);
};

export const validateAlphaNumeric = (value) => {
  let regex = /^[0-9a-zA-Z ]+$/;
  return regex.test(value) && value !== null && validateEscape(value);
};

export const validateMobNumber = (number) => {
  const regex = /^[1-9]{1}[0-9]{9}$/;
  return regex.test(number);
};

export const validatePinCode = (number) => {
  const regex = /^[1-9]{1}[0-9]{3,10}$/;
  return regex.test(number);
};

export const validateNumber = (number) => {
  const regex = /^[0-9]+$/;
  return regex.test(number);
};

export const validateSpecialChar = (value) => {
  var regex = /^[a-zA-Z0-9!@#\:,\^\&*\’‘’' )\(+=._-]+$/g;
  return (
    regex.test(value) &&
    value !== null &&
    validateEscape(value) &&
    !value.includes('&nbsp')
  );
};

export const validatePercentage = (number) => {
  const regex = /^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/;
  return regex.test(number);
};

export const validateEmail = (email) => {
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
};

export const validTemp = (item, type) => {
  if (item !== null) {
    if (item.trim() !== '') {
      switch (type) {
        case Validation.mail:
          return !validateEmail(item);
        case Validation.number:
          return !validateNumber(item);
        case Validation.mobile:
          return !validateNumber(item);
        case Validation.pincode:
          return !validatePinCode(item);
        case Validation.text:
          return !validateName(item);
        case Validation.alphaNumeric:
          return !validateAlphaNumeric(item);
        case Validation.percentage:
          return !validatePercentage(item);
        default:
          return !validateEscape(item);
      }
    }
  } else {
    return false;
  }
  return true;
};

export const validateBankAccount = (accNumber) => {
  const regex = /^\d{9,18}$/;
  return regex.test(accNumber);
};

export const validateIFSC = (ifsc) => {
  const regex = /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/;
  return regex.test(ifsc);
};

export const isAnyFieldEmpty = (fieldsArray) => {
  for (let i = 0; i < fieldsArray.length; i++) {
    if (fieldsArray[i] == null || fieldsArray[i] == '') {
      return true;
    }
  }
  return false;
};
