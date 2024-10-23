// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import HomeScreen from './screens/HomeScreen';
// import MoodScreen from './screens/MoodScreen';
// import 'react-native-gesture-handler';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Mood" component={MoodScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }





import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import MoodScreen from './screens/MoodScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mood" component={MoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



