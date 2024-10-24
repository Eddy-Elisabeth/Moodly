import React, { useState } from 'react';
import { View, TextInput, Text, Alert, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const moodOptions = [
  { label: 'Pet’ la forme', value: 'Pet’ la forme', color: '#FFE082', emoji: require('../asset_front/4.png') },
  { label: 'Dans le mood', value: 'Content', color: '#C8E6C9', emoji: require('../asset_front/5.png') },
  { label: 'Dans le mou', value: 'Dans le mou', color: '#F8BBD0', emoji: require('../asset_front/2.png') },
  { label: 'Aigris', value: 'Aigris', color: '#FFAB91', emoji: require('../asset_front/3.png') },
  { label: 'Triste', value: 'Triste', color: '#B3E5FC', emoji: require('../asset_front/1.png') },
  { label: 'Blasé', value: 'Blasé', color: '#F3E5AB', emoji: require('../asset_front/6.png') },
  { label: 'Fatigué', value: 'Fatigué', color: '#D1C4E9', emoji: require('../asset_front/7.png') },
  { label: 'Stressé', value: 'Stressé', color: '#D0BAFF', emoji: require('../asset_front/8.png') },
];

const MoodScreen = ({ navigation }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [commentaire, setCommentaire] = useState('');

  const handleMoodPost = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!selectedMood || !commentaire) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:1337/api/moods',
        {
          data: {
            Humeur: selectedMood.value,
            Commentaire: commentaire,
            Anonyme: true,
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      Alert.alert('Succès', 'Humeur postée avec succès');
      navigation.navigate('Home');
    } catch (error) {
      console.log("Erreur lors de la soumission de l'humeur:", error.response?.data || error.message);
      Alert.alert('Erreur', 'Erreur lors de la soumission de l\'humeur');
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: selectedMood ? selectedMood.color : '#FFF' }]}>
      <Image
        source={selectedMood ? selectedMood.emoji : require('../asset_front/Logomoodly.png')}
        style={styles.emoji}
      />
      <Text style={styles.title}>
        {selectedMood ? selectedMood.label : 'Sélectionnez votre humeur'}
      </Text>

      <View style={styles.moodOptionsContainer}>
        {moodOptions.map((mood) => (
          <TouchableOpacity
            key={mood.value}
            style={[
              styles.moodButton,
              selectedMood?.value === mood.value && styles.selectedMoodButton,
            ]}
            onPress={() => setSelectedMood(mood)}
          >
            <Text style={[
              styles.moodButtonText,
              selectedMood?.value === mood.value && styles.selectedMoodButtonText,
            ]}>
              {mood.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        placeholder="Commentaire"
        value={commentaire}
        onChangeText={setCommentaire}
        multiline
        style={styles.input}
        placeholderTextColor="#A9A9A9"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleMoodPost}>
        <Text style={styles.submitButtonText}>Valider</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emoji: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  moodOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  moodButton: {
    width: '40%',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    alignItems: 'center',
  },
  selectedMoodButton: {
    backgroundColor: '#000',
  },
  moodButtonText: {
    fontSize: 16,
    color: '#000',
  },
  selectedMoodButtonText: {
    color: '#FFF',
  },
  input: {
    width: '80%',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#F8F8F8',
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 20,
  },
  submitButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MoodScreen;
