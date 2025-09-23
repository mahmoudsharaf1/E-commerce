import React from 'react';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';

import {ThemeProvider} from './src/contexts/ThemeContext';
import Reducers from '@redux';
import MainRoutes from './src/navigation';
import { Toast } from '@components';

export const RootReducer = createStore(Reducers);

const App = () => {

  return (
    <ThemeProvider>
      <Provider store={RootReducer}>
            <MainRoutes />
            <Toast />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
