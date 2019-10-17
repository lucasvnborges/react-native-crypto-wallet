import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class CurrentBalance extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { currency, balance, variationBalance, variationPercentage } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={[styles.text, styles.small, styles.marginRight]}>{currency}</Text>
          <Text style={styles.text}>{balance}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome5 style={styles.marginRight} name="caret-up" size={14} color="#02cc97" />
          <Text style={[styles.text, styles.small]}>{variationBalance}</Text>
          <Text style={[styles.text, styles.small, styles.marginLeft]}>({variationPercentage}) today</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  row: {
    flexDirection: 'row'
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },

  small: {
    fontSize: 11,
  },

  marginLeft: {
    marginLeft: 4,
  },

  marginRight: {
    marginRight: 4,
  }
});
