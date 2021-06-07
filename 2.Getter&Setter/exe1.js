
//Para criar uma chave privada dentro de um objeto->
const velocidadePriv = Symbol('velocidade');

class Carro {

    constructor(nome, velocidade) {

        this.nome = nome;
        //Dessa forma a chave velocidade não pode ser acessada->
        this[velocidadePriv] = 0;
    
    }


    //Porém usando um getter é possível acessar a velocidade ->

    get velocidade() {

        console.log('GETTER');
        return this[velocidadePriv];
    }

    //Para permitir que a velocidade seja alterada->

    set velocidade(valor) {

        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[velocidadePriv] = valor;

    }

    acelerar () {

        if(this.velocidade == 100) return;
        this[velocidadePriv]++;
    }

    freiar() {

        if(this.velocidade == 0) return;
        this[velocidadePriv] --;
    }

}

const c1 = new Carro('fusca');

c1.velocidade = 69;
console.log(c1.velocidade);
console.log(c1);