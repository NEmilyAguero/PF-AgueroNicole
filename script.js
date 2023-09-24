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
        const productoEnCarrito = carrito.find((p) => p.id === id);
        if (productoEnCarrito) {
            // Si el producto ya está en el carrito, aumenta la cantidad
            productoEnCarrito.cantidad++;
        } else {
            // Si el producto no está en el carrito, agrégalo con cantidad 1
            producto.cantidad = 1;
            carrito.push(producto);
        }

        mostrarCarrito();
    }
}

function eliminarDelCarrito(id) {
    const productoEnCarrito = carrito.find((p) => p.id === id);

    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad > 1) {
            // Si hay más de una unidad del producto, disminuye la cantidad
            productoEnCarrito.cantidad--;
        } else {
            // Si solo hay una unidad, elimina el producto del carrito
            const index = carrito.indexOf(productoEnCarrito);
            carrito.splice(index, 1);
        }

        mostrarCarrito();
    }
}

function mostrarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const carritoTotal = document.getElementById("carrito-total");

    // Comprobar si el carrito está vacío
    if (carrito.length === 0) {
        carritoLista.innerHTML = "<p>El carrito está vacío.</p>";
        carritoTotal.style.display = "none"; // Ocultar el total si el carrito está vacío
        return; // Salir de la función si el carrito está vacío
    }

    carritoLista.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}`;
        carritoLista.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    carritoTotal.style.display = "block"; // Mostrar el total cuando hay productos en el carrito
    carritoTotal.textContent = `$${total.toFixed(2)}`;
}


document.addEventListener("DOMContentLoaded", function () {
    const finalizarCompraBtn = document.querySelector(".finalizar-compra-btn");

    finalizarCompraBtn.addEventListener("click", () => {
        // Lógica para finalizar la compra
        // ...

        // Redirigir a Mercado Pago
        redirigirAMercadoPago();
    });

    
});

function redirigirAMercadoPago() {
   
    const urlDePago = "https://www.mercadopago.com.ar/"; 

    window.location.href = urlDePago;
}



let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

if (!nombreUsuario) {
    alert("Debes ingresar tu nombre para continuar.");
} else {
   
    document.querySelector("header h1").textContent = `¡Bienvenido, ${nombreUsuario}!`;
}