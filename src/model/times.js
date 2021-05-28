var timesDB = {
    times: [
        {
            id: 1,
            nome: "Time 01",
            cidade: "Cidade Time 01",
            estado: "Estado Time 01",
            serie: "A",
            titulos: {
                estadual: 1,
                nacional: 1,
                internacional: 0,
            },
            folhaPagamento: 100000,
        },
        {
            id: 2,
            nome: "Time 02",
            cidade: "Cidade Time 02",
            estado: "Estado Time 02",
            serie: "B",
            titulos: {
                estadual: 3,
                nacional: 5,
                internacional: 6,
            },
            folhaPagamento: 9999990,
        },
        {
            id: 3,
            nome: "Teste",
            cidade: "Cidade Teste",
            estado: "Estado Teste",
            serie: "C",
            titulos: {
                estadual: 4,
                nacional: 1,
                internacional: 0,
            },
            folhaPagamento: 6666660,
        },
    ],
};

module.exports = timesDB;