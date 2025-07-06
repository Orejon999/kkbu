const productosMock = [
    { id: 1, nombre: "Producto 1", precio: 100, imagen: "https://placehold.co/150x150/f0f/fff?text=1" },
    { id: 2, nombre: "Producto 2", precio: 120, imagen: "https://placehold.co/150x150/0ff/111?text=2" },
    { id: 3, nombre: "Producto 3", precio: 80, imagen: "https://placehold.co/150x150/111/f0f?text=3" }
];

let carrito = [];

function mostrarCatalogo() {
    const cont = document.getElementById('productos');
    cont.innerHTML = '';
    productosMock.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio}</p>
            <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
        `;
        cont.appendChild(div);
    });
}
mostrarCatalogo();

function agregarAlCarrito(id) {
    const prod = productosMock.find(p => p.id === id);
    carrito.push(prod);
    renderCarrito();
}
function renderCarrito() {
    const ul = document.getElementById('items-carrito');
    ul.innerHTML = '';
    carrito.forEach((p, i) => {
        const li = document.createElement('li');
        li.textContent = `${p.nombre} - $${p.precio}`;
        ul.appendChild(li);
    });
}
function checkout() {
    alert('Compra realizada (demo)');
    carrito = [];
    renderCarrito();
}
function verPedidos() {
    alert('Función solo para admin (demo)');
}

// Chat automático básico (puedes conectar a backend después)
function enviarMensaje() {
    const entrada = document.getElementById('entrada-chat');
    const mensajes = document.getElementById('mensajes');
    const texto = entrada.value;
    if (!texto) return;
    mensajes.innerHTML += `<div><b>Tú:</b> ${texto}</div>`;
    entrada.value = '';
    setTimeout(() => {
        mensajes.innerHTML += `<div><b>Bot:</b> ${respuestaAutomatica(texto)}</div>`;
        mensajes.scrollTop = mensajes.scrollHeight;
    }, 700);
}
function respuestaAutomatica(msg) {
    if (msg.toLowerCase().includes('precio')) return "Consulta el catálogo para ver precios.";
    if (msg.toLowerCase().includes('hola')) return "¡Hola! ¿En qué puedo ayudarte?";
    return "Lo siento, soy un bot demo. Pronto responderé mejor.";
}