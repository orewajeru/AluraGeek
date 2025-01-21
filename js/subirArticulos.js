import { conexionApi } from "./conexionApi.js";

const form = document.querySelector('[data-form]');

async function subirArticulo(e){
    e.preventDefault();

    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-archivo]').value;

    await conexionApi.crearArticulo(nombre, precio,imagen)
    alert('Articulo creado con éxito')
}

form.addEventListener('submit', e=>subirArticulo(e));