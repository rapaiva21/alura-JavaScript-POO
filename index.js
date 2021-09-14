class Cliente{
    nome;
    cpf;       
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }

    }
}

let valorSacado = 200;


const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 111225233309;

cliente2.nome = "Alice";
cliente2.cpf = 888225233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
// Acima foi criado uma conta corrente para Ricardo com 0 de saldo
console.log(contaCorrenteRicardo.saldo);
// adicionado 100 na conta do Ricardo
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
// Foi sacado 50 da conta do Ricardo
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);

// Informações das contas
console.log(cliente1);
console.log(cliente2);