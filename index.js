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

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }
}

let valorSacado = 200;


// const cliente1 = new Cliente();
// const cliente2 = new Cliente();
// 
// cliente1.nome = "Ricardo";
// cliente1.cpf = 111225233309;
// 
// cliente2.nome = "Alice";
// cliente2.cpf = 888225233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);

