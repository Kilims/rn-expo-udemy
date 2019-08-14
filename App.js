import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@ant-design/react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native with Expo!!</Text>
      <Button type="primary">Click me</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
