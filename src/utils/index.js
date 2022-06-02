// Arquivo de utilidades para o resto do programa
/* eslint-disable */

import store from "../store";
import api from "../api";

const TELEFONE_MAX_LENGTH = 16;
const PRECO_MAXIMO = 350;
const PRECO_MINIMO = 30;


export function telefoneLenghtValidator (valor){
    if (valor.length == TELEFONE_MAX_LENGTH){
        return true;
    }
    else{
        return false;
    }
}


export async function getMedicos(){
    let medicos = []
    const response = await api.get("/profissionais")
    response.data.forEach(element => {
        medicos.push(element);
    });
    return medicos;
}

// checa se o cpf já é de algum médico cadastrado
export function cpfCadastrado(cpf){
    let retorno = true
    store.state.todosMedicos.forEach(element=>{
        if(element.cpf == prepareCPF(cpf)){
            retorno = false
        }
    });
    return retorno

}

// formatação do cpf após aplicada a máscara
export const prepareCPF = (cpf)=>{
    return cpf.replace(/[.]/g, "").replace("-", "");
}


// validar o cpf 
export function testaCPF(cpf) {

    var strCPF = prepareCPF(cpf)

    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

// preparar a string do preço

const preparePreco = (preco) => {
    return Number(preco.replace(/[,]/g, "."));
}


// funções que validam o preço

export function precoMaior (preco) {
    if (preparePreco(preco) > PRECO_MAXIMO){
        return false;
    }
    return true;
}


export function precoMenor (preco) {
    if (preparePreco(preco) < PRECO_MINIMO){
        return false;
    }
    return true;
}


// o módulo vuelidate que foi utilizado para validar os formulários
// me serviu bem provendo as mensagens para os campos incorretos, porém
// falha em ser simples para acessar em componentes irmãos e pais.
export function validadorPagUm(){
    let itens = ["nome", "estado", "cidade"]
    for (let item in itens){
        if (store.state[itens[item]].length == 0){
            return false;
        }
    }
    
    if (store.state.cpf.length != 14 || !testaCPF(store.state.cpf) || !cpfCadastrado(store.state.cpf)){
        return false
    }

    if (store.state.telefone.length != 16){
        return false
    }
    
    return true;

}


// Validação para os formulários da página dois
export function validadorPagDois(){

    // a especialidade é um campo que seleciona,
    // então o importante é estar selecionado
    if(store.state.especialidade.length == 0){
        return false;
    }


    if(!precoMaior(store.state.preco) || !precoMenor(store.state.preco)){
        return false;
    }

    if(store.state.pagamento.length == 0){
        return false;
    }

    if (store.state.pagamento.find(item => item == 3)){
        if(store.state.parcelamento.length == 0){return false}
    }
    

    return true
}


export function getItemById(id, campo){
    let temp
        store.state[campo].forEach(element => {
            if (element.value == id){
                temp = element.text;
            }
        });
    return temp;
}


export function limparStore(){

    store.state.nome = ""
    store.state.cpf = ""
    store.state.telefone = ""
    store.state.estado = ""
    store.state.cidade = ""
    store.state.especialidade = ""
    store.state.preco = "0,00"
    store.state.pagamento = []
    store.state.parcelamento = []

}