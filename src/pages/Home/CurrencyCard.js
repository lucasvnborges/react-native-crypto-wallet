import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

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
      <View style={styles.item}>
        <View style={{ backgroundColor: details.color, width: 24, height: 24 }}>
          <Text>
            {details.color[0]}
          </Text>
        </View>

        <View>
          <Text style={styles.title}>{details.color}</Text>
          <Text style={styles.title}>{details.currencyBalance}</Text>
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
  item: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 24,
    padding: 28,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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