const express = require("express");
const { times } = require("./model/times");
const routes = express.Router();
const timesDB = require("./model/times");

//Retorna todos os times
routes.get("/times", (req,res) => {
    res.status(200).json(timesDB.times);
});

//Retorna time especifico com base no nome
routes.get("/time/:nomeTime", (req,res) => {
    if((req.params.nome) == "") {
        res.sendStatus(400);
    } else {
        const nomeTime = req.params.nomeTime;
        let times = [];

        for (var prop of timesDB.times)
        {
            if (prop.nome.includes(nomeTime))
                times.push(prop);
        }

        if (times.length > 0) {
            res.status(200).json(times);
        } else {
            res.status(400).json({ msg: "Time nao encontrado" });
        }
    }
});

//Cadastro de Time
routes.post("/novoTime", (req,res) => {
    const {
        nome,
        cidade,
        estado,
        serie,
        titulos,
        folhaPagamento,
    } = req.body;

    if (nome && cidade && estado && titulos && folhaPagamento != undefined) {
        timesDB.times.push({
            id,
            nome,
            cidade,
            estado,
            serie,
            titulos,
            folhaPagamento,
        });
        res.status(200).json({ msg: "Time adicionado" });
    } else {
        res.status(400).json({ msg: "Dados obrigatorios incompletos" });
    }
});

//Exclusao de time
routes.delete("/time/:id", (req,res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const index = timesDB.times.findIndex((t) => t.id == id);

        if (index == -1) {
            res.status(404).json({ msg: "Time nao existe" });
        } else {
            timesDB.times.splice(index, 1);
            res.status(200).json({ msg: "Time excluido" });
        }
    }
});

//Edicao de time
routes.put("/time/:id", (req,res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const time = timesDB.times.find((t) => t.id == id);

        if (time != undefined) {
            const {
                nome,
                cidade,
                estado,
                serie,
                titulos, //titulos: {estadual,nacional,internacional}
                folhaPagamento,
            } = req.body;

            if (nome != undefined) time.nome = nome;
            if (cidade != undefined) time.cidade = cidade;
            if (estado != undefined) time.estado = estado;
            if (serie == "A" || serie == "B" || serie == "C" || serie == "")
                time.serie = serie;
            if (titulos.estadual != undefined) time.titulos.estadual = titulos.estadual;
            if (titulos.nacional != undefined) time.titulos.nacional = titulos.nacional;
            if (titulos.internacional != undefined) time.titulos.internacional = titulos.internacional;
            if (folhaPagamento != undefined) time.folhaPagamento = folhaPagamento;

            res.status(200).json(time);
        } else {
            res.status(400).json({ msg: "Time nao existe" });
        }
    }

})

module.exports = routes;