# React Native Experiment 1

This is the first React Native app I set up. This app is very flexible 
and can be run on iOS devices, Android devices, and on the web. 

I set this app to be compatible with the app Expo Go such that I can run it on 
the app on an Apple iPhone device.

## Instructions on Running this App
1) Ensure you cloned all the files stored in Experiment 1
2) Run the command ```npm install``` in Terminal or other command-line interfaces to install all dependencies
3) Run the command ```npx expo start``` in Terminal or other command-line interfaces to start running this app.
4) Then, if you want to test this app on an iOS or Android device, check if you have installed Expo Go
   * If you don't have Expo Go, install Expo Go before continuing further.
5) The results of running the command ```npx expo start``` displays a QR Code. Use the device's camera to scan the QR Code.
6) Touch the displayed link after scanning the QR Code, and the React Native app will now be loaded and run successfully on the Expo Go app.

## How I created a React Native App easily? 
1) Create a new empty directory with a specific name that only contains lowercase alphabet letters, numbers, or hyphens. 
2) Use a series of ```cd``` commands in Terminal or other command-line interfaces to navigate to the new directory.
3) Run the command ```npx create-expo-start .``` to create a React Native App that is compatible with Expo Go!
   * This may automatically run ```npm install``` on your local device, so you don't need to run that command again!
4) Test the new app by running the command ```npx expo start``` and follow the instructions shown.

## Renaming the name of the directory containing this React Native App
You can rename the directory containing the React Native app to include other characters, such as capital letters and spaces, for easier readability!

1) Use the command in the syntax form ```mv "current-directory-name" "new-directory-name"``` to change the directory's name to a different name!
2) Change the name field in the app.json file to match the current name of that directory!

## This is the README file as part of starter code file for setting this experiment up.
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
