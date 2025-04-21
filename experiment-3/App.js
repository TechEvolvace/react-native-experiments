import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

{/* Home page, also this experiment app's landing page */}
function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginVertical: 10 }}>Welcome to this experiment's app! Here is the Home page of the app.</Text>
      <Text style={{ fontSize: 16, marginHorizontal: 16 }}>
        Use the navigation buttons on the bottom if you are loading this app
        on an iOS device, like an Apple iPhone, to switch between the Home page and 
        the Profile page for this experiment's app!
      </Text>
    </View>
  )
}

{/* Profile page */}
function ProfilePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Profile page of this experiment's app!</Text>
    </View>
  )
}

{/* This experiment's app */}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  success_message: {
    color: 'green',
  }
});
