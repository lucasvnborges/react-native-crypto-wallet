import React, { PureComponent } from 'react';
import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Header extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: 'https://66.media.tumblr.com/edade13f43a8da4c675ca3e59c4d853b/tumblr_pn5jmut8xi1wwb8qz_1280.jpg'}}
          />
        </View>
        <View>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#FFF' }}>TOTAL BALANCE</Text>
        </View>
        <View style={styles.imageContainer}>
          <FontAwesome5 onPress={() => this.props.navigation.navigate('Notifications')} name="bell" size={18} color="#FFF" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  imageContainer: {
    padding: 20
  },

  image: {
    borderRadius: 32,
    width: 32,
    height: 32,
  }
});