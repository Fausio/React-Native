import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Box from './Box';

const bgImg = require('./assets/bg.jpg');

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red"
  }
})


export default function App() {



  return (

    <View style={styles.container}>
      <Box style={{backgtoundColor: "#fff"}}> Box 1</Box>
    </View>

  );
}


