# Experiment 2 
This experiment focuses on developing an app with multiple pages and intuitive navigation buttons to navigate between each of these pages, and the main programming langauge used to develop this app is React Native. 

## Findings

### Finding 1
Creating a React Native app use TypeScript by default, which is why the app pages' files have .tsx ending.

Apparently, in order to create a React Native Expo project with JavaScript, use the following command: 
```
npx create-expo-app@latest -t
```

### Finding 2
There is a JavaScript file among the starter code for React Native app provided that when run will remove only all of the excess starter code features easily and efficiently. 

This JavaScript file to run is the reset-project.js located in the scripts directory. You can run this file by running the provided script command, which can be found in the package.json file: 
```
npm run reset-project
```

After this is successfully run, you can safely delete the following command from the package.json file: 
```javascript
"reset-project": "node ./scripts/reset-project"
```

### Finding 3
The app directory contains all the files for each of the app's webpages in this Experiment and the _layout.tsx file. 
* The _layout.tsx file, indicated with a _, is a special file that Expo Router uses to control the layout and navigation for all of the app's webpages!
* Whenever you need to add a new webpage for the app, you can create a new file with a specific name without the beginning underscore in front of the new file name inside the app directory. The _layout.tsx file automatically adds all the other files that can be treated as Screens to the stack for display. 
* Any file without the underscore in front of the name (unlike _layout.tsx) are files that can be treated as a Screen. Every webpage needs to have their corresponding file be treated as Screens.

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
