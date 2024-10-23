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