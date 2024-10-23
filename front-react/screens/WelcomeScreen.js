import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('/Users/eddyelisabeth/Desktop/moodly/Moodly/front-react/asset_front/Logomoodly.png')} style={styles.logo} />

      {/* Boutons pour se connecter ou s'inscrire */}
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Couleur de fond blanche
    padding: 20,
  },
  logo: {
    width: 250, // Ajuste selon la taille de ton logo
    height: 290,
    marginBottom: 100,
  },
  signInButton: {
    backgroundColor: '#FFD600', // Jaune pour "Se connecter"
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%', // Prend 80% de la largeur de l'écran
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#00008B', // Bleu foncé pour "S'inscrire"
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
