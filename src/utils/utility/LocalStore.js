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

export const removeAuthToken = async (token) => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (e) {
    console.log(e);
  }
};

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
  return null;
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};
