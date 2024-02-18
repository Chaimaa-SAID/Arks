### Étape 1: Initialisation du Projet

Assurez-vous d'avoir Node.js installé sur votre système.

```bash
# Initialisez un nouveau projet Node.js
npm init -y
# Installez Express
npm install express

# Installez Nodemon pour le développement
npm install nodemon --save-dev
# Démarrez le serveur avec Nodemon
nodemon app.js

# Routes Disponibles
# GET /posts: Récupérer tous les articles de blog.
# GET /posts/:id: Récupérer un article de blog spécifique par son ID.
# POST /posts: Créer un nouvel article de blog.
# PUT /posts/:id: Mettre à jour un article de blog existant.
# DELETE /posts/:id: Supprimer un article de blog existant.