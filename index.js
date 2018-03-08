// IMPRIME NA CONSOLA OLÁ MUNDO
function a() {
    console.log("Olá Mundo!!")
}
// imprime olá + o nome do pop up
function b() {
    var nome = prompt("Escreva um nome");
    console.log("Olá " + parseFloat(nome) + "!")
}

// calcula área do rectangulo

function c() {
    var comp = prompt("Escreva o tamanho do comprimento ");
    var alt = prompt("escreva a altura do retangulo");

    console.log(parseInt(comp) * parseInt(alt));
}

//operações aritméticas
function d() {
    var num1 = prompt("Escreva um nº");
    var num2 = prompt("Escreva um nº");
    console.log(parseInt(num1) * parseInt(num2));
    console.log(parseInt(num1) + parseInt(num2));
    console.log(parseInt(num1) - parseInt(num2));
    console.log(parseInt(num1) / parseInt(num2));
}

//IMC não funciona 

function e() {
    var peso = prompt("escreva o seu pesp em Kg");
    var altura = prompt("escreva a sua altura em metros");

    var imc = parseInt(peso) / (parseInt(altura) * parseInt(altura));

    if (imc < 18.5) {
        console.log("Abaixo de peso");
    } else if (imc >=18.5 && imc < 24.9) {
        console.log("Peso Normal");
    } else if (imc >=24.9 && imc < 29.9) {
        console.log("Sobrepeso");
    } else if (imc >=30 && imc < 34.9) {
        console.log("Obesidade Grau I");
    } else if (imc >=35 && imc < 39.9) {
        console.log("Obesidade Grau II");
    } else if (imc >= 40) {
        console.log("Obesidade Grau III ou Mórbida");
    }
}

//devolve S escrito N vezes

function f(){
    let palavra= prompt("Escreva uma palavra");
    let num= prompt("Escreva um nº");

    
}

// 
