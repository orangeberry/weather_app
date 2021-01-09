import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
      </View>
      <View style={styles.greenView}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 4,
    backgroundColor: "yellow"
  },
  greenView: {
    flex: 1,
    backgroundColor: "green"
  }
});
