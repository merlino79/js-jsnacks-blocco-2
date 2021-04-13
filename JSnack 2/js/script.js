//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo




//ciclo for

var numeri = parseInt(prompt("inserisci un  numero"));






var num = numeri;
if (!(num % 2)) {
    console.log("il numero pari");
    //    var msgUscita = document.getElementById("testo").innerHTML;
    //     msgUscita = "il nunmero è pari" 
    document.getElementById("testo").innerHTML = "il numero è pari "



} else {
    console.log("il numero è dispari");
    document.getElementById("testo").innerHTML = "il numero è dispari "
}










//ciclo while

// var counter = 0;
// var contA = 0;

// while (counter < 5) {
//     var numA = parseInt(prompt("inserisci i numeri"))
//     console.log(numA);
//     contA += numA;
//     counter++;
// }

// console.log(" il risultato è " +
//     contA);


// var sommaTot2 = document.getElementById("testo-2").innerHTML;
// document.getElementById("testo-2").innerHTML = "il secondo risultato è " + contA;