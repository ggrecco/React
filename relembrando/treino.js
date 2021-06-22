// retorne o url da página atual utilizando o objeto window
// const url_atual = window.location.href;
const url_atual = location.href;
console.log(url_atual);

//Seleciona o primeiro elemento da página que possua a classe ativo
// const elementoAtivo = document.querySelector("#ativo").innerHTML;
const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const linguaNavegador = navigator.language;
console.log(linguaNavegador);

// Retorne a largura da janela
// const larguraJanela = window.innerWidth;
const larguraJanela = innerWidth;
console.log(larguraJanela);

const h1 = document.querySelector('h1');
h1.innerHTML = "<h1>Novo Titulo</h1>"


//array
let frutas = ['pera', 'abacaxi', 'abacate', 'bergamota', 'melancia', 'tomate']

frutas.forEach((item) => {console.log('forEach: ' + item)});


let i = frutas.length - 1;

console.log("i: " + frutas[i]);