/*Conteúdo da Aula 3 - Teste 3: Mexendo com listas*/

const lugar1 = `Salvador`;
const lugar2 = `São Paulo`;
const lugar3 = `Rio de Janeiro`;
const lugar4 = `Curitiba`;

const destinos  = [lugar1, lugar2, lugar3];

console.log(destinos);

destinos.push(lugar4);

console.log(destinos);

console.log(destinos[3]);

destinos.splice(2, 1);

console.log(destinos);