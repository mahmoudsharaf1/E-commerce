import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const StorageUtils = {
  get: (key: string) => {
    try {
      const value = storage.getString(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.log(`Error getting ${key} from storage:`, error);
      return null;
    }
  },

  set: (key: string, value: any) => {
    try {
      storage.set(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.log(`Error setting ${key} in storage:`, error);
      return false;
    }
  },

  delete: (key: string) => {
    try {
      storage.delete(key);
      return true;
    } catch (error) {
      console.log(`Error deleting ${key} from storage:`, error);
      return false;
    }
  },
};
