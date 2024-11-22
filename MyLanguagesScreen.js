import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyLanguagesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Мои языки программирования</Text>
    <Text>- JavaScript</Text>
    <Text>- Python</Text>
    <Text>- HTML & CSS</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});

export default MyLanguagesScreen;