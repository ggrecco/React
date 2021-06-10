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

const useQuadrado = [
    4, function (lado) {
        return 4 * lado;
    }
];
const  [lado, perimetro] = useQuadrado;

console.log(lado)
console.log(perimetro(10))

//spread

document.addEventListener('click', handleMouse);
document.addEventListener('click', handleMouse2);