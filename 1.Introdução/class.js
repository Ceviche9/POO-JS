//Para criar uma classe-> 

class Pessoa {

    //para criar um método->
    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;

    }

    //Dessa forma os métodos automaticamente vão para o prototype ->
    
    falar() {

        console.log(`${this.nome} está falando`);

    }

    comer() {

        console.log(`${this.nome} está comendo`);


    }

    beber() {

        console.log(`${this.nome} está bebendo`);

    }
}

const p1 = new Pessoa('Tundê', 'Cavalcante');
console.log(p1);