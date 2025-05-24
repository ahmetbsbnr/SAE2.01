/// <reference lib="deno.ns" />
import { UnAbonnement } from "../../src/modele/data_abonnement.ts";
import { assertEquals, assertThrows } from "https://deno.land/std@0.208.0/assert/mod.ts";

Deno.test("Setter abon_date with valid date", () => {
    const abonnement = new UnAbonnement();
    const validDate = new Date(); // Date du jour
    // Formatage de la date au format AAAA-MM-JJ pour correspondre au type string de la classe
    const year = validDate.getFullYear();
    const month = (validDate.getMonth() + 1).toString().padStart(2, '0'); // Mois est basé sur 0
    const day = validDate.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    abonnement.abon_date = dateString;
    assertEquals(abonnement.abon_date, dateString);
});

Deno.test("Setter abon_date with past date", () => {
    const abonnement = new UnAbonnement();
    const pastDate = new Date("2024-01-01");
    const year = pastDate.getFullYear();
    const month = (pastDate.getMonth() + 1).toString().padStart(2, '0');
    const day = pastDate.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    abonnement.abon_date = dateString;
    assertEquals(abonnement.abon_date, dateString);
});

Deno.test("Setter abon_date with future date throws error", () => {
    const abonnement = new UnAbonnement();
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 2); // Date du jour + 2 jours
    const year = futureDate.getFullYear();
    const month = (futureDate.getMonth() + 1).toString().padStart(2, '0');
    const day = futureDate.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    assertThrows(
        () => {
            abonnement.abon_date = dateString;
        },
        Error,
        "La date d'abonnement doit être inférieure ou égale à la date du jour."
    );
});

Deno.test("Setter abon_num with valid number", () => {
    const abonnement = new UnAbonnement();
    abonnement.abon_num = "123";
    assertEquals(abonnement.abon_num, "123");
});

Deno.test("Setter abon_num with zero throws error", () => {
    const abonnement = new UnAbonnement();
    assertThrows(
        () => {
            abonnement.abon_num = "0";
        },
        Error,
        "Le numéro d'abonnement doit être un entier supérieur à 0."
    );
});

Deno.test("Setter abon_num with negative number throws error", () => {
    const abonnement = new UnAbonnement();
    assertThrows(
        () => {
            abonnement.abon_num = "-5";
        },
        Error,
        "Le numéro d'abonnement doit être un entier supérieur à 0."
    );
});

Deno.test("Setter abon_num with non-numeric string throws error", () => {
    const abonnement = new UnAbonnement();
    assertThrows(
        () => {
            abonnement.abon_num = "abc";
        },
        Error,
        "Le numéro d'abonnement doit être un entier supérieur à 0."
    );
});

Deno.test("Setter abon_comment with valid comment", () => {
    const abonnement = new UnAbonnement();
    const validComment = "Ceci est un commentaire valide.";
    abonnement.abon_comment = validComment;
    assertEquals(abonnement.abon_comment, validComment);
});

Deno.test("Setter abon_comment with empty comment", () => {
    const abonnement = new UnAbonnement();
    abonnement.abon_comment = "";
    assertEquals(abonnement.abon_comment, "");
});

Deno.test("Setter abon_comment with long comment throws error", () => {
    const abonnement = new UnAbonnement();
    const longComment = "a".repeat(401);
    assertThrows(
        () => {
            abonnement.abon_comment = longComment;
        },
        Error,
        "Le commentaire d'abonnement ne doit pas dépasser 400 caractères."
    );
});

Deno.test("Setter adh_num with valid number", () => {
    const abonnement = new UnAbonnement();
    abonnement.adh_num = "456";
    assertEquals(abonnement.adh_num, "456");
});

Deno.test("Setter adh_num with zero throws error", () => {
    const abonnement = new UnAbonnement();
    assertThrows(
        () => {
            abonnement.adh_num = "0";
        },
        Error,
        "Le numéro d'adhérent doit être un entier supérieur à 0."
    );
});

Deno.test("Setter adh_num with negative number throws error", () => {
    const abonnement = new UnAbonnement();
    assertThrows(
        () => {
            abonnement.adh_num = "-10";
        },
        Error,
        "Le numéro d'adhérent doit être un entier supérieur à 0."
    );
});

Deno.test("Setter adh_num with non-numeric string throws error", () => {
    const abonnement = new UnAbonnement();
    assertThrows(
        () => {
            abonnement.adh_num = "xyz";
        },
        Error,
        "Le numéro d'adhérent doit être un entier supérieur à 0."
    );
}); 