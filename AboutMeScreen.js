import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>О Себе</Text>
    <Text>Привет! Меня зовут Станислав, и я люблю программировать.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});

export default AboutMeScreen;