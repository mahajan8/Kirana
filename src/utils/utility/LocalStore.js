import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
  return null;
};

export const setAuthToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) {
    console.log(e);
  }
};

export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (e) {
    console.log(e);
  }
};
export const getLastOrderedAddress = async () => {
  try {
    const value = await AsyncStorage.getItem('last_address_id');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
  return null;
};

export const setLastOrderedAddress = async (addressId) => {
  try {
    await AsyncStorage.setItem('last_address_id', addressId);
  } catch (e) {
    console.log(e);
  }
};

export const removeLastOrderedAddress = async () => {
  try {
    await AsyncStorage.removeItem('last_address_id');
  } catch (e) {
    console.log(e);
  }
};
