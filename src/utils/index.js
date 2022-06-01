
// Arquivo de utilidades para o resto do programa
/* eslint-disable */

import store from "../store";
import api from "../api";


export function telefoneLenghtValidator (valor){
    if (valor.length == 16){
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


export function cpfCadastrado(cpf){
    let retorno = true
    store.state.todosMedicos.forEach(element=>{
        if(element.cpf == prepareCPF(cpf)){
            retorno = false
        }
    });
    return retorno

}


export const prepareCPF = (cpf)=>{
    return cpf.replace(/[.]/g, "").replace("-", "");
}


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


const preparePreco = (preco) => {
    return Number(preco.replace(/[,]/g, "."));
}


export function precoMaior (preco) {


    if (preparePreco(preco) > 350){
        return false;
    }
    return true;
}


export function precoMenor (preco) {

    if (preparePreco(preco) < 30){
        return false;
    }
    return true;
}



export function submitLockControl(valorValidacaoComponente){
    let globalValidator = store.submitLocker

       // form valido e lock ativo, desativar lock
    if (!valorValidacaoComponente && globalValidator){
        store.submitLocker = false;
    }
        // form invalido e lock ativo, lock ativado
    else if (valorValidacaoComponente && globalValidator){

        store.submitLocker = true;
    }
        // form invalido e lock inativo, ativar lock
    else if (valorValidacaoComponente && !globalValidator){

        store.submitLocker = true;
    }
        // form valido e lock ativo desativar lock
    else{

        store.submitLocker = false;
    }
}


export const getSubmitLocker = () => {
    return store.submitLocker;
}


export const lockSubmitlocker = () => {store.submitLocker = true}


export const releaseSubmitLocker = () => {store.submitLocker = false}


export function validadorPagUm(){
    let itens = ["nome", "cpf", "telefone", "estado", "cidade"]
    for (let item in itens){
        if (store.state[itens[item]].length == 0){
            return false;
        }
    }
    return true;
}


export function validadorPagDois(){

    if(store.state.especialidade.length == 0){return false}

    if(preparePreco(store.state.preco) < 30){return false}

    if(store.state.pagamento.length == 0){return false}

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