import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <View>
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="S'inscrire" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
