import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutMeScreen from './AboutMeScreen';
import MyLanguagesScreen from './MyLanguagesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={AboutMeScreen} />
        <Tab.Screen name="Мои Языки" component={MyLanguagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}