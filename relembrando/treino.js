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

//// map
// const carros = ['fusca', 'uno', 'brasilia'];
// carros.map(item => {item});

// console.log(carros)

// const numeros = [1,2,3,4,5,6,7,8];

// const numerosX6 = numeros.map(n => n * 2).map(n => n * 3);

// console.log(numerosX6);

// const aulas = [
//     {
//         nome: 'HTML1',
//         min: 10
//     },
//     {
//         nome: 'HTML2',
//         min: 20
//     },
//     {
//         nome: 'JAVA',
//         min: 404
//     },
//     {
//         nome: 'PYTHON',
//         min: 4
//     },
//     {
//         nome: 'PHP',
//         min: 50
//     },
//     {
//         nome: 'PHP',
//         min: 505
//     },
// ]

// const aulaMin = aulas.map(aula => aula.min)
// const aulaNome= aulas.map(aula => aula.nome)
// console.log(aulaMin)
// console.log(aulaNome)

// //reduce para somar os itens de um array
// const somaAulaMin = aulaMin.reduce((acumulado, numero) => {
//                         return acumulado + numero 
//                     },0);
                    
// console.log(somaAulaMin)

// //verificar maior valor
// const mairoValor = aulaMin.reduce((anterior, atual) => {
//     return anterior < atual ? atual : anterior;
// })

// console.log(mairoValor);


// // objetos com reduce
// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//     acumulador[index] = aula.nome;
//     return acumulador;
// }, {})//deve passar objeto vazio para não bugar o acumulador

// console.log(listaAulas);


// //filter
// const maior15 = aulas.filter((aula) => {
//     return aula.min > 25;
// })

// console.log(maior15);


// //exercício
// // retornar o valor total de compras

// const compras = [
//     {
//         item: 'Banana',
//         preco: 'R$ 4,99'
//     },
//     {
//         item: 'Ovo',
//         preco: 'R$ 2,99'
//     },
//     {
//         item: 'Carne',
//         preco: 'R$ 25,49'
//     },
//     {
//         item: 'Refrigerante',
//         preco: 'R$ 5,35'
//     },
//     {
//         item: 'Queijo',
//         preco: 'R$ 10.60'
//     },
// ]

// const totalCompras = compras.reduce((acumulador, item) => {
//     const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
//     return acumulador + precoLimpo;
// }, 0)

// console.log(totalCompras)

// //calcular caracteres
// const olaMundo = document.querySelector('h1');
// console.log(olaMundo.innerHTML.length);

// const todosOlaMundo = document.querySelectorAll('h1');
// const totalOlaMundo = Array.from(todosOlaMundo);
// const mostrarTotal = totalOlaMundo.reduce((acumulador, item) => {
//     return acumulador + item.innerText.length;
//     },0);
// console.log(mostrarTotal);
// console.log(todosOlaMundo);


// const totalOlaMundo2 = Array.prototype.reduce.call(todosOlaMundo, (acumulador, item) => {
//     return acumulador + item.innerText.length;
//     },0);
// console.log('total2: ' + totalOlaMundo2)



// //add tag,classe e conteudo
// function criarElemento(tag, classe, conteudo){
//     const elemento = document.createElement(tag);
//     classe ? elemento.classList.add(classe) : null;
//     conteudo ? elemento.innerHTML = conteudo : null;

//     return elemento;
// }

// console.log(criarElemento('ul', 'teste', 'aqui um conteudo legal'))

// // desetructuring

// const cliente = {
//     nome: 'Gustavo',
//     compras: {
//         digitais: {
//             livros: ['livro 1', 'livro 2'],
//             videos: ['video 1', 'video 2']
//         },
//         fisicas: {
//             cadernos: ['Caderno 1']
//         }
//     }
// }

// const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras;

// const {nome: novoNome} = cliente

// console.log(digitais)
// console.log(livros)
// console.log(novoNome)

// destructuring event

function hendleKeyboard(event){
    console.log(event);
}

document.addEventListener('keyup', hendleKeyboard);