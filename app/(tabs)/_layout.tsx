import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#121212' } }}>
        <Tabs.Screen name="index" options={{ headerShown: false, tabBarLabel: 'Home',tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
      ), }} />
        <Tabs.Screen name="search" options={{ headerShown: false, tabBarLabel: 'Search' }} />
        <Tabs.Screen name="profile" options={{ headerShown: false, tabBarLabel: 'Profile' }} />
    </Tabs>
  )
}

export default _layout