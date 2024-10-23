// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import axios from 'axios';

// const RegisterScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     try {
//       await axios.post('http://localhost:1337/api/auth/local/register', {
//         username: email,
//         email: email,
//         password: password,
//       });
//       Alert.alert('Succès', 'Compte créé avec succès');
//       navigation.navigate('Login');
//     } catch (error) {
//       Alert.alert('Erreur', 'Erreur lors de la création du compte');
//     }
//   };

//   return (
//     <View>
//       <TextInput 
//         placeholder="Email" 
//         value={email} 
//         onChangeText={setEmail} 
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <TextInput
//         placeholder="Mot de passe"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <Button title="S'inscrire" onPress={handleRegister} />
//     </View>
//   );
// };

// export default RegisterScreen;












































import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:1337/api/auth/local/register', {
        username: email,
        email: email,
        password: password,
      });
      Alert.alert('Succès', 'Compte créé avec succès');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erreur', 'Erreur lors de la création du compte');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      <TextInput
        placeholder="Prénom"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
        placeholderTextColor="#A9A9A9"
      />

      <TextInput
        placeholder="Nom"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
        placeholderTextColor="#A9A9A9"
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#A9A9A9"
      />

      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#A9A9A9"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    backgroundColor: '#F8F8F8',
  },
  button: {
    backgroundColor: '#FFCC00',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;




























// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import axios from 'axios';
// import { Picker } from '@react-native-picker/picker';  // Import du bon package

// const RegisterScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [role, setRole] = useState('Authenticated'); // Rôle par défaut

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://localhost:1337/api/auth/local/register', {
//         username,
//         email,
//         password,
//         role,
//       });
//       Alert.alert('Succès', 'Inscription réussie');
//       navigation.navigate('Login');
//     } catch (error) {
//       Alert.alert('Erreur', 'Erreur lors de l\'inscription');
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         placeholder="Nom d'utilisateur"
//         value={username}
//         onChangeText={setUsername}
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <TextInput
//         placeholder="Mot de passe"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />

//       {/* Sélection du rôle */}
//       <Picker
//         selectedValue={role}
//         onValueChange={(itemValue) => setRole(itemValue)}
//         style={{ marginBottom: 20 }}
//       >
//         <Picker.Item label="Utilisateur" value="Authenticated" />
//         <Picker.Item label="Manager" value="Manager" />
//       </Picker>

//       <Button title="S'inscrire" onPress={handleRegister} />
//     </View>
//   );
// };

// export default RegisterScreen;

























// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, Alert } from 'react-native';
// import axios from 'axios';
// import { Picker } from '@react-native-picker/picker';

// const RegisterScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedRole, setSelectedRole] = useState('authenticated'); // Role par défaut

//   const handleRegister = async () => {
//     try {
//       // Étape 1: Enregistre l'utilisateur sans rôle spécifique
//       const registerResponse = await axios.post('http://localhost:1337/api/auth/local/register', {
//         username,
//         email,
//         password,
//       });

//       const userId = registerResponse.data.user.id; // ID de l'utilisateur créé
//       const token = registerResponse.data.jwt; // Token pour l'authentification

//       console.log("Utilisateur enregistré :", registerResponse.data.user);
//       console.log("Token utilisé pour l'API :", token);

//       // Étape 2: Assigne le rôle "Manager" si choisi
//       const roleId = selectedRole === 'manager' ? 3 : 1; // 3 pour Manager, 1 pour Authenticated

//       // Mise à jour du rôle
//       await axios.put(
//         `http://localhost:1337/api/users/${userId}`,
//         { role: roleId }, 
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       Alert.alert('Succès', 'Inscription réussie avec rôle attribué');
//       navigation.navigate('Login'); // Redirige vers la page de connexion
//     } catch (error) {
//       Alert.alert('Erreur', 'Erreur lors de l\'inscription');
//       console.log("Erreur lors de l'inscription :", error.response.data);
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Nom d'utilisateur"
//         value={username}
//         onChangeText={setUsername}
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <TextInput
//         placeholder="Mot de passe"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <Text>Choisissez un rôle :</Text>
//       <Picker
//         selectedValue={selectedRole}
//         onValueChange={(itemValue) => setSelectedRole(itemValue)}
//         style={{ height: 50, width: 200 }}
//       >
//         <Picker.Item label="Authenticated" value="authenticated" />
//         <Picker.Item label="Manager" value="manager" />
//       </Picker>

//       <Button title="S'inscrire" onPress={handleRegister} />
//     </View>
//   );
// };

// export default RegisterScreen;
