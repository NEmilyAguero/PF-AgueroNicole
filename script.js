const productos = [
    {
      id: 1,
      nombre: "Peluche Gojo",
      precio: 15000.00
    },
    {
      id: 2,
      nombre: "Figura Gojo",
      precio: 50000.00
    },
    {
      id: 3,
      nombre: "Peluches jjk",
      precio: 10000.00
    },
    {
      id: 4,
      nombre: "Standee bsd",
      precio: 5000.00
    },
    {
      id: 5,
      nombre: "Nendoroid Atsushi",
      precio: 70000.00
    },
    {
      id: 6,
      nombre: "Peluches bsd",
      precio: 5000.00
    }
  ];

const carrito = [];
const carritoLista = document.getElementById("carrito-lista");
const carritoTotal = document.getElementById("carrito-total");
const finalizarCompraBtn = document.getElementById("finalizar-compra-btn");

function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find((producto) => producto.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    mostrarCarrito();
}

function mostrarCarrito() {
    carritoLista.innerHTML = "";
    let total = 0;

    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}`;
        carritoLista.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    carritoTotal.textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    const finalizarCompraBtn = document.querySelector(".finalizar-compra-btn");

    finalizarCompraBtn.addEventListener("click", () => {
        function redirigirAMercadoPago() {
   
            const urlDePago = "https://www.mercadopago.com.ar/"; 
        
            window.location.href = urlDePago;
        }
        redirigirAMercadoPago();
    });

    
});
