
// Arquivo de utilidades para o resto do programa

import store from "../store"

export function telefoneLenghtValidator (valor){
    if (valor.length == 16){
        return true
    }
    else{
        return false
    }
}


export function submitLockReleaser(valorValidacaoComponente){
    let globalValidator = store.submitLocker

       // form valido e lock ativo, desativar lock
    if (!valorValidacaoComponente && globalValidator){
        console.log("form valido e lock ativo, desativar lock")
        store.submitLocker = false
    }
        // form invalido e lock ativo, lock ativado
    else if (valorValidacaoComponente && globalValidator){
        console.log("form invalido e lock ativo, lock ativado")

        store.submitLocker = true
    }
        // form invalido e lock inativo, ativar lock
    else if (valorValidacaoComponente && !globalValidator){
        console.log("form invalido e lock inativo, ativar lock")

        store.submitLocker = true
    }
        // form valido e lock ativo desativar lock
    else{
        console.log("form valido e lock ativo desativar lock")

        store.submitLocker = false
    }
}


export const getSubmitLocker = () => {return store.submitLocker}
export const lockSubmitlocker = () => {store.submitLocker = true}