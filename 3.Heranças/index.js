class Device {

    constructor(nome) {
        this.nome = nome;
        this.modo = false;
    }

    ligar() {
        
        if(this.modo){

            console.log('O dispositivo já está ligado');
            return;
        }

        this.mode = true;
    }

    desligar() {

        if(!this.mode){

            console.log('O dispositivo já está desligado');
            return 
        }

        this.mode = false;
    }

}

//para fazer uma classe herdar de outra->
class Phone extends Device {

    //chamando o construtor da classe pai->
    constructor(nome, cor, modelo){

        //Super() é a classe pai e dentro dela coloca os métodos que queremos utilizar da classe pai
        super(nome);
        //Adicionando outros parâmetros->
        this.cor = cor;
        this.modelo = modelo;

    } 

    //Métodos podem ser alterados ou criados->

    mode() {

        console.log('Você alterou o método ligar');
    }

    fala() {

        console.log('Teste!');
    }
}

//OBS: Sem o super() não tem como utilizar o "extends"

const s1 = new Phone('Iphone', 'Preto', 'XR');
console.log(s1);
s1.mode();
s1.fala();