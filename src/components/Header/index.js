import React, { PureComponent } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import TouchableItem from '../TouchableItem';

export default class Header extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableItem
          borderless={true}
          style={styles.wrapper}
          onPress={() => this.props.navigation.goBack()}
        >
          <FontAwesome5 name="angle-left" size={18} color="#333" />
        </TouchableItem>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  wrapper: {
    height: 34,
    width: 34,
    margin: 24,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
