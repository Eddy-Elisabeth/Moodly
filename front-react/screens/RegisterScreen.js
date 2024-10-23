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