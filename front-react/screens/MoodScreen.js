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



























// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Alert, Text } from 'react-native';
// import { Picker } from '@react-native-picker/picker';  // Import depuis le bon package
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const MoodScreen = ({ navigation }) => {
//   const [humeurs, setHumeurs] = useState([
//     'Heureux',
//     'Triste',
//     'En colère',
//     'Stressé',
//     'Maussade',
//     'Blasé',
//     'Fatigué',
//   ]);  // Les options d'humeur viennent de ta collection
//   const [selectedHumeur, setSelectedHumeur] = useState('');
//   const [commentaire, setCommentaire] = useState('');

//   const handleMoodPost = async () => {
//     const token = await AsyncStorage.getItem('token');
//     if (!selectedHumeur || !commentaire) {
//       Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
//       return;
//     }

//     try {
//       // Soumission de l'humeur sans préciser l'utilisateur manuellement
//       await axios.post(
//         'http://localhost:1337/api/moods',
//         {
//           data: {
//             Humeur: selectedHumeur,
//             Commentaire: commentaire,
//             Anonyme: true,  // Par défaut, nous le mettons à true
//           },
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       Alert.alert('Succès', 'Humeur postée avec succès');
//       navigation.navigate('Home');
//     } catch (error) {
//       console.log("Erreur lors de la soumission de l'humeur:", error.response?.data || error.message);
//       Alert.alert('Erreur', 'Erreur lors de la soumission de l\'humeur');
//     }
//   };

//   return (
//     <View>
//       <Text>Sélectionnez votre humeur :</Text>
//       <Picker
//         selectedValue={selectedHumeur}
//         onValueChange={(itemValue) => setSelectedHumeur(itemValue)}
//       >
//         <Picker.Item label="Sélectionnez une humeur" value="" />
//         {humeurs.map((humeur, index) => (
//           <Picker.Item key={index} label={humeur} value={humeur} />
//         ))}
//       </Picker>

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



































// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, Alert, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const moodOptions = [
//   { label: 'Pet’ la forme', value: 'Heureux', color: '#FFE082', emoji: require('/Users/eddyelisabeth/Desktop/moodly/Moodly/front-react/asset_front/4.png') },
//   { label: 'Dans le mood', value: 'Content', color: '#C8E6C9', emoji: require('/Users/eddyelisabeth/Desktop/moodly/Moodly/front-react/asset_front/5.png') },
//   { label: 'Dans le mou', value: 'Maussade', color: '#F8BBD0', emoji: require('/Users/eddyelisabeth/Desktop/moodly/Moodly/front-react/asset_front/2.png') },
//   { label: 'Aigris', value: 'En colère', color: '#FFAB91', emoji: require('/Users/eddyelisabeth/Desktop/moodly/Moodly/front-react/asset_front/3.png') },
//   { label: 'Triste', value: 'Triste', color: '#B3E5FC', emoji: require('/Users/eddyelisabeth/Desktop/moodly/Moodly/front-react/asset_front/1.png') },
//   { label: 'Blasé', value: 'Blasé', color: '#B3E5FC', emoji: require('/Users/eddyelisabeth/Desktop/moodly/Moodly/front-react/asset_front/6.png') },
//   { label: 'Fatigué', value: 'Fatigué', color: '#B3E5FC', emoji: require('/Users/eddyelisabeth/Desktop/moodly/Moodly/front-react/asset_front/7.png') },
// ];

// const MoodScreen = ({ navigation }) => {
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [commentaire, setCommentaire] = useState('');

//   const handleMoodPost = async () => {
//     const token = await AsyncStorage.getItem('token');
//     if (!selectedMood || !commentaire) {
//       Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
//       return;
//     }

//     try {
//       await axios.post(
//         'http://localhost:1337/api/moods',
//         {
//           data: {
//             Humeur: selectedMood.value,
//             Commentaire: commentaire,
//             Anonyme: true,
//           },
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       Alert.alert('Succès', 'Humeur postée avec succès');
//       navigation.navigate('Home');
//     } catch (error) {
//       console.log("Erreur lors de la soumission de l'humeur:", error.response?.data || error.message);
//       Alert.alert('Erreur', 'Erreur lors de la soumission de l\'humeur');
//     }
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: selectedMood ? selectedMood.color : '#FFF' }]}>
//       <Image
//         source={selectedMood ? selectedMood.emoji : require('/Users/eddyelisabeth/Desktop/moodly/Moodly/front-react/asset_front/Logomoodly.png')}
//         style={styles.emoji}
//       />
//       <Text style={styles.title}>
//         {selectedMood ? selectedMood.label : 'Sélectionnez votre humeur'}
//       </Text>

//       {moodOptions.map((mood) => (
//         <TouchableOpacity
//           key={mood.value}
//           style={[
//             styles.moodButton,
//             selectedMood?.value === mood.value && styles.selectedMoodButton,
//           ]}
//           onPress={() => setSelectedMood(mood)}
//         >
//           <Text style={styles.moodButtonText}>{mood.label}</Text>
//         </TouchableOpacity>
//       ))}

//       <TextInput
//         placeholder="Commentaire"
//         value={commentaire}
//         onChangeText={setCommentaire}
//         multiline
//         style={styles.input}
//         placeholderTextColor="#A9A9A9"
//       />

//       <TouchableOpacity style={styles.submitButton} onPress={handleMoodPost}>
//         <Text style={styles.submitButtonText}>Valider</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   emoji: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     textAlign: 'center',
//   },
//   moodButton: {
//     width: '80%',
//     padding: 15,
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: '#000',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   selectedMoodButton: {
//     backgroundColor: '#000',
//   },
//   moodButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   input: {
//     width: '80%',
//     borderColor: '#E5E5E5',
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 15,
//     fontSize: 16,
//     color: '#000',
//     backgroundColor: '#F8F8F8',
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   submitButton: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 8,
//   },
//   submitButtonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default MoodScreen;








































// import React, { useState } from 'react';
// import { View, TextInput, Text, Alert, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const moodOptions = [
//   { label: 'Pet’ la forme', value: 'Pet\' la forme', color: '#FFE082', emoji: require('../asset_front/4.png') },
//   { label: 'Dans le mood', value: 'Content', color: '#C8E6C9', emoji: require('../asset_front/5.png') },
//   { label: 'Dans le mou', value: 'Dans le mou', color: '#F8BBD0', emoji: require('../asset_front/2.png') },
//   { label: 'Aigris', value: 'Aigris', color: '#FFAB91', emoji: require('../asset_front/3.png') },
//   { label: 'Triste', value: 'Triste', color: '#B3E5FC', emoji: require('../asset_front/1.png') },
//   { label: 'Blasé', value: 'Blasé', color: '#F3E5AB', emoji: require('../asset_front/6.png') },
//   { label: 'Fatigué', value: 'Fatigué', color: '#D1C4E9', emoji: require('../asset_front/7.png') },
//   { label: 'Stressé', value: 'Stressé', color: '#D0BAFF', emoji: require('../asset_front/8.png') },
// ];

// const MoodScreen = ({ navigation }) => {
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [commentaire, setCommentaire] = useState('');

//   const handleMoodPost = async () => {
//     const token = await AsyncStorage.getItem('token');
//     if (!selectedMood || !commentaire) {
//       Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
//       return;
//     }

//     try {
//       await axios.post(
//         'http://localhost:1337/api/moods',
//         {
//           data: {
//             Humeur: selectedMood.value,
//             Commentaire: commentaire,
//             Anonyme: true,
//           },
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       Alert.alert('Succès', 'Humeur postée avec succès');
//       navigation.navigate('Home');
//     } catch (error) {
//       console.log("Erreur lors de la soumission de l'humeur:", error.response?.data || error.message);
//       Alert.alert('Erreur', 'Erreur lors de la soumission de l\'humeur');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image
//         source={selectedMood ? selectedMood.emoji : require('../asset_front/Logomoodly.png')}
//         style={styles.emoji}
//       />
//       <Text style={styles.title}>
//         {selectedMood ? selectedMood.label : 'Sélectionnez votre humeur'}
//       </Text>

//       <View style={styles.moodOptionsContainer}>
//         {moodOptions.map((mood) => (
//           <TouchableOpacity
//             key={mood.value}
//             style={[
//               styles.moodButton,
//               selectedMood?.value === mood.value && { backgroundColor: mood.color },
//             ]}
//             onPress={() => setSelectedMood(mood)}
//           >
//             <Text style={[
//               styles.moodButtonText,
//               selectedMood?.value === mood.value && { color: '#FFF' },
//             ]}>
//               {mood.label}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <TextInput
//         placeholder="Commentaire"
//         value={commentaire}
//         onChangeText={setCommentaire}
//         multiline
//         style={styles.input}
//         placeholderTextColor="#A9A9A9"
//       />

//       <TouchableOpacity style={styles.submitButton} onPress={handleMoodPost}>
//         <Text style={styles.submitButtonText}>Valider</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   emoji: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   moodOptionsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   moodButton: {
//     width: '40%',
//     padding: 15,
//     marginVertical: 10,
//     marginHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#000',
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   moodButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   input: {
//     width: '80%',
//     borderColor: '#E5E5E5',
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 15,
//     fontSize: 16,
//     color: '#000',
//     backgroundColor: '#F8F8F8',
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   submitButton: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 8,
//   },
//   submitButtonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default MoodScreen;












































import React, { useState } from 'react';
import { View, TextInput, Text, Alert, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const moodOptions = [
  { label: 'Pet’ la forme', value: 'Pet\' la forme', color: '#FFE082', emoji: require('../asset_front/4.png') },
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
