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
├── package-lock.json   # Gere par npm/yarn (dependances)
├── package.json        # Informations sur le projet et ses dependances (npm/yarn)
├── sujet (1).pdf       # Sujet du projet (version 1)
├── sujetQD.pdf         # Sujet du projet (version QD)
├── Travaux en IHM.pdf  # Documentation ou travaux lies a l'IHM
└── tsconfig.json       # Configuration pour la compilation TypeScript
```

## Installation

Pour installer et lancer le projet, suivez les etapes ci-dessous :

### Prerequis

Assurez-vous d'avoir les elements suivants installes sur votre systeme :

*   Un serveur web (Apache, Nginx, etc.) avec le support PHP.
*   Un serveur de base de donnees MySQL ou equivalent.
*   Node.js et npm ou yarn pour la gestion des dependances JavaScript/TypeScript et la compilation.

### Etapes d'installation

1.  **Clonez le depot Git :**

    ```bash
    git clone [URL du depot]
    ```
    Remplacez `[URL du depot]` par l'URL de votre depot GitHub.

2.  **Configurez la base de donnees :**

    *   Creez une base de donnees vide sur votre serveur MySQL.
    *   Importez le script SQL `src/modele/bdclub.sql` dans cette nouvelle base de donnees. Vous pouvez utiliser un outil comme phpMyAdmin ou la ligne de commande MySQL :

        ```bash
        mysql -u [utilisateur] -p [nom_de_la_base_de_donnees] < src/modele/bdclub.sql
        ```
        Remplacez `[utilisateur]` et `[nom_de_la_base_de_donnees]` par vos informations.

    *   Modifiez le fichier `IHM_API/MyConnexionBdd.class.php` pour configurer les informations de connexion a votre base de donnees (nom d'utilisateur, mot de passe, nom de la base de donnees).

3.  **Installez les dependances JavaScript/TypeScript :**

    Naviguez dans le repertoire racine du projet (`SAE201/`) dans votre terminal et executez :

    ```bash
    npm install
    # ou avec yarn
    # yarn install
    ```

4.  **Compilez les fichiers TypeScript :**

    Dans le repertoire racine du projet, executez la commande de compilation TypeScript. Le `package.json` doit contenir un script pour cela (par exemple, `tsc`).

    ```bash
    npm run build
    # ou si vous avez un script de build configure
    # npm run [nom_du_script_de_build]
    ```
    Cette etape compilera les fichiers `.ts` de `src/` vers les fichiers `.js` correspondants dans `controleur/` et `modele/`.

5.  **Configurez votre serveur web :**

    Configurez votre serveur web (Apache, Nginx, etc.) pour servir les fichiers du repertoire `SAE201/`. Assurez-vous que le serveur web peut executer les scripts PHP dans `IHM_API/`.

6.  **Accedez a l'application :**

    Ouvrez votre navigateur web et naviguez vers l'URL configuree pour votre projet (par exemple, `http://localhost/SAE201/vue/abonnement.html`).

## Fonctionnalites

Voici les principales fonctionnalites offertes par l'application :

*   Gestion des abonnements (creation, modification, suppression).
*   Gestion des adherents (ajout lors de la creation d'abonnement).
*   Gestion des themes souscrits par abonnement.

## Comment lancer l'application

Une fois les etapes d'[Installation](#installation) completes et votre serveur web configure, vous pouvez acceder a l'application en ouvrant votre navigateur web et en naviguant vers l'URL ou le repertoire `SAE201/vue/` est servi.

Par exemple, si votre serveur web est configure pour servir le repertoire `SAE201/` a la racine de `localhost`, vous pouvez acceder a la liste des abonnements via l'URL suivante :

```
http://localhost/SAE201/vue/abonnement.html
```

## Technologies Utilisées

Ce projet utilise les technologies suivantes :

*   **Backend** : PHP (avec les scripts dans `IHM_API/`)
*   **Base de Donnees** : MySQL (ou equivalent) et le script `bdclub.sql`
*   **Frontend** :
    *   HTML (dans `vue/`)
    *   CSS (dans `vue/css/`)
    *   JavaScript / TypeScript (dans `src/` compilé vers `controleur/` et `modele/`)

## Backend API

Le dossier `IHM_API/` contient les scripts PHP qui servent d'API backend pour l'application. Ces scripts sont responsables de l'interaction avec la base de donnees MySQL, gerant les operations de lecture, ecriture, modification et suppression (CRUD) pour les abonnements, adherents, themes, etc.

Ces scripts repondent aux requetes envoyees par le frontend (via JavaScript) pour recuperer ou manipuler les donnees.

## Auteurs

*   Ahmet BASBUNAR
*   LEO DOBOS
*   G 3.1
