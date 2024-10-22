// import React, { useEffect, useState } from 'react';
// import { View, TextInput, Button, Picker, Alert, Text } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker';

// const MoodScreen = ({ navigation }) => {
//   const [humeurs, setHumeurs] = useState([]); // Pour stocker les humeurs disponibles
//   const [selectedHumeur, setSelectedHumeur] = useState('');
//   const [commentaire, setCommentaire] = useState('');

//   // Charger les humeurs depuis Strapi au chargement du composant
//   useEffect(() => {
//     const fetchHumeurs = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token');
//         const response = await axios.get('http://localhost:1337/api/moods', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         // Mettre à jour l'état avec les options d'énumération des humeurs
//         const moodOptions = response.data.data.map((mood) => mood.Humeur);
//         setHumeurs(moodOptions);
//         setSelectedHumeur(moodOptions[0]); // Sélectionner la première humeur par défaut
//       } catch (error) {
//         Alert.alert('Erreur', 'Impossible de charger les humeurs');
//       }
//     };

//     fetchHumeurs();
//   }, []);

//   // Fonction pour poster une humeur
//   const handleMoodPost = async () => {
//     const token = await AsyncStorage.getItem('token');
//     try {
//       await axios.post(
//         'http://localhost:1337/api/moods',
//         { Humeur: selectedHumeur, Commentaire: commentaire, Anonyme: true },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       Alert.alert('Succès', 'Humeur postée avec succès');
//       navigation.navigate('Home');
//     } catch (error) {
//       Alert.alert('Erreur', 'Erreur lors de la soumission de l\'humeur');
//     }
//   };

//   return (
//     <View>
//       <Text>Sélectionnez votre humeur :</Text>
//       {humeurs.length > 0 ? (
//         <Picker
//           selectedValue={selectedHumeur}
//           onValueChange={(itemValue) => setSelectedHumeur(itemValue)}
//         >
//           {humeurs.map((humeur, index) => (
//             <Picker.Item key={index} label={humeur} value={humeur} />
//           ))}
//         </Picker>
//       ) : (
//         <Text>Chargement des humeurs...</Text>
//       )}

//       <TextInput
//         placeholder="Commentaire"
//         value={commentaire}
//         onChangeText={setCommentaire}
//         multiline
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <Button title="Soumettre" onPress={handleMoodPost} />
//     </View>
//   );
// };

// export default MoodScreen;























// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Alert, Text } from 'react-native';
// import { Picker } from '@react-native-picker/picker';  // Import depuis le bon package
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const MoodScreen = ({ navigation }) => {
//   const [humeurs, setHumeurs] = useState([]);
//   const [selectedHumeur, setSelectedHumeur] = useState('');
//   const [commentaire, setCommentaire] = useState('');

//   useEffect(() => {
//     const fetchHumeurs = async () => {
//       const token = await AsyncStorage.getItem('token');
//       try {
//         const response = await axios.get('http://localhost:1337/api/moods/', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const moodOptions = response.data.data.map((mood) => mood.Humeur);
//         setHumeurs(moodOptions);
//         setSelectedHumeur(moodOptions[0]);
//       } catch (error) {
//         Alert.alert('Erreur', 'Impossible de charger les humeurs');
//       }
//     };

//     fetchHumeurs();
//   }, []);

//   const handleMoodPost = async () => {
//     const token = await AsyncStorage.getItem('token');
//     try {
//       await axios.post(
//         'http://localhost:1337/api/moods',
//         { Humeur: selectedHumeur, Commentaire: commentaire, Anonyme: true },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       Alert.alert('Succès', 'Humeur postée avec succès');
//       navigation.navigate('Home');
//     } catch (error) {
//       Alert.alert('Erreur', 'Erreur lors de la soumission de l\'humeur');
//     }
//   };

//   return (
//     <View>
//       <Text>Sélectionnez votre humeur :</Text>
//       {humeurs.length > 0 ? (
//         <Picker
//           selectedValue={selectedHumeur}
//           onValueChange={(itemValue) => setSelectedHumeur(itemValue)}
//         >
//           {humeurs.map((humeur, index) => (
//             <Picker.Item key={index} label={humeur} value={humeur} />
//           ))}
//         </Picker>
//       ) : (
//         <Text>Chargement des humeurs...</Text>
//       )}

//       <TextInput
//         placeholder="Commentaire"
//         value={commentaire}
//         onChangeText={setCommentaire}
//         multiline
//         style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <Button title="Soumettre" onPress={handleMoodPost} />
//     </View>
//   );
// };

// export default MoodScreen;



























import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Import depuis le bon package
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoodScreen = ({ navigation }) => {
  const [humeurs, setHumeurs] = useState([
    'Heureux',
    'Triste',
    'En colère',
    'Stressé',
    'Maussade',
    'Blasé',
    'Fatigué',
  ]);  // Les options d'humeur viennent de ta collection
  const [selectedHumeur, setSelectedHumeur] = useState('');
  const [commentaire, setCommentaire] = useState('');

  const handleMoodPost = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!selectedHumeur || !commentaire) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    try {
      // Soumission de l'humeur sans préciser l'utilisateur manuellement
      await axios.post(
        'http://localhost:1337/api/moods',
        {
          data: {
            Humeur: selectedHumeur,
            Commentaire: commentaire,
            Anonyme: true,  // Par défaut, nous le mettons à true
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
    <View>
      <Text>Sélectionnez votre humeur :</Text>
      <Picker
        selectedValue={selectedHumeur}
        onValueChange={(itemValue) => setSelectedHumeur(itemValue)}
      >
        <Picker.Item label="Sélectionnez une humeur" value="" />
        {humeurs.map((humeur, index) => (
          <Picker.Item key={index} label={humeur} value={humeur} />
        ))}
      </Picker>

      <TextInput
        placeholder="Commentaire"
        value={commentaire}
        onChangeText={setCommentaire}
        multiline
        style={{ marginBottom: 20, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="Soumettre" onPress={handleMoodPost} />
    </View>
  );
};

export default MoodScreen;
