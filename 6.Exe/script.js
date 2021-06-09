class ValidaFormulário {

    constructor() {

        this.form = document.querySelector('.form');

        this.eventos();
    }

    eventos() {

        this.form.addEventListener('submit', e => {

            this.handleSubmit(e);
        });
    
    }

    handleSubmit(e) {

        e.preventDefault();
        const valid = this.check();
        const password = this.passValid();

        if(valid && password){

            alert('Formulário enviado');
            this.form.submit();
        }

    }

    passValid() {

        let flag = true;

        const senha = this.form.querySelector('.senha');
        const reSenha = this.form.querySelector('.re-senha');

        if(senha.value !== reSenha.value){

            flag = false;

            this.createErro(senha, 'As senhas precisãm ser iguais');
            this.createErro(reSenha, 'As senhas precisãm ser iguais');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {

            flag = false;
            this.createErro(senha, 'A senha precisa estar entre 6 e 12 caractéres');
        }

        return flag



    }
    
    createErro(place, msg) {

        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');

        place.insertAdjacentElement('afterend', div);
    }

    check() {

     //Flag
     let flag = true;
     
     for (let errorText of this.form.querySelectorAll('.error-text')){

        errorText.remove();

     }

     for (let input of this.form.querySelectorAll('.checar')) {

        //Pegando o elemento irmão anterior
        const label = input.previousElementSibling.innerText;
        if(!input.value) {

        this.createErro(input, `O campo "${label}" não pode ficar vazio`);
        flag = false;

       }

       if(input.classList.contains('cpf')){
           
        if(!this.ValidaCPF(input)) flag = false;
       }

       if(input.classList.contains('user')){

        if(!this.ValidaUsuario(input)) flag = false;
       }

     }

     return flag;

    }

    ValidaCPF(input) {

        const cpf = new ValidaCPF(input.value);

        if(!cpf.valida()){

            this.createErro(input, 'CPF INVÁLIDO');
            return false;
        }

        return true

    }

    ValidaUsuario(input) {

        const user = input.value;
        let flag = true;

        if(user.length < 4 || user.length > 12){

            this.createErro(input, 'Usuário precisa ter entre 4 e 12 caractéres')
            flag = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){

            this.createErro(input, 'Nome de Usuário precisa conter apenas letras e/ou número')
            flag = false;

        }

        return flag;

    }

    

}

const valida = new ValidaFormulário();
