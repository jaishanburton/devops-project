# Partie 1 : Création de l'application web

## Description
Dans cette première phase du projet DevOps, nous avons créé une application web de gestion des utilisateurs.

## Fonctionnalités
- **API Utilisateur** : L'application offre une API RESTful permettant de créer, lire, mettre à jour et supprimer (CRUD) des utilisateurs.
- **Base de données Redis** : Les données sont stockées dans une base de données Redis, choisie pour sa performance en tant que magasin de structure de données en mémoire.
- **Tests** : L'application inclut des tests unitaires, des tests d'API, des tests de configuration et de connexion pour assurer la qualité et la robustesse du code.
- **Health Check** : Un endpoint de vérification de l'état est mis en place pour s'assurer que l'application fonctionne correctement.

## Installation et Configuration

### Prérequis
- Avoir Node.js et npm installés sur votre machine.
- Avoir une instance de Redis en cours d'exécution et accessible par l'application.

### Installation des dépendances
Pour installer toutes les dépendances nécessaires, exécutez la commande suivante :
```bash
npm install
```
### Lancement de l'application en mode de développement
Pour démarrer l'application en mode de développement avec nodemon (qui redémarrera le serveur automatiquement à chaque fois que vous modifiez un fichier source), utilisez :
```bash
npm run dev
```

### Exécution des tests
Pour exécuter les tests définis avec Mocha, utilisez :
```bash
npm test
```