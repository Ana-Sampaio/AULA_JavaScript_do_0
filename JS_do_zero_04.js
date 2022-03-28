/*Conteúdo da Aula 4 - Teste 4: Trabalhando com condicionais*/

const lugar1 = `Salvador`;
const lugar2 = `São Paulo`;
const lugar3 = `Rio de Janeiro`;
const lugar4 = `Curitiba`;

const roteiros = [lugar1, lugar2, lugar3, lugar4];

const idadeComprador = 21;
const estaAcompanhado = true;
const temPassagem = true;

if(idadeComprador >= 18 || estaAcompanhado == true){
console.log("pode comprar a passagem");
} else{
    console.log("comprador precisa ser maior de idade ou estar acompanhado");
}

if (idadeComprador >= 18 && temPassagem == true){
    console.log("Boa viagem");
} else{
    console.log("DENIED");
}