const productos = [
    {
        id: 1,
        nombre: "Gato con catnip de peluche",
        precio: 2000.00
    },
    {
        id: 2,
        nombre: "Juguete interactivo",
        precio: 3000.00
    },
    {
        id: 3,
        nombre: "Ratón",
        precio: 1000.00
    },
    {
        id: 4,
        nombre: "Zanahoria de juguete",
        precio: 3000.00
    },
    {
        id: 5,
        nombre: "Pescado a pila",
        precio: 3000.00
    },
    {
        id: 6,
        nombre: "Platos de ceramica con base de madera",
        precio: 4000.00
    }
];

const carrito = [];

function agregarAlCarrito(id) {
    const producto = productos.find((p) => p.id === id);

    if (producto) {
        carrito.push(producto);
        mostrarCarrito();
    }
}

function mostrarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const carritoTotal = document.getElementById("carrito-total");

    carritoLista.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}`;
        carritoLista.appendChild(li);
        total += producto.precio;
    });

    carritoTotal.textContent = `$${total.toFixed(2)}`;
}

let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

if (!nombreUsuario) {
    alert("Debes ingresar tu nombre para continuar.");
} else {
   
    document.querySelector("header h1").textContent = `¡Bienvenido, ${nombreUsuario}!`;
}
