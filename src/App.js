import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Image style={{width: 113, height: 80}} source={require('./logo.png')} />
          <Text style={styles.appTitle}>Welcome to React️</Text>
        </View>
        <Text style={styles.appIntro}>
          To get started, edit src/App.js and save to reload.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  appHeader: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  appIntro: {
    flex: 2,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  }
})