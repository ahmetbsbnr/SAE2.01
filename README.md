# SAE 2.01 – Application Web (IHM)

Ce projet a été réalisé dans le cadre de la SAE 2.01 à l'IUT de Metz. Il met en œuvre une architecture MVC complète pour une application web, incluant un backend en PHP (API) et un frontend en TypeScript/JavaScript avec des vues HTML/CSS.

---

## 🗂️ Table des matières

- [Structure du Projet](#structure-du-projet)
- [Installation](#installation)
- [Lancement de l'application](#lancement-de-lapplication)
- [Fonctionnalités](#fonctionnalités)
- [Configuration](#configuration)
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
   git clone https://github.com/ahmetbsbnr/SAE201/
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
   Utiliser un serveur comme [Live Server](XAMPP) pour tester localement.

---

## 🚀 Lancement de l'application

L'application est hébergée sur les serveurs de l'IUT :

🔗 [Accéder à l'application en ligne](https://devweb.iutmetz.univ-lorraine.fr/)

---

## ✨ Fonctionnalités

- Affichage et gestion des abonnements
- Architecture MVC modulaire
- Communication frontend-backend via une API PHP
- Interface responsive en HTML/CSS

---

## 🔧 Configuration

- **Frontend** : TypeScript, HTML5, CSS3
- **Backend** : PHP
- **SGBD** : MySQL
- Fichier de configuration TypeScript : `tsconfig.json`

---

## 👥 Auteurs

- **Ahmet BASBUNAR**
- **Léo DOBOS**
- Groupe G 3.1 – IUT de Metz

---

## 🔒 Licence

Ce projet n’est **pas open-source**.

Le code source peut être consulté et modifié **à des fins personnelles, éducatives ou non commerciales uniquement**.

Toute **redistribution**, **publication** ou **utilisation commerciale** du code ou d’une version modifiée est **strictement interdite** sans autorisation écrite préalable.

📄 Voir le fichier [LICENSE.md](./LICENSE.md) pour plus d’informations.

📬 Contact : **Ahmet Basbunar** — ahmetbsbnr@icloud.com
