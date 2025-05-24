# Projet SAE 201

Voici la structure complete du projet SAE 201, base sur une architecture **MVC**, ainsi que les auteurs.

## Structure du Projet et Architecture MVC

Le projet suit une architecture **MVC**. Voici son arborescence :

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
├── package-lock.json   # Gere par npm/yarn (dependances)
├── package.json        # Informations sur le projet et ses dependances (npm/yarn)
├── sujet (1).pdf       # Sujet du projet (version 1)
├── sujetQD.pdf         # Sujet du projet (version QD)
├── Travaux en IHM.pdf  # Documentation ou travaux lies a l'IHM
└── tsconfig.json       # Configuration pour la compilation TypeScript
```

## Comment lancer l'application

Une fois les etapes d'installation completes et votre serveur web configure, vous pouvez acceder a l'application en ouvrant votre navigateur web et en naviguant vers l'URL ou le repertoire `SAE201/vue/` est servi.

Par exemple, si votre serveur web est configure pour servir le repertoire `SAE201/` a la racine de `localhost`, vous pouvez acceder a la liste des abonnements via l'URL suivante :

```
http://localhost/SAE201/vue/abonnement.html
```

## Auteurs

*   Ahmet BASBUNAR
*   LEO DOBOS
*   G 3.1
