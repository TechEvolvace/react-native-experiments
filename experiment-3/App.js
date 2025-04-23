import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

{/* Home page, also this experiment app's landing page */}
function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to this experiment's app! Here is the <Text style={styles.useful_info}>Home page</Text> of the app.</Text>
      <Text style={styles.body}>This is the landing page for this experiment app, the <Text style={styles.useful_info}>first page you see when you run and load this app on your iOS device</Text>!</Text>
      <Text style={styles.body}>
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
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the <Text style={styles.useful_info}>Profile page</Text> of this experiment's app!</Text>
      <Text style={styles.body}>This page will soon be a page where you can change the color, font size, and font style of the content here! But for now, this will be the Profile page!</Text>
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
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16@ms',
  },
  title: {
    fontSize: '24@ms',
    marginVertical: '20@ms',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    fontSize: '16@ms',
    marginHorizontal: '16@ms',
    textAlign: 'center',
    marginVertical: '12@ms',
  },
  useful_info: {
    color: '#5ea758',
  }
});