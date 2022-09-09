import { Pizzas } from "./modules/pizzas.js"


let container = document.querySelector('.section')
let inputFilter = document.querySelector(".card-filter")
let localPizzas = localStorage.getItem('Pizzas')
let localStoragePizzas = JSON.parse(localPizzas)


function filtrar() {
    container.innerHTML = '';
    let searchValue = inputFilter.value.toLowerCase()

    for (let pizza of Pizzas) {
        let nombre = pizza.nombre.toLowerCase()
        if (nombre.indexOf(searchValue) !== -1) {
            container.innerHTML += `<div class="card  border-2 rounded-md border-solid border-slate-900  w-80 h-96 flex flex-col m-3">
                                            <img src="${pizza.imagen}" class="image rounded-t-md w-80 h-3/6" alt="Pizza images">
                                            <div class="text h-3/6 bg-regal-blue">
                                                <h2 class="nombre text-center text-amber-500 mt-2">${pizza.nombre}</h2> <br>
                                                <p class="ingredientes ml-2 text-amber-500"><span class="text-amber-100">${pizza.ingredientes}</span></p>
                                                <h4 class="precio ml-2 mt-3 text-amber-500">Precio: <span class="text-green-500">${pizza.precio}</span></h4>
                                                
                                            </div>
                                    </div>`
        }
    }

    if (container.innerHTML === '') {
        container.innerHTML += `<h2 class="text-2xl ">Producto no encontrado...</h2>`
    }


}

inputFilter.addEventListener("keyup", filtrar)
filtrar();



window.addEventListener('load', () => {
    localStorage.setItem('Pizzas', JSON.stringify(Pizzas))
})
