/*Conteúdo da Aula 4 - Teste 5: Criando loops*/

const lugar1 = `Salvador`;
const lugar2 = `São Paulo`;
const lugar3 = `Rio de Janeiro`;
const lugar4 = `Curitiba`;

const roteiros = [lugar1, lugar2, lugar3, lugar4];

const idadeComprador = 21;
const estaAcompanhado = false;
let temPassagem = false;
const destino = "Curitiba";

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0; 
let existe = false;

while(contador < 4){
    if(roteiros[contador] == destino){
        existe = true;
        break;
    }
    contador++;
} 

console.log("Destino existe", existe);

if (podeComprar && existe){
    console.log("Boa Viagem!!!")
}else {
    console.log("Desculpe, tivemos um erro")
};

for(let i = 0 ; i < roteiros.length; i++){
    if(roteiros[i] == destino){
        existe = true;
        break;
    }
}

console.log("Destino existe", existe);