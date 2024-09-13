precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
cantidad = document.querySelector('.cantidad')
total = document.querySelector('.valor-total')
total.innerHTML = cantidad.innerHTML * precio

function increment() {
    cantidad = document.querySelector('.cantidad')
    total = document.querySelector('.valor-total')
    cantidad.innerHTML = Number(cantidad.innerHTML) + 1
    total.innerHTML = cantidad.innerHTML * precio
}

function decrement() {
    cantidad = document.querySelector('.cantidad')
    total = document.querySelector('.valor-total')
    if (Number(cantidad.innerHTML) > 0) {
        cantidad.innerHTML = Number(cantidad.innerHTML) - 1
    }
    total.innerHTML = cantidad.innerHTML * precio
}