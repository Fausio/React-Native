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
      <ScrollView>
        <Box style={{ backgroundColor: "#00FF00" }}> Box 1</Box>
        <Box style={{ backgroundColor: "#012345" }}> Box 2</Box>
        <Box style={{ backgroundColor: "#543210" }}> Box 3</Box>
        <Box style={{ backgroundColor: "#FF0000" }}> Box 4</Box>
        <Box style={{ backgroundColor: "#1236FF" }}> Box 5</Box>
        <Box style={{ backgroundColor: "#F87500" }}> Box 6</Box>
        <Box style={{ backgroundColor: "#00FFFF" }}> Box 7</Box>
        <Box style={{ backgroundColor: "#FF00FF" }}> Box 8</Box>
        <Box style={{ backgroundColor: "#888888" }}> Box 9</Box>
        <Box style={{ backgroundColor: "#FFA500" }}> Box 10</Box>
        <Box style={{ backgroundColor: "#8B0000" }}> Box 11</Box>
        <Box style={{ backgroundColor: "#006400" }}> Box 12</Box>
        <Box style={{ backgroundColor: "#4B0082" }}> Box 13</Box>
      </ScrollView>
    </View>


  );
}


