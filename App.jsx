import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './src/routes';
import store from './src/redux/store/store';

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
