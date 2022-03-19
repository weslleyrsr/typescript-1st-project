console.log("app module loaded");

import { Negociacao } from "./models/Negociacao.js";

const negociacao = new Negociacao(
    new Date(),
    10,
    123.33
)

console.log(negociacao.quantidade);
console.log(negociacao.valor);
console.log(negociacao.data);
console.log(negociacao.volume);