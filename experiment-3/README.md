# React Native Experiment 3
This experiment investigates creating a React Native app compatible with Expo Go that should only have JavaScript files and not TypeScript files!

This app will be a multi-page app with an intuitive navbar with navigation button that displays their corresponding pages for the app, just like for the React Native app in Experiment 2.

## My Findings

### Creating the React Native app compatible with Expo Go and only with JavaScript files instead of TypeScript files!
1) Run the command ```npx create-expo-app my-app --template blank``` in Terminal, where the ```my-app``` is the name for the new directory to contain the new React Native app.
2) Move to the new directory with the ```cd``` Terminal command. 
3) While inside the new directory containing the new React Native app, run the command ```npx expo start``` in Terminal.

### React Native provides some basic responsiveness by default, but you need to use other packages and libraries to truly implement responsive design!
List of packages that help implement responsive design: 
* react-native-responsive-screen - lets you define width, height, and font size as percentages of the screen
* react-native-full-responsive - provides hooks and utiliites for repsonsive font size, width, height, and media queries
* react-native-size-matters - offers scaling functions for sizes and font sizes based on device dimensions 
* react-native-responsive-sizes - provides simple functions for responsive font size, width, height, and spacing
* rn-responsive-styles - lets you define stylesheets that adapt to device size, similar to CSS media queries

### React Native does not use a browser or the CSSOM and thus is not compatible with web CSS!
Since React Native is not compatible with the typical CSS used for web development, it's not possible to: 
* Use External CSS files!
* Support CSS media queries or breakpoints!