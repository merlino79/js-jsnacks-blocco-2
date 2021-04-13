//l software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.





//ciclo for

var somma = 0;

for (var i = 0; i < 5; i++) {
    var numeri = parseInt(prompt("inserisci i numeri"));

    somma += numeri;


    console.log("il risultato è " + somma);

    var sommaTot = document.getElementById('testo').innerHTML;
    document.getElementById('testo').innerHTML = "il risultato è " +
        somma;










}