class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {

        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {

        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

}

//Getter->
const p1 = new Pessoa('Tundê', 'C.');
console.log(p1.nomeCompleto);
console.log(p1);
//Setter->
p1.nomeCompleto = 'Ayotunde Cavalcante de Sales';
console.log(p1.nomeCompleto);