const express = require("express");
const app = express();

const routes = require("./routes");
const port = 12346;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log("Api DevAp01 rodando na porta " + port);
});