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






















// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HomeScreen = ({ navigation }) => {
//   const [moods, setMoods] = useState([]);

//   useEffect(() => {
//     const fetchMoods = async () => {
//       const token = await AsyncStorage.getItem('token');
//       try {
//         const response = await axios.get('http://localhost:1337/api/moods', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log(response.data);  // Vérifie la structure des données
//         setMoods(response.data.data);  // Récupère le tableau de humeurs directement
//       } catch (error) {
//         Alert.alert('Erreur', 'Impossible de récupérer les humeurs');
//       }
//     };

//     fetchMoods();
//   }, []);

//   return (
//     <View>
//       <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
//       <Text>Vos humeurs précédentes :</Text>
//       {moods.length > 0 ? (
//         moods.map((mood) => (
//           <Text key={mood.id}>
//             {mood.Humeur} - {mood.Commentaire}
//           </Text>
//         ))
//       ) : (
//         <Text>Aucune humeur postée</Text>
//       )}
//     </View>
//   );
// };

// export default HomeScreen;



















// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HomeScreen = ({ navigation }) => {
//   const [moods, setMoods] = useState([]);
//   const [userId, setUserId] = useState(null);

//   // Étape 1 : Récupérer l'ID de l'utilisateur connecté via /users/me
//   useEffect(() => {
//     const fetchUserId = async () => {
//       const token = await AsyncStorage.getItem('token');
//       try {
//         const response = await axios.get('http://localhost:1337/api/users/me', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log("User data:", response.data);  // Affiche les données utilisateur dans la console
//         setUserId(response.data.id);  // Stocke l'ID de l'utilisateur connecté
//       } catch (error) {
//         Alert.alert('Erreur', 'Impossible de récupérer les informations de l\'utilisateur');
//       }
//     };

//     fetchUserId();
//   }, []);

//   // Étape 2 : Utiliser l'ID de l'utilisateur pour récupérer les humeurs postées
//   useEffect(() => {
//     if (userId) {
//       const fetchMoods = async () => {
//         const token = await AsyncStorage.getItem('token');
//         try {
//           const response = await axios.get(`http://localhost:1337/api/moods?filters[user][id][$eq]=${userId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           console.log("Moods data:", response.data);  // Affiche les données des humeurs récupérées
//           setMoods(response.data.data);  // Stocke les humeurs récupérées
//         } catch (error) {
//           Alert.alert('Erreur', 'Impossible de récupérer les humeurs');
//         }
//       };

//       fetchMoods();
//     }
//   }, [userId]);

//   return (
//     <View>
//       <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
//       <Text>Vos humeurs postées :</Text>
//       {moods.length > 0 ? (
//         moods.map((mood) => (
//           <Text key={mood.id}>
//             {mood.Humeur} - {mood.Commentaire}
//           </Text>
//         ))
//       ) : (
//         <Text>Aucune humeur postée</Text>
//       )}
//     </View>
//   );
// };

// export default HomeScreen;























// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HomeScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [moods, setMoods] = useState([]);
//   const [userId, setUserId] = useState(null);

//   // Étape 1 : Se connecter et récupérer le token JWT
//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:1337/api/auth/local', {
//         identifier: email,
//         password: password,
//       });
//       const token = response.data.jwt;  // Récupère le token JWT
//       const userId = response.data.user.id;  // Récupère l'ID de l'utilisateur
//       await AsyncStorage.setItem('token', token);  // Stocke le token JWT
//       setUserId(userId);
//       Alert.alert('Succès', 'Connecté avec succès !');
//     } catch (error) {
//       Alert.alert('Erreur', 'Email ou mot de passe incorrect');
//     }
//   };

//   // Étape 2 : Récupérer les humeurs postées par l'utilisateur connecté
//   useEffect(() => {
//     if (userId) {
//       const fetchMoods = async () => {
//         const token = await AsyncStorage.getItem('token');
//         try {
//           const response = await axios.get(`http://localhost:1337/api/moods?filters[user][id][$eq]=${userId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setMoods(response.data.data);  // Stocke les humeurs récupérées
//         } catch (error) {
//           Alert.alert('Erreur', 'Impossible de récupérer les humeurs');
//         }
//       };

//       fetchMoods();
//     }
//   }, [userId]);  // Déclenche la requête lorsque l'utilisateur est connecté

//   return (
//     <View>
//       <TextInput 
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <TextInput 
//         placeholder="Mot de passe"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <Button title="Se connecter" onPress={handleLogin} />

//       <Text>Vos humeurs postées :</Text>
//       {moods.length > 0 ? (
//         moods.map((mood) => (
//           <Text key={mood.id}>
//             {mood.Humeur} - {mood.Commentaire}
//           </Text>
//         ))
//       ) : (
//         <Text>Aucune humeur postée</Text>
//       )}
//     </View>
//   );
// };

// export default HomeScreen;




























import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [moods, setMoods] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Vérifier si un token JWT est déjà présent au démarrage de l'application
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:1337/api/users/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log("Utilisateur connecté :", response.data);
          setUserId(response.data.id);  // Stocke l'ID de l'utilisateur
          setIsLoggedIn(true);  // Marquer l'utilisateur comme connecté
        } catch (error) {
          console.log("Erreur lors de la récupération de l'utilisateur :", error.response?.data || error.message);
        }
      }
    };

    checkUserLoggedIn();  // Vérifier la connexion au lancement
  }, []);

  // Étape 1 : Connexion de l'utilisateur
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      });
      const token = response.data.jwt;  // Récupère le token JWT
      const userId = response.data.user.id;  // Récupère l'ID de l'utilisateur
      await AsyncStorage.setItem('token', token);  // Stocke le token JWT
      setUserId(userId);  // Stocke l'ID utilisateur
      setIsLoggedIn(true);  // Marquer l'utilisateur comme connecté
      Alert.alert('Succès', 'Connecté avec succès !');
    } catch (error) {
      console.log("Erreur de connexion :", error.response?.data || error.message);
      Alert.alert('Erreur', 'Email ou mot de passe incorrect');
    }
  };

  // Étape 2 : Récupérer les humeurs postées par l'utilisateur connecté
  useEffect(() => {
    const fetchMoods = async () => {
      if (userId && isLoggedIn) {
        const token = await AsyncStorage.getItem('token');
        console.log("Token utilisé pour l'API des humeurs :", token);  // Vérifie le token
        try {
          const response = await axios.get(`http://localhost:1337/api/moods?filters[users_permissions_users][id][$eq]=${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log("Humeurs récupérées :", response.data);  // Affiche les humeurs récupérées
          setMoods(response.data.data);  // Stocke les humeurs récupérées
        } catch (error) {
          console.log("Erreur lors de la récupération des humeurs :", error.response?.data || error.message);
          Alert.alert('Erreur', 'Impossible de récupérer les humeurs');
        }
      }
    };

    fetchMoods();
  }, [userId, isLoggedIn]);

  return (
    <View>
      {!isLoggedIn ? (
        <View>
          <TextInput 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{ marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
          />
          <TextInput 
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{ marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
          />
          <Button title="Se connecter" onPress={handleLogin} />
        </View>
      ) : (
        <View>
          <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
          <Text>Vos humeurs postées :</Text>
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
      )}
    </View>
  );
};

export default HomeScreen;



