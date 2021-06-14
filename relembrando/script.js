const menu = {
    seletor: '.principal'
}

console.log(menu.seletor)

//desestruturar
function handleMouse(event) {
    const { clientX, clientY } = event;
    console.log(clientX, clientY)
}

function handleMouse2({ clientX, clientY }) {
    console.log(clientX, clientY)
}

document.addEventListener('click', handleMouse);
document.addEventListener('click', handleMouse2);

const useQuadrado = [
    4, function (lado) {
        return 4 * lado;
    }
];
const [lado, perimetro] = useQuadrado;

console.log(lado)
console.log(perimetro(10))

//spread
function showList(empresa, ...clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa);
    });
};

showList('Google', 'Gustavo', 'Karin', '123123');

const numero = [10, 2, 20];
const maior = Math.max(...numero);
console.log("N maior no Array: " + maior)


const carro = {
    cor: "Amarelo",
    portas: 4
}

const carroAno = { ...carro, ano: 2021 };

console.log(carro);
console.log(carroAno);


import quadrado from "./quadradro.js";
console.log('Area quadrado: ' + quadrado.areaQuadrado(5));
console.log('Perimetro quadrado: ' + quadrado.perimetroQuadrado(6));


import areaTriangulo from "./triangulo.js";
console.log('Area Triangulo: ' + areaTriangulo(10, 20));

//fecht para capturar informação
fetch('http://127.0.0.1:5000/user')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });

async function fetchOla(url){
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return response;
};


const ola = fetchOla('http://127.0.0.1:5000/ola');