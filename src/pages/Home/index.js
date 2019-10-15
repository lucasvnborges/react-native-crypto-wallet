import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './Header';
import CurrentBalance from './CurrentBalance';
import WalletList from './WalletList';

export default class Home extends PureComponent {
    static navigationOptions = {
      header: null
    }

    render() {
      return (
        <View style={styles.container}>
          <Header navigation={this.props.navigation} />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f6eff',
  }
});