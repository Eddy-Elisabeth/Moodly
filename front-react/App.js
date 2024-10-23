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





// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import HomeScreen from './screens/HomeScreen';
// import MoodScreen from './screens/MoodScreen';
// import WelcomeScreen from './screens/WelcomeScreen';
// import 'react-native-gesture-handler';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome">
//         <Stack.Screen 
//           name="Welcome" 
//           component={WelcomeScreen} 
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Mood" component={MoodScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


















// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Text, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';  // Pour une icône de retour personnalisée
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import HomeScreen from './screens/HomeScreen';
// import MoodScreen from './screens/MoodScreen';
// import WelcomeScreen from './screens/WelcomeScreen';
// import 'react-native-gesture-handler';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome">
//         {/* Écran Welcome sans header */}
//         <Stack.Screen 
//           name="Welcome" 
//           component={WelcomeScreen} 
//           options={{ headerShown: false }} 
//         />
        
//         {/* Écrans avec flèche de retour et header transparent */}
//         <Stack.Screen 
//           name="Login" 
//           component={LoginScreen} 
//           options={({ navigation }) => ({
//             headerTitle: '',  // Cache le titre
//             headerTransparent: true,  // Rend la barre transparente
//             headerLeft: () => (
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Ionicons name="arrow-back" size={24} color="black" />
//               </TouchableOpacity>
//             ),
//             headerBackTitleVisible: false,  // Cache le titre de retour
//             headerTitleStyle: { fontFamily: 'your-custom-font', fontSize: 16 }, // Applique la police souhaitée
//           })}
//         />
        
//         <Stack.Screen 
//           name="Register" 
//           component={RegisterScreen} 
//           options={({ navigation }) => ({
//             headerTitle: '',
//             headerTransparent: true,
//             headerLeft: () => (
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Ionicons name="arrow-back" size={24} color="black" />
//               </TouchableOpacity>
//             ),
//             headerBackTitleVisible: false,
//             headerTitleStyle: { fontFamily: 'your-custom-font', fontSize: 16 },
//           })}
//         />
        
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={({ navigation }) => ({
//             headerTitle: '',
//             headerTransparent: true,
//             headerLeft: () => (
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Ionicons name="arrow-back" size={24} color="black" />
//               </TouchableOpacity>
//             ),
//             headerBackTitleVisible: false,
//             headerTitleStyle: { fontFamily: 'your-custom-font', fontSize: 16 },
//           })}
//         />
        
//         <Stack.Screen 
//           name="Mood" 
//           component={MoodScreen} 
//           options={({ navigation }) => ({
//             headerTitle: '',
//             headerTransparent: true,
//             headerLeft: () => (
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Ionicons name="arrow-back" size={24} color="black" />
//               </TouchableOpacity>
//             ),
//             headerBackTitleVisible: false,
//             headerTitleStyle: { fontFamily: 'your-custom-font', fontSize: 16 },
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

































import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Pour une icône de retour personnalisée
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
        {/* Écran Welcome sans header */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        
        {/* Écrans avec flèche de retour et header totalement transparent */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={({ navigation }) => ({
            headerTitle: '',  // Cache le titre
            headerTransparent: true,  // Rend la barre transparente
            headerBackground: () => null,  // Supprime le fond
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerBackTitleVisible: false,  // Cache le titre de retour
          })}
        />
        
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={({ navigation }) => ({
            headerTitle: '',
            headerTransparent: true,
            headerBackground: () => null,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerBackTitleVisible: false,
          })}
        />
        
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({ navigation }) => ({
            headerTitle: '',
            headerTransparent: true,
            headerBackground: () => null,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerBackTitleVisible: false,
          })}
        />
        
        <Stack.Screen 
          name="Mood" 
          component={MoodScreen} 
          options={({ navigation }) => ({
            headerTitle: '',
            headerTransparent: true,
            headerBackground: () => null,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

