import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import CryptoIcon from '../../components/CryptoIcon';

export default class CurrencyCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderVariationIcon = (value) => {
    return (
      <FontAwesome5
        size={14}
        style={styles.iconDirection}
        name={`caret-${value > 0 ? 'up' : 'down'}`}
        color={value > 0 ? "#02cc97" : '#fd5d67'}
      />
    )
  }

  render() {
    const { details } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <CryptoIcon code={details.code} />
        </View>

        <View style={styles.info}>
          <Text style={styles.currName}>{details.name}</Text>
          <Text style={styles.currBalance}>{details.currencyBalance}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.title}>{details.variation}</Text>
          {
            this.renderVariationIcon(details.variation.replace(/[^\d.-]/g, ''))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 24,
    padding: 24,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },

  info: {
    flex: 1,
    paddingHorizontal: 16
  },

  currName: {
    color: '#444',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },

  currBalance: {
    color: '#888',
    fontSize: 12,
    textTransform: 'uppercase',
    marginVertical: 4
  },

  title: {
    color: '#333',
    fontSize: 12,
    fontWeight: 'bold',
  },

  iconDirection: {
    marginHorizontal: 4
  }
});
