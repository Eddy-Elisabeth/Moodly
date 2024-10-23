🌟 Moodly - Application de Mood Tracking 🌟
Moodly est une application mobile qui permet de suivre le moral des employés en entreprise. Le projet a pour but de fournir aux managers une vue d'ensemble sur l'état d'esprit de leurs équipes, tout en garantissant l'anonymat des utilisateurs. Les employés peuvent ainsi indiquer leur humeur de manière simple et rapide.

🚀 Objectifs du projet
🧑‍💼 Managers : Avoir une vue "équipe" avec un graphique des humeurs des 30 derniers jours pour faciliter la prise de décision.
👩‍💻 Employés : Pouvoir renseigner leur humeur de manière anonyme via une interface simple et intuitive.
🎯 MVP : Développer une version fonctionnelle de l’application avec les fonctionnalités principales (connexion, soumission d'humeur, visualisation des données par les managers).
🛠️ Technologies Utilisées
🔧 Backend :
Strapi (Headless CMS) : Gestion des données utilisateurs et humeurs.
Node.js : Serveur pour Strapi.
📱 Frontend :
React Native : Interface utilisateur mobile.
Axios : Pour les requêtes API.
Chart.js : Graphiques pour la visualisation des humeurs.
📋 Fonctionnalités Clés
🔒 Connexion : Gestion des droits d’accès avec deux types de profils :

Utilisateur normal : Peut poster son humeur.
Manager : Peut consulter un graphique des humeurs des membres de son équipe.
📊 Suivi des Humeurs :

Graphiques qui permettent de visualiser les humeurs sur 7 ou 30 jours.
Anonymisation des données pour respecter la confidentialité des employés.
👤 Gestion des Profils :

Chaque utilisateur peut modifier son avatar.
Les utilisateurs normaux peuvent poster leur humeur anonymement.
🎨 Design & UX
Utilisation d'une interface claire et minimaliste pour favoriser une saisie rapide.
Design adapté aux utilisateurs pour une expérience fluide, qu’ils soient managers ou employés.
🚀 Comment démarrer le projet
Cloner le dépôt :

bash
Copier le code
git clone https://github.com/votre-utilisateur/moodly.git
Backend Strapi (Dossier my-strapi-project)

Accédez au dossier Strapi :

bash
Copier le code
cd my-strapi-project
Installez les dépendances :

bash
Copier le code
npm install
Lancez Strapi :

bash
Copier le code
npm run develop
Frontend Expo (Dossier front-react)

Accédez au dossier Frontend :

bash
Copier le code
cd front-react
Installez les dépendances :

bash
Copier le code
npm install
Lancez Expo :

bash
Copier le code
expo start
