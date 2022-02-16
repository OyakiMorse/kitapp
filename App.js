import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/screens/auth/Auth';
import Main from './src/screens/main/Main';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  const isAuth = false;

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style='auto' />

        {!isAuth ? <Auth /> : <Main />}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
