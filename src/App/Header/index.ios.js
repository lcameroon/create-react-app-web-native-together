import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.appHeader}>
        <Image
          style={{ width: 113, height: 80 }}
          source={require('./logo.png')}
        />
        <Text style={styles.appTitle}>Welcome to iOS React️</Text>
      </View>
    );
  }
}
