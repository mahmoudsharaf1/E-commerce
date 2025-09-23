import DeviceInfo from 'react-native-device-info';

export const isTablet = () => {
  return DeviceInfo.getDeviceType() === 'Tablet';
};

export const withNotch = () => {
  return DeviceInfo.hasNotch();
};
