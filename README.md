# MyApp

## Overview
MyApp is a React Native application that integrates Firebase authentication and Firebase Realtime Database. Users can sign up and sign in securely. The app fetches and displays character data from the [Thrones API](https://thronesapi.com/) using Redux for state management.

## Features
- **User Authentication**: Signup and Signin with Firebase.
- **Character List**: Fetch and display characters from Thrones API.
- **State Management**: Uses Redux to manage authentication state and API data.

## Technologies Used
- **React Native** (Bare Workflow)
- **Firebase Authentication** (for user login and signup)
- **Firebase Realtime Database** (for storing user data)
- **Redux Toolkit** (for state management)
- **React Navigation** (for navigation between screens)
- **Thrones API** (for character data)

## Setup Instructions
### Prerequisites
- Node.js (latest stable version recommended)
- React Native CLI
- Firebase account and project setup

### Installation Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/manishaMM19/MyApp.git
   cd MyApp
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication** (Email/Password sign-in method).
   - Set up **Realtime Database** with required rules.
   - Copy your Firebase configuration and create a `firebaseConfig.js` file inside the `config` folder:
     ```js
     import { initializeApp } from "firebase/app";
     import { getAuth } from "firebase/auth";
     import { getDatabase } from "firebase/database";
     
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     
     const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app);
     export const database = getDatabase(app);
     ```

4. **Run the application:**
   ```sh
   npx react-native start
   ```
   In another terminal, run:
   ```sh
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

## Usage
- **Signup/Login:**
  - Users can create an account using an email and password.
  - Upon successful authentication, they will be navigated to the character list screen.
- **Character List:**
  - The app fetches data from Thrones API and displays it.
  - Data is managed efficiently using Redux.
- **Logout:**
  - Users can log out, which resets the authentication state.

## Folder Structure
```
MyApp/
│-- src/
│   │-- components/      # Reusable components
│   │-- screens/         # Screens (Login, Signup, Profile, CharacterList)
│   │-- redux/           # Redux store and slices
│   │-- config/          # Firebase config
│   │-- styles/          # Styling files
│-- App.js               # Main app entry point
│-- package.json         # Dependencies
│-- README.md            # Documentation
```

## API Integration
- The Thrones API endpoint used:
  ```sh
  https://thronesapi.com/api/v2/Characters
  ```

## Deployment
To deploy, you can use Expo or build standalone apps for iOS and Android:
```sh
npx react-native run-android   # Android build
npx react-native run-ios       # iOS build
```

## Contributing
Pull requests are welcome. If you find issues, feel free to submit an issue.

## License
This project is open-source under the MIT License.

