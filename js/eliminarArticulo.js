import { conexionApi } from './conexionApi.js';

const lista = document.querySelector('[data-lista]');


lista.addEventListener('click', async (e) => {

    if (e.target.classList.contains('card-icon')) {
        const id = e.target.dataset.id;

        try {
            await conexionApi.eliminarArticulo(id);
            const card = e.target.closest('.card');
            card.remove();
        } catch (error) {
            alert.error('Error al eliminar el artículo:', error);
        }
    }
});
