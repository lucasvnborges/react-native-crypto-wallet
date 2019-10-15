import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './Header';
import CurrentBalance from './CurrentBalance';
import WalletList from './WalletList';

export default function Home() {
    return (
      <View style={styles.container}>
        <Header />
        <CurrentBalance
          currency="USD"
          balance="26421.03"
          variationBalance="$241"
          variationPercentage="1.3%"
        />
        <WalletList />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f6eff',
    flex: 1,
  }
});