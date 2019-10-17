import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Home extends PureComponent {
    static navigationOptions = {
      header: null
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>Notifications</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});