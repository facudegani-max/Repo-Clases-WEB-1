function renderizarCatalogo(contenedor, productos) {
    let productosHTML = '';

    productos.forEach((producto) => {
        productosHTML += `
        <article class="tarjeta-producto">
            <h3>${producto.nombre}</h3>
            <picture>
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
            </picture>
            <p>${producto.descripcion}</p>
            <ul>
                <li><strong>Talles disponibles:</strong> ${producto.talles.join(', ')}</li>
                <li><strong>Precio:</strong> $${producto.precio.toFixed(2)}</li>
            </ul>
            <button class="btn-agregar">Añadir al carro de compras</button>
        </article>
        `;
    });

    // Se asigna al contenedor fuera del bucle
    contenedor.innerHTML = productosHTML;
}

function filtrarPorTalle(productos, talle) {
    return productos.filter(producto => producto.talles.includes(talle));
}

export { renderizarCatalogo, filtrarPorTalle };