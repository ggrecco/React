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
const  [lado, perimetro] = useQuadrado;

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
console.log(maior)


const carro = {
    cor: "Amarelo",
    portas: 4
}

carroAno = {...carro, ano: 2021};

console.log(carro);
console.log(carroAno);