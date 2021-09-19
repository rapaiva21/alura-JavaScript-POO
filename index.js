import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233340);
const cliente2 = new Cliente("Alice", 88822233309);
const cliente3 = new Cliente("José", 12345689);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);
const conta3 = new ContaCorrente(102, cliente3);

contaCorrenteRicardo._saldo = 500;
conta2._saldo = 200;

conta2.depositar(300);
contaCorrenteRicardo.sacar(200);

contaCorrenteRicardo.transferir(200, conta2);
contaCorrenteRicardo.depositar(150);

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(conta3);

console.log(ContaCorrente.numeroDeContas);