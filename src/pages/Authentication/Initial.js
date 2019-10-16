import React, { PureComponent } from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';

import Button from '../../components/Button';

export default class InitialScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}></View>

        <View style={styles.buttonsWrapper}>
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            textContent="LOGIN"
            primary={true}
            size="large"
          />
          <Button
            onPress={() => this.props.navigation.navigate('Signup')}
            bottomless={true}
            textContent="REGISTER"
            size="large"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f6eff',
    paddingTop: StatusBar.currentHeight,
  },

  buttonsWrapper: {
    flex: 1,
    marginHorizontal: 32,
  }
});
