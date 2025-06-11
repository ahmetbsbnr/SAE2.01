# SAE 2.01 – Application Web (IHM)

Ce projet a été réalisé dans le cadre de la SAE 2.01 à l'IUT de Metz. Il met en œuvre une architecture MVC complète pour une application web, incluant un backend en PHP (API) et un frontend en TypeScript/JavaScript avec des vues HTML/CSS.

---

## 🗂️ Table des matières

- [Structure du Projet](#structure-du-projet)
- [Installation](#installation)
- [Lancement de l'application](#lancement-de-lapplication)
- [Fonctionnalités](#fonctionnalités)
- [Configuration](#configuration)
- [Base de Données](#base-de-données)
- [Auteurs](#auteurs)

---

## 🏗️ Structure du Projet

Le projet suit une architecture **MVC**. Voici l'arborescence du dossier principal :

```
SAE201/
│
├── IHM_API/              # Backend API (PHP)
├── controleur/           # Contrôleurs (JS/TS compilés)
├── modele/               # Modèles (JS/TS compilés)
├── src/
│   ├── controleur/       # Source TypeScript des contrôleurs
│   └── modele/           # Source TypeScript des modèles
├── vue/
│   ├── css/              # Fichiers CSS pour la présentation
│   ├── images/           # Ressources graphiques
│   └── *.html            # Fichiers HTML des vues
├── tests/
│   └── @tests/           # Fichiers de tests
├── tsconfig.json         # Configuration TypeScript
├── package.json          # Dépendances et scripts du projet
├── package-lock.json     # Verrouillage des versions de dépendances
└── .DS_Store             # Fichier système macOS (à ignorer)
```

---

## ⚙️ Installation

1. **Cloner le projet** :
   ```bash
   git clone <url-du-repo>
   cd SAE201
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Compiler les fichiers TypeScript** :
   ```bash
   tsc
   ```

4. **Démarrer un serveur local** (optionnel) :
   Utiliser un serveur comme [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) pour tester les vues HTML localement.

---

## 🚀 Lancement de l'application

L'application est hébergée à l'adresse suivante :

🔗 [Accéder à l'application en ligne](https://devweb.iutmetz.univ-lorraine.fr/~e26350u/SSS2SSS/SAE201/SAE201/vue/abonnement_liste.html)

---

## ✨ Fonctionnalités

- Affichage et gestion des abonnements
- Architecture MVC modulaire
- Communication frontend-backend via une API PHP
- Interface responsive en HTML/CSS

---

## 🔧 Configuration

Le projet utilise TypeScript pour le développement. La configuration se trouve dans `tsconfig.json`. Le backend repose sur une base de données MySQL connectée via PHP.

---

## 🗃️ Base de Données

**Identifiants PHPMyAdmin** :
```
Utilisateur : e26350u_appli
Mot de passe : 32407595
Base de données : e26350u_SAE201
```

> ⚠️ **Attention** : Ne jamais publier ces informations en environnement de production ou sur un dépôt public.

---

## 👥 Auteurs

- **Ahmet BASBUNAR**
- **Léo DOBOS**
- Groupe G 3.1 – IUT de Metz
