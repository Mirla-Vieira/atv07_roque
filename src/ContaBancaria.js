/**
 * Classe da conta bancária com informaçôes de agencia, número, tipo e saldo.
 * Podemos realizar operações de sacar, depositar e obter saldo
 */
class ContaBancaria {
  constructor(agencia, numero, tipo = "Conta Corrente", saldo = 0) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      return true;
    } else {
      console.log("Saldo insuficiente ou valor inválido.");
      return false;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      return true;
    } else {
      console.log("Valor de depósito inválido.");
      return false;
    }
  }
}
module.exports = ContaBancaria;
