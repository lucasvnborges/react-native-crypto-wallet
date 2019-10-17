import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { wallets } from '../../data';

import Card from './CurrencyCard';

export default class WalletList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, styles.borderRadius]}>
        <View style={[styles.titleWrapper, styles.borderRadius]}>
          <Text style={styles.title}>Crypto Wallet</Text>
          <FontAwesome5 name="chevron-up" size={18} color="#555" />
        </View>
        <View style={{ flex: 3 }}>
          <FlatList
            data={wallets}
            renderItem={({ item }) => <Card details={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F5F5F5',
  },

  titleWrapper: {
    height: 64,
    padding: 24,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },

  borderRadius: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
