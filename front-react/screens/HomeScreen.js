// import React, { useEffect, useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HomeScreen = ({ navigation }) => {
//   const [moods, setMoods] = useState([]);

//   useEffect(() => {
//     const fetchMoods = async () => {
//       const token = await AsyncStorage.getItem('token');
//       const response = await axios.get('http://localhost:1337/api/moods', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setMoods(response.data.data);
//     };
//     fetchMoods();
//   }, []);

//   return (
//     <View>
//       <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
//       <Text>Vos humeurs précédentes :</Text>
//       {moods.map((mood) => (
//         <Text key={mood.id}>
//           {mood.attributes.Humeur} - {mood.attributes.Commentaire}
//         </Text>
//       ))}
//     </View>
//   );
// };

// export default HomeScreen;


import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:1337/api/moods', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data);  // Vérifie la structure des données
        setMoods(response.data.data);  // Récupère le tableau de humeurs directement
      } catch (error) {
        Alert.alert('Erreur', 'Impossible de récupérer les humeurs');
      }
    };

    fetchMoods();
  }, []);

  return (
    <View>
      <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
      <Text>Vos humeurs précédentes :</Text>
      {moods.length > 0 ? (
        moods.map((mood) => (
          <Text key={mood.id}>
            {mood.Humeur} - {mood.Commentaire}
          </Text>
        ))
      ) : (
        <Text>Aucune humeur postée</Text>
      )}
    </View>
  );
};

export default HomeScreen;
