"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/


// Zeilen-Kommentar zwei Slashes > Strg + #

// Strg Shift p > Befehlzeile fürs Clonen

/**
 * 
 * 
 * Block-Kommentar
 * 
 * 
 *  */


// Konsolen-Ausgabe
// console.log("Hello world")
// console.log(firstname); // nicht deklarierte Var. --> Fehler

/***** 02 Deklaration + Wertzuweisung I */

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung (value assignment)
// console.log(familyName);

// console.log(firstName + " " + familyName);

// Zuweisung der Bezeichnung 02 Deklaration + Wertzuweisung I
// und stage sowie commit nicht mitbekommen!

/***** 03 Deklaration + Wertzuweisung II *****/

// let firstName,familyName;
// firstName = prompt("Bitte Vornamen eingeben:")
// familyName = prompt("Bitte Nachnamen eingeben:")
// console.log(firstName + " " + familyName);

// JavaScript ist eine untypisierte Sprache! | untyped
// typescript ist die Antwort auf dieses Verhalten!
// let test;
// test = "Hi";
// // test = 2;
// // test = true;

// console.log("Datentype: " + typeof test)
// console.log("Inhalt: " + test);


/****** 03a Konstanten *****/

// const test = "Hi"; // Variable mit KONSTANTEN Inhalt
// test = 2; // KEINE neue Zuweisung zur LZ möglich
// console.log("Inhalt: " + test);

/***** Beispiel ******/
 // Deklaration
 let ageJohn, ageMark;
 let birthYearJohn, birthYearMark; // birth_year_john

// let year = 2022;
let date = new Date();
let year = date.getFullYear();
console.log("Date(): " + year);

 // Wertzuweisung
 ageJohn = 25;
 ageMark = 30;

 // Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

 // Ausgabe
 console.log("birthYearJohn: " + birthYearJohn);
 console.log("birthYearMark: " + birthYearMark);











