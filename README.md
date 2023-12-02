# devops-project

## Sommaire

- [Introduction](#introduction)
- [Configuration de la VM avec Vagrant](#configuration-de-la-vm-avec-vagrant)
- [Provisionnement avec Ansible](#provisionnement-avec-ansible)
- [Démarrage et Vérification](#démarrage-et-vérification)

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les logiciels suivants sur votre machine hôte :
- Vagrant
- VirtualBox
- Ansible (pour les utilisateurs de Windows, Ansible peut être exécuté dans la VM)



## Système d'exploitation
Nous avons choisi **CentOS 7** comme système d'exploitation pour notre VM. Cette décision est basée sur la stabilité et la popularité de CentOS dans les environnements de production.

## Boîte Vagrant
La boîte (box) utilisée est `centos/7`, qui est une configuration pré-faite de CentOS 7, adaptée pour une utilisation rapide et efficace avec Vagrant.


## Mémoire et CPU
La VM est configurée avec **2048 MB** de mémoire et **1 CPU**. Cette configuration est un équilibre entre les performances et la consommation de ressources, permettant à la VM de fonctionner efficacement sur la plupart des systèmes hôtes.


## Port Forwarding
Nous avons mis en place un forwarding du port **3000** de la VM vers le port **3000** de la machine hôte. Cela permet d'accéder à l'application exécutée dans la VM depuis le navigateur de la machine hôte en utilisant `localhost:3000`.

## Synchronisation des dossiers

Nous avons configuré un dossier synchronisé entre la machine hôte et la VM. Le dossier `C:/Users/halim/Desktop/devops-project/userapi` sur l'hôte est synchronisé avec `/var/www/userapi` sur la VM. Cette synchronisation facilite le développement en permettant des modifications du code sur la machine hôte qui se reflètent directement dans la VM.


# Provisionnement avec Ansible

Cette section décrit comment la VM est provisionnée avec Ansible, incluant l'installation de Node.js, Redis, et le déploiement de votre application.


## Étape 1 : Démarrer la Machine Virtuelle

Pour démarrer la machine virtuelle configurée dans le `Vagrantfile`, exécutez la commande suivante dans votre terminal :

```bash
vagrant up
```

## Étape 2 : Provisionnement avec Ansible

Pour provisionner la machine virtuelle, exécutez :

```bash
vagrant provision
```


## Étape 3 : Accéder à l'Application

```bash
http://localhost:3000
```

## Installation de Redis

```bash
sudo yum install redis -y
sudo systemctl start redis
sudo systemctl enable redis
```

## Déploiement de l'Application

```bash
cd /var/www/userapi
npm install
npm start
```

## Vérification de l'État de l'Application


```bash
curl http://localhost:3000/-/health
```

