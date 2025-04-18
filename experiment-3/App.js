import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.success_message}>Open up App.js to start working on your app!</Text>
      <Text>Successfully created new React Native app that have starter code without TypeScript files!</Text>
      <Text>This app is also compatible with Expo Go to be able to run this app on an iPhone device that has Expo Go app installed!</Text>
      <StatusBar style="auto" />
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
  success_message: {
    color: 'green',
  }
});
