//Métodos estáticos
//São métodos que estão na classe que podemos usar sem instanciar a classe

class ControleRemoto {

    constructor(tv){

        this.tv = tv;
        this.volume = 0;
    }

    //Método de instância
    aumentarVolume() {

        this.volume +=2;

    }

    diminuirVolume(){

        this.volume -= 2;

    }

    //Método estático
    static trocaPilha() {

        console.log('OK, vou trocar')
    }

}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);

//Para acessar o método trocaPilha a classe tem que ser chamada->
ControleRemoto.trocaPilha();
//Os métodos estáticos não tem acesso aos dados da instância.