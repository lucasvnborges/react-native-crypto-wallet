import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Input extends PureComponent {

  handleChangeText = (text) => {
    this.props.onChangeValue(text);
  };

  render() {
    const { onChange, value, label, iconName, ...rest } = this.props;

    return (
      <View style={[styles.container, styles.primaryBox]}>
        <View style={{ height: 64, width: 54, alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesome5 name={iconName} size={18} color="#2c80ff" />
        </View>
        <View style={{ padding: 8 }}>
          <Text style={[ styles.label, styles.bold, styles.font12]}>
            { label }
          </Text>
          <TextInput
            {...rest}
            selectTextOnFocus
            keyboardType="numeric"
            returnKeyType="done"
            value={isNaN(value) ? '' : value.toString()}
            onChange={onChange}
            onChangeText={this.handleChangeText}
            underlineColorAndroid="transparent"
            selectionColor="rgba(0, 0, 0, .32)"
            style={[styles.text, styles.input]}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 8
  },

  primaryBox: {
    backgroundColor: '#f6f7fc',
    height: 64
  },

  text: {
    fontSize: 13,
    color: '#222',
  },

  input: {
    flex: 1,
    height: 32,
    padding: 0,
    marginVertical: 0,
  },

  label: {
    marginTop: 4
  },

  bold: {
    fontWeight: 'bold'
  },

  font12: {
    fontSize: 10
  }
});
