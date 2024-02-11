# ATM Management System

Ce système de gestion ATM est une application Node.js permettant de gérer des opérations bancaires de base telles que la vérification du solde, le dépôt d'argent, le retrait d'argent et la consultation de l'historique des transactions. L'application utilise le système de fichiers pour persister les données utilisateur et les transactions, et utilise le module d'événements de Node.js pour gérer différentes opérations.

## Installation et utilisation

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre système.
3. Exécutez `npm install` pour installer les dépendances nécessaires.
4. Exécutez l'application en utilisant la commande `node atm.js`.
5. Suivez les instructions à l'écran pour utiliser l'application.

## Structure du code

- `atm.js`: Le fichier principal contenant le code de l'application.
- `users.json`: Fichier JSON pour stocker les données des utilisateurs.
- `transactions.json`: Fichier JSON pour stocker les données des transactions.

## Fonctionnalités

- Ajout de nouveaux utilisateurs avec génération automatique d'un identifiant de compte et d'un code PIN.
- Authentification des utilisateurs existants.
- Vérification du solde des comptes.
- Dépôt d'argent dans les comptes.
- Retrait d'argent des comptes.
- Consultation de l'historique des transactions.
- Gestion des erreurs pour les cas tels que les tentatives de connexion échouées, les fonds insuffisants, etc.

## Fonctionnalités bonus

- Limites de montant de retrait (max. 5000 DH par transaction).
- Interface en ligne de commande (CLI) pour une meilleure interaction avec le système.

---

Ce projet a été réalisé dans le cadre d'un exercice pratique pour développer des compétences en programmation Node.js.
