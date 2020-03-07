import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WaterLevelScreen from "./Screens/WaterLevelScreen"
import { Provider } from 'react-redux'

import { configureStore } from "./app/store/configurstore"
import ModalManager from './app/modals/ModalManager';


const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <WaterLevelScreen />
      </View>
      <ModalManager />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53BFEF',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
