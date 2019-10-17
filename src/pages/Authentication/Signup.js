import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default class SignupScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />

        <View style={styles.alignCenter}>
          <Text style={[styles.bold, styles.font24]}>Get started</Text>
          <Text>Let's create your account</Text>
        </View>

        <View style={{ flex: 1, padding: 32 }}>
          <Input
            label="NAME"
            placeholder="full name"
            iconName="user"
          />
          <Input
            label="EMAIL"
            placeholder="your email"
            iconName="envelope"
          />
          <Input
            label="PASSWORD"
            placeholder="*****"
            iconName="key"
          />
          <Button
            textContent="REGISTER"
            primary={true}
            style={{ marginTop: 16 }}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  font24: {
    fontSize: 24
  },

  bold: {
    fontWeight: 'bold'
  },

  alignCenter: {
    alignItems: 'center'
  }
});
