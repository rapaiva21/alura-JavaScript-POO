class Cliente{
    nome;
    cpf;       
}

class ContaCorrente{
    agencia;
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }

    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(this._saldo);
        }
    }
}

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);

