// // retorne o url da página atual utilizando o objeto window
// // const url_atual = window.location.href;
// const url_atual = location.href;
// console.log(url_atual);

// //Seleciona o primeiro elemento da página que possua a classe ativo
// // const elementoAtivo = document.querySelector("#ativo").innerHTML;
// const elementoAtivo = document.querySelector(".ativo");
// console.log(elementoAtivo);

// // Retorne a linguagem do navegador
// const linguaNavegador = navigator.language;
// console.log(linguaNavegador);

// // Retorne a largura da janela
// // const larguraJanela = window.innerWidth;
// const larguraJanela = innerWidth;
// console.log(larguraJanela);

// const h1 = document.querySelector('h1');
// h1.innerHTML = "<h1>Novo Titulo</h1>"


// //array
// let frutas = ['pera', 'abacaxi', 'abacate', 'bergamota', 'melancia', 'tomate']

// //ordenando ordem alfabetica
// console.log(frutas.sort());

// frutas.forEach((item, index) => {console.log('forEach: ' + item + ' index: ' + index)});

// let i = frutas.length - 1;

// console.log("i: " + frutas[i]);

// const a = 'up';
// const carros = ['fusca', 'uno', 'brasilia'];
// carros.unshift(a);
// carros.push(frutas);

// console.log(carros);

// carros.splice(2, 1, 'scort'); //remove o numero de itens indicado no segundo elemento
// console.log(carros);

//map
const carros = ['fusca', 'uno', 'brasilia'];
carros.map(item => {item});

console.log(carros)

const numeros = [1,2,3,4,5,6,7,8];

const numerosX6 = numeros.map(n => n * 2).map(n => n * 3);

console.log(numerosX6);

const aulas = [
    {
        nome: 'HTML1',
        min: 10
    },
    {
        nome: 'HTML2',
        min: 20
    },
    {
        nome: 'JAVA',
        min: 404
    },
    {
        nome: 'PYTHON',
        min: 4
    },
    {
        nome: 'PHP',
        min: 50
    },
]

const aulaMin = aulas.map(aula => aula.min)
const aulaNome= aulas.map(aula => aula.nome)
console.log(aulaMin)
console.log(aulaNome)

//reduce para somar os itens de um array