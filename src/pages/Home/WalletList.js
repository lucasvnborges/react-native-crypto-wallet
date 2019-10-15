import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Card from './CurrencyCard';

const data = [
  {
    "id": "5da5d12915dadc5c3b2ce47d",
    "balance": "$1,641.97",
    "currencyBalance": 3.116166,
    "variation": "-$47.19",
    "picture": "http://placehold.it/32x32",
    "color": "brown"
  },
  {
    "id": "5da5d129c96bca5b37a027ac",
    "balance": "$3,034.83",
    "currencyBalance": 3.182498,
    "variation": "-$133.15",
    "picture": "http://placehold.it/32x32",
    "color": "green"
  },
  {
    "id": "5da5d1291305ebef75f66b10",
    "balance": "$3,209.73",
    "currencyBalance": 2.484626,
    "variation": "-$188.16",
    "picture": "http://placehold.it/32x32",
    "color": "brown"
  },
  {
    "id": "5da5d129f11adf8f4baa1017",
    "balance": "$899.66",
    "currencyBalance": 2.571038,
    "variation": "$57.68",
    "picture": "http://placehold.it/32x32",
    "color": "blue"
  },
  {
    "id": "5da5d129fe4b31fe469d3775",
    "balance": "$3,087.19",
    "currencyBalance": 2.095282,
    "variation": "-$172.20",
    "picture": "http://placehold.it/32x32",
    "color": "brown"
  },
  {
    "id": "5da5d1296b38c29109d4b2b1",
    "balance": "$3,954.46",
    "currencyBalance": 1.742294,
    "variation": "-$105.18",
    "picture": "http://placehold.it/32x32",
    "color": "green"
  },
  {
    "id": "5da5d129316e373e5aead401",
    "balance": "$2,734.59",
    "currencyBalance": 4.650944,
    "variation": "$52.27",
    "picture": "http://placehold.it/32x32",
    "color": "blue"
  }
];

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
            data={data}
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