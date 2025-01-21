import { conexionApi } from './conexionApi.js';

const lista = document.querySelector('[data-lista]');

function crearCard(nombre, precio, imagen, id) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
        <article>
            <img
                src="${imagen}"
                alt="Imagen de artículo"
                class="card-img"
            />
            <h2 class="article-title">${nombre}</h2>
            <div class="card-info">
                <p class="article-info">$${precio}</p>
                <img
                    src="./img/basura.png"
                    class="card-icon"
                    alt="Icono de basura"
                    data-id="${id}"
                />
            </div>
        </article>
    `;

    return card;
}


async function listarArticulos() {
    const listaApi = await conexionApi.listarProductos();

    listaApi.forEach((articulo) => {
        const card = crearCard(articulo.nombre, articulo.precio, articulo.imagen, articulo.id);
        lista.appendChild(card);
    });
}


listarArticulos();
