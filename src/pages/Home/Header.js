import React, { PureComponent } from 'react';
import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import TouchableItem from '../../components/TouchableItem';

export default class Header extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableItem
          borderless={true}
          style={styles.wrapper}
        >
          <Image
            style={styles.wrapper}
            source={{uri: 'https://66.media.tumblr.com/edade13f43a8da4c675ca3e59c4d853b/tumblr_pn5jmut8xi1wwb8qz_1280.jpg'}}
          />
        </TouchableItem>

        <View>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#FFF' }}>TOTAL BALANCE</Text>
        </View>

        <TouchableItem
          borderless={true}
          style={styles.wrapper}
          // onPress={() => this.props.navigation.navigate('Notifications')}
        >
          <FontAwesome5 name="bell" size={18} color="#FFF" />
        </TouchableItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    padding: 16,
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  wrapper: {
    borderRadius: 32,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
