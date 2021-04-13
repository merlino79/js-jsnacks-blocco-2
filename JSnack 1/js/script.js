//l software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.





//ciclo for



for (var i = 0; i < 5; i++) {
    numeri = parseInt(prompt("inserisci i numeri"));


    console.log(numeri);
    var sommaTot = numeri + numeri;

    console.log(sommaTot);



}