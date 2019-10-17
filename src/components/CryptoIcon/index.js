import React, { PureComponent } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import icons from './icons';

export default class Loader extends PureComponent {
  render() {
    const { code } = this.props;
    const { url } = icons.find(i => i.name === code);

    return (
      <View style={styles.container}>
        {
          code ? (
            <Image
              style={{ height: 42, width: 42 }}
              source={url}
            />
          ) : (
            <View></View>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 34,
    width: 34,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
