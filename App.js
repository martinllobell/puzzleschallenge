import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carrusel from './components/Carrusel/Carrusel';

export default function App() {
  return (
    <View >
      <Carrusel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
