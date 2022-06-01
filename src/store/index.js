const store = {
    state : {
        nome: "",
        cpf: "",
        telefone: "",
        estado: "",
        cidade: "",
        especialidade: "",
        preco: "0,00",
        pagamento: [],
        parcelamento: [],
        estados: [],
        cidades: [],
        especialidades: [],
        todosMedicos: [],
    
        // poderiam estar vindo de uma api
        pagamentos: [],
        parcelamentos: [],
    },

    submitLocker: true,
};

export default store;