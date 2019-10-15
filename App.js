import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppContainer from './src/app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

