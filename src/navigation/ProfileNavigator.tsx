import {createStackNavigator} from '@react-navigation/stack';


import {SCREENS} from './constants';
import {CreateStackNavigation} from './CreateNavigation';
import {ScreenOptionStack} from './types';
import { ProfileDashboardScreen } from '@/features/profile/screens';

export type ProfileStackParamList = {
  [SCREENS.PROFILE.DASHBOARD]: undefined;
};

export const ProfileNavigator = () => {
  const StackNavigation = createStackNavigator<ProfileStackParamList>();

  const screens: ScreenOptionStack[] = [
    {
      name: SCREENS.PROFILE.DASHBOARD,
      component: ProfileDashboardScreen,
    },
    
  ];

  return CreateStackNavigation(StackNavigation, screens);
};
