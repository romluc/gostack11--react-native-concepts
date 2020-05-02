import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <Text style={styles.title}>Hello maaans!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007788',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#F5F5F5',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
