"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Zeilen-Kommentar

// Konsolen-Ausgabe
// console.log("Hello World!");
// console.log(firstName); // nicht deklarierte Var. --> Fehler

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log(familyName);
// console.log(firstName + " " + familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName,familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");
// console.log(firstName + " " + familyName);

// JS ist eine untypisierte Sprache! | untyped
// let test;
// test = "Hi";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten *******/

const test = "hi"; // Variable mit KONSTANTEM Inhalt
test = 2; // KEINE neue Zuweisung zur LZ möglich!
console.log("Inhalt: " + test);