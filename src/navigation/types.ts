import { IconTypes } from '@components';

export type ScreenOptionStack = {
  name: string;
  component: any;
  gestureEnabled?: boolean;
  header?: {
    title: string;
    backgroundColor?: string;
    tintColor?: string;
    button?: any;
    hasBorder?: boolean;
    headerTransparent?: boolean;
    headerBlurEffect?: boolean;
  };
  presentation?: 'modal';
};

export type ScreenOptionTab = {
  name: string;
  component: any;
  iconName: IconTypes;
  label?: string;
  parentScreen: string;
};
