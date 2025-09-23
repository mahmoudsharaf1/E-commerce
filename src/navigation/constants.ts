export const NAVIGATORS = {
  DASHBOARD: 'DashboardNavigator',
  PRODUCT: 'ProductNavigator',
  PROFILE: 'ProfileNavigator',
  CART: 'CartNavigator',

} as const;

export const SCREENS = {
  PRODUCT: {
    VIEW: 'ProductView',
    LIST: 'ProductList'
  },
  CART: {
    DASHBOARD: 'CartDashboard',
  },
  PROFILE: {
    DASHBOARD: 'ProfileDashboard',
  },
} as const;
