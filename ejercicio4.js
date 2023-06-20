const numDivisor = 7;

//var numsDivisibles = [];
let numsDivisiblesString = "Numero divisibles entre 7: ";

for (let i = 1; i < 100; i ++) {

  if ((i % numDivisor) == 0) {

    //console.log(`${i} SI se puede dividir entre ${numDivisor}` + "<br>");
    //numsDivisibles.push(i);
    numsDivisiblesString = numsDivisiblesString + i  + ", ";

    } else {

        //console.log(`${i} NO se puede dividir entre ${numDivisor}` + "<br>");

    }
} 

//console.log(numsDivisibles);
console.log(numsDivisiblesString);
console.log("Este fue el Ejercicio 4 ^^^")
