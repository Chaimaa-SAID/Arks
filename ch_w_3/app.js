// Import des modules
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');

// Création de l'application Express
const app = express();
const PORT = 3000;

// Middleware pour parser le corps des requêtes
app.use(bodyParser.json());

// Utilisation des routes
app.use('/posts', postRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
