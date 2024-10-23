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




























// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HomeScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [moods, setMoods] = useState([]);
//   const [userId, setUserId] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Vérifier si un token JWT est déjà présent au démarrage de l'application
//   useEffect(() => {
//     const checkUserLoggedIn = async () => {
//       const token = await AsyncStorage.getItem('token');
//       if (token) {
//         try {
//           const response = await axios.get('http://localhost:1337/api/users/me', {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           console.log("Utilisateur connecté :", response.data);
//           setUserId(response.data.id);  // Stocke l'ID de l'utilisateur
//           setIsLoggedIn(true);  // Marquer l'utilisateur comme connecté
//         } catch (error) {
//           console.log("Erreur lors de la récupération de l'utilisateur :", error.response?.data || error.message);
//         }
//       }
//     };

//     checkUserLoggedIn();  // Vérifier la connexion au lancement
//   }, []);

//   // Étape 1 : Connexion de l'utilisateur
//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:1337/api/auth/local', {
//         identifier: email,
//         password: password,
//       });
//       const token = response.data.jwt;  // Récupère le token JWT
//       const userId = response.data.user.id;  // Récupère l'ID de l'utilisateur
//       await AsyncStorage.setItem('token', token);  // Stocke le token JWT
//       setUserId(userId);  // Stocke l'ID utilisateur
//       setIsLoggedIn(true);  // Marquer l'utilisateur comme connecté
//       Alert.alert('Succès', 'Connecté avec succès !');
//     } catch (error) {
//       console.log("Erreur de connexion :", error.response?.data || error.message);
//       Alert.alert('Erreur', 'Email ou mot de passe incorrect');
//     }
//   };

//   // Étape 2 : Récupérer les humeurs postées par l'utilisateur connecté
//   useEffect(() => {
//     const fetchMoods = async () => {
//       if (userId && isLoggedIn) {
//         const token = await AsyncStorage.getItem('token');
//         console.log("Token utilisé pour l'API des humeurs :", token);  // Vérifie le token
//         try {
//           const response = await axios.get(`http://localhost:1337/api/moods?filters[users_permissions_users][id][$eq]=${userId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           console.log("Humeurs récupérées :", response.data);  // Affiche les humeurs récupérées
//           setMoods(response.data.data);  // Stocke les humeurs récupérées
//         } catch (error) {
//           console.log("Erreur lors de la récupération des humeurs :", error.response?.data || error.message);
//           Alert.alert('Erreur', 'Impossible de récupérer les humeurs');
//         }
//       }
//     };

//     fetchMoods();
//   }, [userId, isLoggedIn]);

//   return (
//     <View>
//       {!isLoggedIn ? (
//         <View>
//           <TextInput 
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             style={{ marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
//           />
//           <TextInput 
//             placeholder="Mot de passe"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             style={{ marginBottom: 10, borderColor: 'gray', borderWidth: 1 }}
//           />
//           <Button title="Se connecter" onPress={handleLogin} />
//         </View>
//       ) : (
//         <View>
//           <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
//           <Text>Vos humeurs postées :</Text>
//           {moods.length > 0 ? (
//             moods.map((mood) => (
//               <Text key={mood.id}>
//                 {mood.Humeur} - {mood.Commentaire}
//               </Text>
//             ))
//           ) : (
//             <Text>Aucune humeur postée</Text>
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// export default HomeScreen;


































// import React, { useEffect, useState } from 'react';
// import { View, Text, Alert, Dimensions, ScrollView } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BarChart } from 'react-native-chart-kit';

// const HomeScreen = () => {
//   const [moodCounts, setMoodCounts] = useState({
//     Heureux: 0,
//     Triste: 0,
//     "En colère": 0,
//     Stressé: 0,
//     Maussade: 0,
//     Blasé: 0,
//     Fatigué: 0,
//   });

//   useEffect(() => {
//     const fetchMoods = async () => {
//       const token = await AsyncStorage.getItem('token');
//       try {
//         const response = await axios.get('http://localhost:1337/api/moods', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const fetchedMoods = response.data.data;

//         // Compter la quantité de chaque humeur
//         const moodCountsCopy = {
//           Heureux: 0,
//           Triste: 0,
//           "En colère": 0,
//           Stressé: 0,
//           Maussade: 0,
//           Blasé: 0,
//           Fatigué: 0,
//         };
        
//         fetchedMoods.forEach((mood) => {
//           const currentMood = mood.attributes.Humeur;
//           if (moodCountsCopy[currentMood] !== undefined) {
//             moodCountsCopy[currentMood] += 1;
//           }
//         });

//         setMoodCounts(moodCountsCopy);
//       } catch (error) {
//         console.log(error);
//         Alert.alert('Erreur', 'Impossible de récupérer les humeurs');
//       }
//     };

//     fetchMoods();
//   }, []);

//   const screenWidth = Dimensions.get('window').width;

//   // Préparer les données pour le graphique
//   const chartData = {
//     labels: Object.keys(moodCounts),  // Les humeurs
//     datasets: [
//       {
//         data: Object.values(moodCounts),  // Quantité pour chaque humeur
//       },
//     ],
//   };

//   return (
//     <ScrollView>
//       <View style={{ padding: 20 }}>
//         <Text style={{ fontSize: 18, marginBottom: 10 }}>Résumé de vos humeurs :</Text>
//         <BarChart
//           data={chartData}
//           width={screenWidth - 40}  // Largeur du graphique
//           height={220}  // Hauteur du graphique
//           fromZero={true}  // Commencer le graphique à zéro
//           chartConfig={{
//             backgroundColor: '#ffffff',
//             backgroundGradientFrom: '#f5f5f5',
//             backgroundGradientTo: '#ffffff',
//             decimalPlaces: 0, // Pas de décimales
//             color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;














































// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert, Dimensions, ScrollView } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BarChart } from 'react-native-chart-kit';

// const HomeScreen = ({ navigation }) => {
//   const [moods, setMoods] = useState([]);
//   const [moodCounts, setMoodCounts] = useState({
//     Heureux: 0,
//     Triste: 0,
//     "En colère": 0,
//     Stressé: 0,
//     Maussade: 0,
//     Blasé: 0,
//     Fatigué: 0,
//   });

//   useEffect(() => {
//     const fetchMoods = async () => {
//       const token = await AsyncStorage.getItem('token');
//       console.log("Token utilisé pour l'API :", token);

//       if (!token) {
//         Alert.alert('Erreur', 'Token non disponible');
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:1337/api/moods', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Réponse de l'API :", response.data);

//         const fetchedMoods = response.data.data;

//         // Compter les occurrences des différentes humeurs
//         const moodCountsCopy = {
//           Heureux: 0,
//           Triste: 0,
//           "En colère": 0,
//           Stressé: 0,
//           Maussade: 0,
//           Blasé: 0,
//           Fatigué: 0,
//         };

//         // Mise à jour du compteur des humeurs
//         fetchedMoods.forEach((mood) => {
//           const currentMood = mood.Humeur;  // Accès direct à mood.Humeur
//           if (moodCountsCopy[currentMood] !== undefined) {
//             moodCountsCopy[currentMood] += 1;
//           }
//         });

//         setMoods(fetchedMoods);  // Met à jour le tableau des humeurs
//         setMoodCounts(moodCountsCopy);  // Met à jour le compteur des humeurs
//       } catch (error) {
//         console.log("Erreur lors de la récupération des humeurs :", error.response?.data || error.message);
//         Alert.alert('Erreur', 'Impossible de récupérer les humeurs');
//       }
//     };

//     fetchMoods();
//   }, []);

//   const screenWidth = Dimensions.get('window').width;

//   // Préparer les données pour le graphique
//   const chartData = {
//     labels: Object.keys(moodCounts),  // Les humeurs
//     datasets: [
//       {
//         data: Object.values(moodCounts),  // Quantité pour chaque humeur
//       },
//     ],
//   };

//   return (
//     <ScrollView>
//       <View style={{ padding: 20 }}>
//         <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
//         <Text style={{ fontSize: 18, marginBottom: 10 }}>Résumé de vos humeurs :</Text>

//         {/* Graphique des humeurs */}
//         <BarChart
//           data={chartData}
//           width={screenWidth - 40}  // Largeur du graphique
//           height={220}  // Hauteur du graphique
//           fromZero={true}  // Commencer le graphique à zéro
//           chartConfig={{
//             backgroundColor: '#ffffff',
//             backgroundGradientFrom: '#f5f5f5',
//             backgroundGradientTo: '#ffffff',
//             decimalPlaces: 0, // Pas de décimales
//             color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />

//         {/* Afficher les commentaires */}
//         <Text style={{ fontSize: 18, marginTop: 20 }}>Commentaires sur vos humeurs :</Text>
//         {moods.length > 0 ? (
//           moods.map((mood) => (
//             <View key={mood.id} style={{ marginBottom: 10 }}>
//               <Text style={{ fontWeight: 'bold' }}>{mood.Humeur}</Text>
//               <Text>{mood.Commentaire || "Pas de commentaire"}</Text>
//             </View>
//           ))
//         ) : (
//           <Text>Aucun commentaire disponible</Text>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;















































// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert, Dimensions, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Correct import
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BarChart } from 'react-native-chart-kit';

// const HomeScreen = ({ navigation }) => {
//   const [moods, setMoods] = useState([]);
//   const [moodCounts, setMoodCounts] = useState({
//     Heureux: 0,
//     Triste: 0,
//     "En colère": 0,
//     Stressé: 0,
//     Maussade: 0,
//     Blasé: 0,
//     Fatigué: 0,
//   });
//   const [filter, setFilter] = useState('7'); // Par défaut : filtre sur 7 jours

//   useEffect(() => {
//     const fetchMoods = async () => {
//       const token = await AsyncStorage.getItem('token');
//       console.log("Token utilisé pour l'API :", token);

//       if (!token) {
//         Alert.alert('Erreur', 'Token non disponible');
//         return;
//       }

//       try {
//         // Calcul de la date limite en fonction du filtre
//         const dateLimit = new Date();
//         dateLimit.setDate(dateLimit.getDate() - parseInt(filter)); // 7 ou 30 jours

//         const response = await axios.get('http://localhost:1337/api/moods', {
//           headers: { Authorization: `Bearer ${token}` },
//           params: {
//             filters: {
//               createdAt: { $gte: dateLimit.toISOString() },
//             },
//           },
//         });

//         console.log("Réponse de l'API :", response.data);

//         const fetchedMoods = response.data.data;

//         // Compter les occurrences des différentes humeurs
//         const moodCountsCopy = {
//           Heureux: 0,
//           Triste: 0,
//           "En colère": 0,
//           Stressé: 0,
//           Maussade: 0,
//           Blasé: 0,
//           Fatigué: 0,
//         };

//         // Mise à jour du compteur des humeurs
//         fetchedMoods.forEach((mood) => {
//           const currentMood = mood.Humeur;  // Accès direct à mood.Humeur
//           if (moodCountsCopy[currentMood] !== undefined) {
//             moodCountsCopy[currentMood] += 1;
//           }
//         });

//         setMoods(fetchedMoods);  // Met à jour le tableau des humeurs
//         setMoodCounts(moodCountsCopy);  // Met à jour le compteur des humeurs
//       } catch (error) {
//         console.log("Erreur lors de la récupération des humeurs :", error.response?.data || error.message);
//         Alert.alert('Erreur', 'Impossible de récupérer les humeurs');
//       }
//     };

//     fetchMoods();
//   }, [filter]); // Relance la récupération des humeurs lorsque le filtre change

//   const screenWidth = Dimensions.get('window').width;

//   // Préparer les données pour le graphique
//   const chartData = {
//     labels: Object.keys(moodCounts),  // Les humeurs
//     datasets: [
//       {
//         data: Object.values(moodCounts),  // Quantité pour chaque humeur
//       },
//     ],
//   };

//   return (
//     <ScrollView>
//       <View style={{ padding: 20 }}>
//         <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
//         <Text style={{ fontSize: 18, marginBottom: 10 }}>Résumé de vos humeurs :</Text>

//         {/* Sélecteur pour choisir la période */}
//         <Text>Choisir une période :</Text>
//         <Picker
//           selectedValue={filter}
//           onValueChange={(itemValue) => setFilter(itemValue)}
//         >
//           <Picker.Item label="7 derniers jours" value="7" />
//           <Picker.Item label="30 derniers jours" value="30" />
//         </Picker>

//         {/* Graphique des humeurs */}
//         <BarChart
//           data={chartData}
//           width={screenWidth - 40}  // Largeur du graphique
//           height={220}  // Hauteur du graphique
//           fromZero={true}  // Commencer le graphique à zéro
//           chartConfig={{
//             backgroundColor: '#ffffff',
//             backgroundGradientFrom: '#f5f5f5',
//             backgroundGradientTo: '#ffffff',
//             decimalPlaces: 0, // Pas de décimales
//             color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />

//         {/* Afficher les commentaires */}
//         <Text style={{ fontSize: 18, marginTop: 20 }}>Commentaires sur vos humeurs :</Text>
//         {moods.length > 0 ? (
//           moods.map((mood) => (
//             <View key={mood.id} style={{ marginBottom: 10 }}>
//               <Text style={{ fontWeight: 'bold' }}>{mood.Humeur}</Text>
//               <Text>{mood.Commentaire || "Pas de commentaire"}</Text>
//             </View>
//           ))
//         ) : (
//           <Text>Aucun commentaire disponible</Text>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;
























































// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert, Dimensions, ScrollView } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BarChart } from 'react-native-chart-kit';

// // Fonction pour générer une citation du jour
// const getDailyQuote = () => {
//   const quotes = [
//     "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
//     "Le plus grand plaisir de la vie est de réaliser ce que les autres vous pensent incapable de réaliser.",
//     "Chaque jour est une nouvelle chance de faire mieux qu'hier.",
//     "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
//     "Rien n'est impossible, seul le possible prend du temps."
//   ];
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   return quotes[randomIndex];
// };

// const HomeScreen = ({ navigation }) => {
//   const [moods, setMoods] = useState([]);
//   const [moodCounts, setMoodCounts] = useState({
//     Heureux: 0,
//     Triste: 0,
//     "En colère": 0,
//     Stressé: 0,
//     Maussade: 0,
//     Blasé: 0,
//     Fatigué: 0,
//   });
//   const [selectedFilter, setSelectedFilter] = useState('7'); // Filtre par défaut sur 7 jours
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchMoods = async () => {
//       const token = await AsyncStorage.getItem('token');
//       console.log("Token utilisé pour l'API :", token);

//       if (!token) {
//         Alert.alert('Erreur', 'Token non disponible');
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:1337/api/moods', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Réponse de l'API :", response.data);

//         const fetchedMoods = response.data.data;

//         // Si aucune humeur n'est récupérée
//         if (fetchedMoods.length === 0) {
//           setError(true); // Affiche la page vide si pas d'humeurs
//           return;
//         }

//         // Compter les occurrences des différentes humeurs
//         const moodCountsCopy = {
//           Heureux: 0,
//           Triste: 0,
//           "En colère": 0,
//           Stressé: 0,
//           Maussade: 0,
//           Blasé: 0,
//           Fatigué: 0,
//         };

//         // Mise à jour du compteur des humeurs
//         fetchedMoods.forEach((mood) => {
//           const currentMood = mood.Humeur;  // Accès direct à mood.Humeur
//           if (moodCountsCopy[currentMood] !== undefined) {
//             moodCountsCopy[currentMood] += 1;
//           }
//         });

//         setMoods(fetchedMoods);  // Met à jour le tableau des humeurs
//         setMoodCounts(moodCountsCopy);  // Met à jour le compteur des humeurs
//         setError(false);  // Réinitialise l'état d'erreur si humeurs récupérées
//       } catch (error) {
//         console.log("Erreur lors de la récupération des humeurs :", error.response?.data || error.message);
//         setError(true); // Affiche la page vide en cas d'erreur
//       }
//     };

//     fetchMoods();
//   }, []);

//   const screenWidth = Dimensions.get('window').width;

//   // Préparer les données pour le graphique
//   const chartData = {
//     labels: Object.keys(moodCounts),  // Les humeurs
//     datasets: [
//       {
//         data: Object.values(moodCounts),  // Quantité pour chaque humeur
//       },
//     ],
//   };

//   // Si erreur ou aucune humeur récupérée, afficher une page vide avec une citation
//   if (error || moods.length === 0) {
//     return (
//       <View style={{ padding: 20 }}>
//         <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
//         <Text style={{ fontStyle: 'italic', marginTop: 20, textAlign: 'center' }}>
//           "{getDailyQuote()}"
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView>
//       <View style={{ padding: 20 }}>
//         <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />

//         {/* Boutons pour les filtres */}
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
//           <Button
//             title="Afficher les 7 derniers jours"
//             onPress={() => setSelectedFilter('7')}
//             color={selectedFilter === '7' ? 'blue' : 'gray'}
//           />
//           <Button
//             title="Afficher les 30 derniers jours"
//             onPress={() => setSelectedFilter('30')}
//             color={selectedFilter === '30' ? 'blue' : 'gray'}
//           />
//         </View>

//         {/* Graphique des humeurs */}
//         <BarChart
//           data={chartData}
//           width={screenWidth - 40}  // Largeur du graphique
//           height={220}  // Hauteur du graphique
//           fromZero={true}  // Commencer le graphique à zéro
//           chartConfig={{
//             backgroundColor: '#ffffff',
//             backgroundGradientFrom: '#f5f5f5',
//             backgroundGradientTo: '#ffffff',
//             decimalPlaces: 0, // Pas de décimales
//             color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />

//         {/* Afficher les commentaires */}
//         <Text style={{ fontSize: 18, marginTop: 20 }}>Commentaires sur vos humeurs :</Text>
//         {moods.length > 0 ? (
//           moods.map((mood) => (
//             <View key={mood.id} style={{ marginBottom: 10 }}>
//               <Text style={{ fontWeight: 'bold' }}>{mood.Humeur}</Text>
//               <Text>{mood.Commentaire || "Pas de commentaire"}</Text>
//             </View>
//           ))
//         ) : (
//           <Text>Aucun commentaire disponible</Text>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;










































// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert, Dimensions, ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BarChart } from 'react-native-chart-kit';

// const HomeScreen = ({ navigation }) => {
//   const [moods, setMoods] = useState([]);
//   const [moodCounts, setMoodCounts] = useState({
//     'Pet’ la forme': 0,
//     Triste: 0,
//     Aigris: 0,
//     Stressé: 0,
//     'Dans le mou': 0,
//     Blasé: 0,
//     Fatigué: 0,
//     'Dans le mood': 0,
//   });
//   const [selectedFilter, setSelectedFilter] = useState('7'); // Filtre par défaut sur 7 jours
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchMoods = async () => {
//       const token = await AsyncStorage.getItem('token');
//       if (!token) {
//         Alert.alert('Erreur', 'Token non disponible');
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:1337/api/moods', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const fetchedMoods = response.data.data;

//         if (fetchedMoods.length === 0) {
//           setError(true);
//           return;
//         }

//         const moodCountsCopy = {
//           'Pet’ la forme': 0,
//           Triste: 0,
//           Aigris: 0,
//           Stressé: 0,
//           'Dans le mou': 0,
//           Blasé: 0,
//           Fatigué: 0,
//           'Dans le mood': 0,
//         };

//         fetchedMoods.forEach((mood) => {
//           const currentMood = mood.Humeur;
//           if (moodCountsCopy[currentMood] !== undefined) {
//             moodCountsCopy[currentMood] += 1;
//           }
//         });

//         setMoods(fetchedMoods);
//         setMoodCounts(moodCountsCopy);
//         setError(false);
//       } catch (error) {
//         setError(true);
//       }
//     };

//     fetchMoods();
//   }, [selectedFilter]);

//   const screenWidth = Dimensions.get('window').width;

//   const chartData = {
//     labels: Object.keys(moodCounts),
//     datasets: [
//       {
//         data: Object.values(moodCounts),
//       },
//     ],
//   };

//   if (error || moods.length === 0) {
//     return (
//       <View style={styles.emptyContainer}>
//         <Button title="Poster une humeur" onPress={() => navigation.navigate('Mood')} />
//         <Text style={styles.quote}>
//           "{getDailyQuote()}"
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.filterContainer}>
//         <Button
//           title="Cette semaine"
//           onPress={() => setSelectedFilter('7')}
//           color={selectedFilter === '7' ? '#FFC107' : 'gray'}
//         />
//         <Button
//           title="Mois dernier"
//           onPress={() => setSelectedFilter('30')}
//           color={selectedFilter === '30' ? '#FFC107' : 'gray'}
//         />
//       </View>

//       <Text style={styles.title}>Bonjour, Juliette</Text>
//       <Text style={styles.subtitle}>Dimanche, 2 Janvier</Text>
//       <Button title="Donner mon mood" onPress={() => navigation.navigate('Mood')} color="#FFC107" />

//       {/* Graphique */}
//       <BarChart
//         data={chartData}
//         width={screenWidth - 40}
//         height={250}
//         fromZero
//         chartConfig={{
//           backgroundColor: '#ffffff',
//           backgroundGradientFrom: '#f5f5f5',
//           backgroundGradientTo: '#ffffff',
//           decimalPlaces: 0,
//           color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
//           labelColor: () => `rgba(0, 0, 0, 1)`,
//           propsForLabels: {
//             fontSize: 10,
//             rotation: 45, // Inclinaison des labels
//             textAlign: 'center',
//           },
//           barPercentage: 0.5, // Taille des barres plus petites pour éviter le chevauchement
//         }}
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />

//       {/* Commentaires */}
//       <Text style={styles.commentsTitle}>Commentaires sur les humeurs :</Text>
//       {moods.map((mood) => (
//         <View key={mood.id} style={styles.commentContainer}>
//           <Text style={styles.moodLabel}>{mood.Humeur}</Text>
//           <Text>{mood.Commentaire || 'Pas de commentaire'}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const getDailyQuote = () => {
//   const quotes = [
//     "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
//     "Le plus grand plaisir de la vie est de réaliser ce que les autres vous pensent incapable de réaliser.",
//     "Chaque jour est une nouvelle chance de faire mieux qu'hier.",
//     "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
//     "Rien n'est impossible, seul le possible prend du temps.",
//   ];
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   return quotes[randomIndex];
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   emptyContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   commentsTitle: {
//     fontSize: 18,
//     marginTop: 20,
//     fontWeight: 'bold',
//   },
//   commentContainer: {
//     marginBottom: 10,
//   },
//   moodLabel: {
//     fontWeight: 'bold',
//   },
//   quote: {
//     fontStyle: 'italic',
//     marginTop: 20,
//     textAlign: 'center',
//   },
// });

// export default HomeScreen;







































// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BarChart } from 'react-native-chart-kit';

// const HomeScreen = ({ navigation }) => {
//   const [moods, setMoods] = useState([]);
//   const [moodCounts, setMoodCounts] = useState({
//     'Pet’ la forme': 0,
//     Triste: 0,
//     Aigris: 0,
//     Stressé: 0,
//     'Dans le mou': 0,
//     Blasé: 0,
//     Fatigué: 0,
//     'Dans le mood': 0,
//   });
//   const [selectedFilter, setSelectedFilter] = useState('7');
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchMoods = async () => {
//       const token = await AsyncStorage.getItem('token');
//       if (!token) {
//         Alert.alert('Erreur', 'Token non disponible');
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:1337/api/moods', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const fetchedMoods = response.data.data;

//         if (fetchedMoods.length === 0) {
//           setError(true);
//           return;
//         }

//         const moodCountsCopy = {
//           'Pet’ la forme': 0,
//           Triste: 0,
//           Aigris: 0,
//           Stressé: 0,
//           'Dans le mou': 0,
//           Blasé: 0,
//           Fatigué: 0,
//           'Dans le mood': 0,
//         };

//         fetchedMoods.forEach((mood) => {
//           const currentMood = mood.Humeur;
//           if (moodCountsCopy[currentMood] !== undefined) {
//             moodCountsCopy[currentMood] += 1;
//           }
//         });

//         setMoods(fetchedMoods);
//         setMoodCounts(moodCountsCopy);
//         setError(false);
//       } catch (error) {
//         setError(true);
//       }
//     };

//     fetchMoods();
//   }, [selectedFilter]);

//   const screenWidth = Dimensions.get('window').width;

//   const chartData = {
//     labels: Object.keys(moodCounts),
//     datasets: [
//       {
//         data: Object.values(moodCounts),
//       },
//     ],
//   };

//   if (error || moods.length === 0) {
//     return (
//       <View style={styles.emptyContainer}>
//         <View style={styles.profileContainer}>
//           <View style={styles.avatar}></View>
//           <Text style={styles.title}>Bonjour, Juliette</Text>
//           <Text style={styles.subtitle}>Dimanche, 2 Janvier</Text>
//         </View>
//         <Text style={styles.question}>Comment te sens-tu aujourd'hui ?</Text>
//         <TouchableOpacity style={styles.moodButton} onPress={() => navigation.navigate('Mood')}>
//           <Text style={styles.moodButtonText}>Donner mon mood</Text>
//         </TouchableOpacity>
//         <Text style={styles.quote}>"{getDailyQuote()}"</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Bonjour, Juliette</Text>
//       <Text style={styles.subtitle}>Dimanche, 2 Janvier</Text>
//       <Button title="Donner mon mood" onPress={() => navigation.navigate('Mood')} color="#FFC107" />

//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[
//             styles.filterButton,
//             selectedFilter === '7' && styles.activeFilterButton,
//           ]}
//           onPress={() => setSelectedFilter('7')}
//         >
//           <Text style={styles.filterButtonText}>Cette semaine</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[
//             styles.filterButton,
//             selectedFilter === '30' && styles.activeFilterButton,
//           ]}
//           onPress={() => setSelectedFilter('30')}
//         >
//           <Text style={styles.filterButtonText}>Mois dernier</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Graphique */}
//       <BarChart
//         data={chartData}
//         width={screenWidth - 40}
//         height={280}
//         fromZero
//         chartConfig={{
//           backgroundColor: '#ffffff',
//           backgroundGradientFrom: '#f5f5f5',
//           backgroundGradientTo: '#ffffff',
//           decimalPlaces: 0,
//           color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
//           labelColor: () => `rgba(0, 0, 0, 1)`,
//           propsForLabels: {
//             fontSize: 10,
//             rotation: 45, // Inclinaison des labels
//             textAlign: 'center',
//           },
//           barPercentage: 0.5,
//         }}
//         style={styles.chart}
//       />

//       {/* Commentaires */}
//       <Text style={styles.commentsTitle}>Commentaires sur vos humeurs :</Text>
//       {moods.map((mood) => (
//         <View key={mood.id} style={styles.commentContainer}>
//           <Text style={styles.moodLabel}>{mood.Humeur}</Text>
//           <Text>{mood.Commentaire || 'Pas de commentaire'}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const getDailyQuote = () => {
//   const quotes = [
//     "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
//     "Le plus grand plaisir de la vie est de réaliser ce que les autres vous pensent incapable de réaliser.",
//     "Chaque jour est une nouvelle chance de faire mieux qu'hier.",
//     "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
//     "Rien n'est impossible, seul le possible prend du temps.",
//   ];
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   return quotes[randomIndex];
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#C8E6C9',
//     borderRadius: 40,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   question: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   moodButton: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 8,
//     marginBottom: 40,
//   },
//   moodButtonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   quote: {
//     fontStyle: 'italic',
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   filterButton: {
//     padding: 10,
//     backgroundColor: 'gray',
//     borderRadius: 8,
//   },
//   activeFilterButton: {
//     backgroundColor: '#FFC107',
//   },
//   filterButtonText: {
//     color: '#FFF',
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   commentsTitle: {
//     fontSize: 18,
//     marginTop: 20,
//     fontWeight: 'bold',
//   },
//   commentContainer: {
//     marginBottom: 10,
//   },
//   moodLabel: {
//     fontWeight: 'bold',
//   },
// });

// export default HomeScreen;











































import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Dimensions, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';  // Ajout de l'import Image
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BarChart } from 'react-native-chart-kit';

// Assurez-vous que l'image est disponible à cet emplacement
const avatarImage = require('../asset_front/07 Profile avatar.png');  // Change le chemin si nécessaire

const HomeScreen = ({ navigation }) => {
  const [moods, setMoods] = useState([]);
  const [moodCounts, setMoodCounts] = useState({
    'Pet’ la forme': 0,
    Triste: 0,
    Aigris: 0,
    Stressé: 0,
    'Dans le mou': 0,
    Blasé: 0,
    Fatigué: 0,
    'Dans le mood': 0,
  });
  const [selectedFilter, setSelectedFilter] = useState('7');
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMoods = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Erreur', 'Token non disponible');
        return;
      }

      try {
        const response = await axios.get('http://localhost:1337/api/moods', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const fetchedMoods = response.data.data;

        if (fetchedMoods.length === 0) {
          setError(true);
          return;
        }

        const moodCountsCopy = {
          'Pet’ la forme': 0,
          Triste: 0,
          Aigris: 0,
          Stressé: 0,
          'Dans le mou': 0,
          Blasé: 0,
          Fatigué: 0,
          'Dans le mood': 0,
        };

        fetchedMoods.forEach((mood) => {
          const currentMood = mood.Humeur;
          if (moodCountsCopy[currentMood] !== undefined) {
            moodCountsCopy[currentMood] += 1;
          }
        });

        setMoods(fetchedMoods);
        setMoodCounts(moodCountsCopy);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMoods();
  }, [selectedFilter]);

  const screenWidth = Dimensions.get('window').width;

  const chartData = {
    labels: Object.keys(moodCounts),
    datasets: [
      {
        data: Object.values(moodCounts),
      },
    ],
  };

  // Affichage en cas d'erreur ou pas d'humeur récupérée
  if (error || moods.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.profileContainer}>
          {/* Utilisation de l'image à la place du cercle vert */}
          <Image source={avatarImage} style={styles.avatar} />
          <Text style={styles.title}>Bonjour, Juliette</Text>
          <Text style={styles.subtitle}>Dimanche, 2 Janvier</Text>
        </View>
        <Text style={styles.question}>Comment te sens-tu aujourd'hui ?</Text>
        <TouchableOpacity style={styles.moodButton} onPress={() => navigation.navigate('Mood')}>
          <Text style={styles.moodButtonText}>Donner mon mood</Text>
        </TouchableOpacity>
        <Text style={styles.quote}>"{getDailyQuote()}"</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bonjour, Juliette</Text>
      <Text style={styles.subtitle}>Dimanche, 2 Janvier</Text>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === '7' && styles.activeFilterButton,
          ]}
          onPress={() => setSelectedFilter('7')}
        >
          <Text style={styles.filterButtonText}>Cette semaine</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === '30' && styles.activeFilterButton,
          ]}
          onPress={() => setSelectedFilter('30')}
        >
          <Text style={styles.filterButtonText}>Mois dernier</Text>
        </TouchableOpacity>
      </View>

      {/* Graphique */}
      <BarChart
        data={chartData}
        width={screenWidth - 40}
        height={280}
        fromZero
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          labelColor: () => `rgba(0, 0, 0, 1)`,
          propsForLabels: {
            fontSize: 10,
            rotation: 45, // Inclinaison des labels
            textAlign: 'center',
          },
          barPercentage: 0.5,
        }}
        style={styles.chart}
      />

      {/* Commentaires */}
      <Text style={styles.commentsTitle}>Commentaires sur vos humeurs :</Text>
      {moods.map((mood) => (
        <View key={mood.id} style={styles.commentContainer}>
          <Text style={styles.moodLabel}>{mood.Humeur}</Text>
          <Text>{mood.Commentaire || 'Pas de commentaire'}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const getDailyQuote = () => {
  const quotes = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    "Le plus grand plaisir de la vie est de réaliser ce que les autres vous pensent incapable de réaliser.",
    "Chaque jour est une nouvelle chance de faire mieux qu'hier.",
    "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
    "Rien n'est impossible, seul le possible prend du temps.",
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 80,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Permet de remonter les éléments
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50, // Ajout pour remonter le bloc
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40, // Rond
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  moodButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 40,
  },
  moodButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quote: {
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  activeFilterButton: {
    backgroundColor: '#FFC107',
  },
  filterButtonText: {
    color: '#FFF',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  commentsTitle: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  commentContainer: {
    marginBottom: 10,
  },
  moodLabel: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;














































// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert, Dimensions, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BarChart } from 'react-native-chart-kit';
// import * as ImagePicker from 'expo-image-picker';

// const HomeScreen = ({ navigation }) => {
//   const [moods, setMoods] = useState([]);
//   const [moodCounts, setMoodCounts] = useState({
//     'Pet’ la forme': 0,
//     Triste: 0,
//     Aigris: 0,
//     Stressé: 0,
//     'Dans le mou': 0,
//     Blasé: 0,
//     Fatigué: 0,
//     'Dans le mood': 0,
//   });
//   const [selectedFilter, setSelectedFilter] = useState('7');
//   const [error, setError] = useState(false);
//   const [avatar, setAvatar] = useState(null);  // Pour gérer la photo d'avatar

//   useEffect(() => {
//     const fetchMoods = async () => {
//       const token = await AsyncStorage.getItem('token');
//       if (!token) {
//         Alert.alert('Erreur', 'Token non disponible');
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:1337/api/moods', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const fetchedMoods = response.data.data;

//         if (fetchedMoods.length === 0) {
//           setError(true);
//           return;
//         }

//         const moodCountsCopy = {
//           'Pet’ la forme': 0,
//           Triste: 0,
//           Aigris: 0,
//           Stressé: 0,
//           'Dans le mou': 0,
//           Blasé: 0,
//           Fatigué: 0,
//           'Dans le mood': 0,
//         };

//         fetchedMoods.forEach((mood) => {
//           const currentMood = mood.Humeur;
//           if (moodCountsCopy[currentMood] !== undefined) {
//             moodCountsCopy[currentMood] += 1;
//           }
//         });

//         setMoods(fetchedMoods);
//         setMoodCounts(moodCountsCopy);
//         setError(false);
//       } catch (error) {
//         setError(true);
//       }
//     };

//     fetchMoods();
//   }, [selectedFilter]);

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setAvatar(result.uri);  // On met à jour l'URI de l'avatar
//     }
//   };

//   const screenWidth = Dimensions.get('window').width;

//   const chartData = {
//     labels: Object.keys(moodCounts),
//     datasets: [
//       {
//         data: Object.values(moodCounts),
//       },
//     ],
//   };

//   if (error || moods.length === 0) {
//     return (
//       <View style={styles.emptyContainer}>
//         <View style={styles.profileContainer}>
//           <TouchableOpacity onPress={pickImage}>
//             {avatar ? (
//               <Image source={{ uri: avatar }} style={styles.avatar} />
//             ) : (
//               <View style={styles.avatarPlaceholder} />
//             )}
//           </TouchableOpacity>
//           <Text style={styles.title}>Bonjour, Juliette</Text>
//           <Text style={styles.subtitle}>Dimanche, 2 Janvier</Text>
//         </View>
//         <Text style={styles.question}>Comment te sens-tu aujourd'hui ?</Text>
//         <TouchableOpacity style={styles.moodButton} onPress={() => navigation.navigate('Mood')}>
//           <Text style={styles.moodButtonText}>Donner mon mood</Text>
//         </TouchableOpacity>
//         <Text style={styles.quote}>"{getDailyQuote()}"</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.profileContainer}>
//         <TouchableOpacity onPress={pickImage}>
//           {avatar ? (
//             <Image source={{ uri: avatar }} style={styles.avatar} />
//           ) : (
//             <View style={styles.avatarPlaceholder} />
//           )}
//         </TouchableOpacity>
//         <Text style={styles.title}>Bonjour, Juliette</Text>
//         <Text style={styles.subtitle}>Dimanche, 2 Janvier</Text>
//       </View>

//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[
//             styles.filterButton,
//             selectedFilter === '7' && styles.activeFilterButton,
//           ]}
//           onPress={() => setSelectedFilter('7')}
//         >
//           <Text style={styles.filterButtonText}>Cette semaine</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[
//             styles.filterButton,
//             selectedFilter === '30' && styles.activeFilterButton,
//           ]}
//           onPress={() => setSelectedFilter('30')}
//         >
//           <Text style={styles.filterButtonText}>Mois dernier</Text>
//         </TouchableOpacity>
//       </View>

//       <BarChart
//         data={chartData}
//         width={screenWidth - 40}
//         height={280}
//         fromZero
//         chartConfig={{
//           backgroundColor: '#ffffff',
//           backgroundGradientFrom: '#f5f5f5',
//           backgroundGradientTo: '#ffffff',
//           decimalPlaces: 0,
//           color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
//           labelColor: () => `rgba(0, 0, 0, 1)`,
//           propsForLabels: {
//             fontSize: 10,
//             rotation: 45,
//             textAlign: 'center',
//           },
//           barPercentage: 0.5,
//         }}
//         style={styles.chart}
//       />

//       <Text style={styles.commentsTitle}>Commentaires sur vos humeurs :</Text>
//       {moods.map((mood) => (
//         <View key={mood.id} style={styles.commentContainer}>
//           <Text style={styles.moodLabel}>{mood.Humeur}</Text>
//           <Text>{mood.Commentaire || 'Pas de commentaire'}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const getDailyQuote = () => {
//   const quotes = [
//     "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
//     "Le plus grand plaisir de la vie est de réaliser ce que les autres vous pensent incapable de réaliser.",
//     "Chaque jour est une nouvelle chance de faire mieux qu'hier.",
//     "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
//     "Rien n'est impossible, seul le possible prend du temps.",
//   ];
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   return quotes[randomIndex];
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 10,
//   },
//   avatarPlaceholder: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#C8E6C9',
//     borderRadius: 40,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   question: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   moodButton: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 8,
//     marginBottom: 40,
//   },
//   moodButtonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   quote: {
//     fontStyle: 'italic',
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   filterButton: {
//     padding: 10,
//     backgroundColor: 'gray',
//     borderRadius: 8,
//   },
//   activeFilterButton: {
//     backgroundColor: '#FFC107',
//   },
//   filterButtonText: {
//     color: '#FFF',
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   commentsTitle: {
//     fontSize: 18,
//     marginTop: 20,
//     fontWeight: 'bold',
//   },
//   commentContainer: {
//     marginBottom: 10,
// },
// moodLabel: {
//   fontWeight: 'bold',
// },
// });

// export default HomeScreen;