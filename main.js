const ContaCorrente = require("./src/ContaCorrente");
const ContaPoupanca = require("./src/ContaPoupanca");
const ContaUniversitaria = require("./src/ContaUniversitaria");

const minhaContaCorrente = new ContaCorrente("001", "131313", true);
const minhaContaPoupanca = new ContaPoupanca("002", "202020");
const minhaContaUniversitaria = new ContaUniversitaria("003", "262626");

console.log("Conta corrente: " + minhaContaCorrente.saldo);
console.log("Conta Poupanca: " + minhaContaPoupanca.saldo);
console.log("Conta Universitaria: " + minhaContaUniversitaria.saldo);
