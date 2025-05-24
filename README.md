# Projet SAE 201

## Description du Projet

Ce projet correspond a la realisation de la SAE 201. Il s'agit d'une application web permettant la gestion des abonnements, adherents et themes.

## Architecture

Le projet suit une architecture **MVC** (Modele-Vue-Controleur) afin de separer les differentes couches de l'application :

*   **Modele** : Gere les donnees et la logique metier (interaction avec la base de donnees).
*   **Vue** : S'occupe de l'affichage des donnees (fichiers HTML et CSS).
*   **Controleur** : Fait le lien entre le Modele et la Vue, gere les interactions utilisateur et la logique de l'application.

## Structure du Projet

Voici l'arborescence du projet decrivant la structure MVC :

```
SAE201/
├── controleur/         # Controleurs (JavaScript/TypeScript)
├── IHM_API/            # Backend API (PHP) - Interaction avec la base de donnees
├── modele/             # Modele (JavaScript/TypeScript) - Logique des donnees
├── src/
│   ├── controleur/     # Fichiers sources TypeScript des controleurs
│   └── modele/         # Fichiers sources TypeScript du modele
├── vue/
│   ├── css/            # Fichiers CSS pour la presentation
│   ├── images/         # Images utilisees dans les vues
│   └── *.html          # Fichiers HTML des vues
├── .DS_Store           # Fichier specifique macOS (peut etre ignore par Git)
├── bdclub.sql          # Script SQL pour la base de donnees
├── package-lock.json   # GÃ©rÃ© par npm/yarn (dependances)
├── package.json        # Informations sur le projet et ses dependances (npm/yarn)
├── sujet (1).pdf       # Sujet du projet (version 1)
├── sujetQD.pdf         # Sujet du projet (version QD)
├── Travaux en IHM.pdf  # Documentation ou travaux lies a l'IHM
└── tsconfig.json       # Configuration pour la compilation TypeScript
```

## Auteurs

*   Ahmet BASBUNAR
*   LEO DOBOS
*   G 3.1
