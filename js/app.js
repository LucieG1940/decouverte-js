// Convertisseur TVA
// Fenêtre où on entre le prix HT
const prixHorsTaxe = window.prompt ("Quel est le montant HT ?");

//Conversion string en number
parseFloat(prixHorsTaxe);
console.log(prixHorsTaxe);

// Affichage du résultat TTC dans le HTML
const prixTva = prixHorsTaxe * (1 + (20/100));
document.getElementById("prixTva").innerHTML = prixTva;

// Opérateurs
// On définie les variables
let firstName = "Lucie";
let lastName = "Gougelet";
let number1 = 300;
let number2 = number1 + 100;

//Affichage nom et prénom dans le HTML
console.log(firstName, lastName, number1, number2);
document.getElementById("firstName").innerHTML = firstName;
document.getElementById("lastName").innerHTML = lastName;

//Modification de la valeur de number 1
number1 = number2 * 5 - 40;
console.log(number1, number2);

//Affichage number1 et number2 dans le HTML
document.getElementById("number1").innerHTML = ("Number 1 = ") + number1;
document.getElementById("number2").innerHTML = ("Number 2 = ") + number2;
