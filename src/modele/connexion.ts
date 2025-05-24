import * as APIsql from "../modele/sqlWeb.js"

// En local avec XAMPP
//APIsql.sqlWeb.init("http://localhost/sae201/vue/", "http://localhost/sae201/IHM_API/")

// En production (à commenter pendant le développement)
APIsql.sqlWeb.init("https://devweb.iutmetz.univ-lorraine.fr/~e26350u/SSS2SSS/SAE201/SAE201/vue","https://devweb.iutmetz.univ-lorraine.fr/~e26350u/IHM_API/")

class Connexion {
    constructor() {
        this.init();
    }
    init():void {
        // Connexion à la base de données locale (si vous avez importé la base)
        //APIsql.sqlWeb.bdOpen('localhost','3306','e26350u_SAE201', 'root','', 'utf8');
        
        // Connexion à la base de données distante (à commenter pendant le développement local)
        APIsql.sqlWeb.bdOpen('devbdd.iutmetz.univ-lorraine.fr','3306','e26350u_SAE201', 'e2635Ou_appli','32407595', 'utf8');
    }
}
let connexion = new Connexion;

export {connexion, APIsql}


/*
import * as APIsql from "../modele/sqlWeb.js"

APIsql.sqlWeb.init("https://devweb.iutmetz.univ-lorraine.fr/~squelette/vue/","https://devweb.iutmetz.univ-lorraine.fr/~/IHM/SAE201/squelette/PHP/IHM_API/")

class Connexion {
	constructor() {
		this.init();
	}
	init():void {
		// Ã  adapter avec voter nom de base et vos identifiants de connexion
		APIsql.sqlWeb.bdOpen('devbdd.iutmetz.univ-lorraine.fr','3306','e26350u_SAE201', 'e26350u_appli','32407595', 'utf8');
	}
}
let connexion = new Connexion;

export {connexion, APIsql}
*/
