import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Box from './Box';

const bgImg = require('./assets/bg.jpg');

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
})


export default function App() {



  return (
    <View style={styles.container} >


      <Box style={{ backgroundColor: "#147904" }}> Box 1</Box>
      <Box style={{ backgroundColor: "#012345" }}> Box 2</Box>
      <Box style={{ backgroundColor: "#543210" }}> Box 3</Box>




    </View >

  );
}


