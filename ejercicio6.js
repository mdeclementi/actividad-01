
console.log("Ejercicio 6 Solucion 1");

//Solucion 1. Sin prototype.

const formatter = {
    prefix: "Hello",
    append: function (cadena) {
        console.log(this.prefix + " " + cadena);
    }
}

formatter.append("World!!!");

formatter.toLowerString = function (cadena) {
    console.log(cadena.toLowerCase());
}

formatter.toLowerString("I'm Marcus");

////////////////////////////////////////////////////////////////////////////////////////

console.log("Ejercicio 6 Solucion 2");

//Solucion 2. Con prototype

function classFormatter() {
    this.prefix = "Hello";
    this.append = function(cadena) {
        console.log(this.prefix + " " + cadena);
    }
}

const formatter2 = new classFormatter();

formatter2.append("World!!!");

classFormatter.prototype.toLowerString = function(cadena) {
    console.log(cadena.toLowerCase());
  };

formatter2.toLowerString("I'm Lucas");

console.log("Este fue el Ejercicio 6 ^^^")