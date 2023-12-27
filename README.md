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

# Partie 2 : Application du pipeline CI/CD

## Aperçu
Un pipeline d'intégration et de livraison continues (CI/CD) a été configuré et appliqué en utilisant GitHub Actions. Ce pipeline automatise les tests et le déploiement de notre application web sur Microsoft Azure App Service.

## Configuration du Pipeline CI/CD

- **GitHub Actions**: Un workflow de CI/CD a été mis en place dans le répertoire GitHub du projet pour automatiser les tests et le déploiement.
- **Tests Automatisés**: Les tests sont exécutés automatiquement à chaque push ou pull request pour garantir la non-régression du code.
- **Déploiement Automatique**: Après un succès des tests, le déploiement est effectué automatiquement vers Azure App Service.

## Déploiement sur Azure

L'application est déployée sur Azure App Service, offrant une plate-forme PaaS pour héberger des applications web :

- **URL de l'Application**: [my-devops-project.azurewebsites.net](http://my-devops-project.azurewebsites.net)
- **Environnement**: Configuré pour un environnement Linux avec Node.js 18 LTS.

## Instructions de Déploiement

Pour voir le déploiement en action ou pour déclencher un déploiement manuel, suivez ces étapes :

1. Connectez-vous à votre compte GitHub.
2. Naviguez vers le répertoire du projet sur GitHub.
3. Allez dans l'onglet 'Actions'.
4. Sélectionnez le workflow souhaité.
5. Cliquez sur 'Run workflow' pour déclencher le processus manuellement.

## Capture d'écran
![Capture d'écran de l'application web sur Azure App Service](images/2/azure.png)

# Partie 3 : Configuration et Provisionnement avec IaC

## Description
Cette partie du projet se concentre sur l'utilisation de Vagrant et Ansible pour configurer et provisionner une machine virtuelle (VM) sous Linux. Cela facilite la création d'un environnement de développement reproductible et la gestion de la configuration de l'application.

## Fonctionnalités
- **Vagrant** : Utilisé pour créer et configurer des environnements de développement légers, reproductibles et portables.
- **Ansible** : Employé pour le provisionnement automatique de la VM, incluant l'installation de l'environnement d'exécution du langage, de la base de données et de l'application.
- **Synchronisation de Dossiers** : Permet de partager facilement des fichiers entre l'hôte et la VM.
- **Health Check** : Configuration d'un point de terminaison pour vérifier l'état de santé de l'application afin d'assurer une surveillance continue.

## Installation et Configuration

### Prérequis
- Installer Vagrant et VirtualBox sur la machine.
- Installer Ansible pour le provisionnement automatique.

### Mise en Place de la VM avec Vagrant
Cloner le dépôt du projet et naviguer vers le sous-dossier `iac/`, puis initialiser et démarrer la VM avec la commande suivante :
```bash
vagrant up
```

### Provisionnement avec Ansible
Après le démarrage de la VM, lancer le provisionnement avec :
```bash
vagrant provision
```

### Connexion à la VM
Pour se connecter à la VM avec SSH et vérifier que tout est correctement configuré :
```bash
vagrant ssh
```

## Utilisation
Utiliser la VM provisionnée pour développer et tester l'application dans un environnement qui reflète la production, et profiter des dossiers synchronisés pour un développement facile.

## Test du Bilan de Santé de l'Application
Tester le point de terminaison de health check après le déploiement de l'application pour confirmer son bon fonctionnement :
```bash
curl http://localhost:PORT/health
```

## Nettoyage
Pour arrêter et supprimer la VM :
```bash
vagrant halt   # Pour arrêter la VM
vagrant destroy # Pour supprimer la VM et toutes ses ressources
```

## Captures d'écran
![Provision SSH](images/3/provision_ssh.png)

![Vagrant Up](images/3/up.png)

# Partie 4 : Conteneurisation avec Docker

## Création de l'image Docker
Pour conteneuriser l'application, les étapes suivantes ont été suivies :

1. Création d'un fichier `Dockerfile` à la racine du projet pour définir les étapes de construction de l'image Docker de l'application.

2. Construction de l'image Docker avec la commande :
```bash
docker build -t jaishan23/myproject:<tag> .
```

3. Vérifier l'image : Après la construction, il faut vérifier que l'image a été créée avec succès :
 ```bash
docker images
```
## Téléversement de l'image sur Docker Hub
Après la création de l'image Docker, les étapes pour la téléverser sur Docker Hub sont :

1. Connexion à Docker Hub avec la commande :
 ```bash
docker login
```

2. Téléversement de l'image construite sur le compte Docker Hub avec la commande :
 ```bash
docker push jaishan23/myproject:latest
```

## Utilisation de .dockerignore
Pour éviter d'inclure des fichiers inutiles dans l'image Docker, un fichier .dockerignore a été configuré avec les entrées suivantes :

- node_modules 
- npm-debug.log 
- Dockerfile
- .dockerignore 
- .git
- .gitignore

## Lien vers le Docker Hub
L'image est disponible publiquement sur Docker Hub à l'adresse suivante : jaishan23/myproject

## Captures d'écran
![DockerHub](images/4/image.png)

# Partie 5 : Orchestration de Conteneurs avec Docker Compose

## Configuration de Docker Compose

- **Créer un fichier docker-compose.yml** : 
  Un fichier `docker-compose.yml` est fourni à la racine du projet pour définir et exécuter l'ensemble des services de l'application dans des conteneurs Docker.

## Démarrage de l'Application avec Docker Compose

- **Utiliser Docker Compose pour démarrer l'application** : 
  Lancer l'application en exécutant le service défini dans le `docker-compose.yml`.
```bash
docker-compose up
```

- **Arrêter et retirer les conteneurs** : 
Stopper et supprimer tous les conteneurs créés par le `docker-compose.yml`.
```bash
docker-compose down
```

## Avantages de l'Utilisation de Docker Compose

- Simplifier le démarrage de l'application avec toutes ses dépendances en une seule commande.
- Assurer la cohérence des environnements de développement, de test et de production.
