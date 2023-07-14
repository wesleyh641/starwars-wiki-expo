import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React  from 'react';
import {Logo, Text}from '../../components';

export const SplashScreen =() => {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text>StarWars - Wiki</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
