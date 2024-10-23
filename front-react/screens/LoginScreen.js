import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      });
      const { jwt } = response.data;
      await AsyncStorage.setItem('token', jwt);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erreur', 'Email ou mot de passe incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Se connecter</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Pas encore de compte ? S’inscrire</Text>
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
  linkText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
