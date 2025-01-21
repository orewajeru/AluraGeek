async function listarProductos() {
  const conexion = await fetch('http://localhost:3001/products');

  const respuesta = conexion.json();

  return respuesta;

}

async function crearArticulo(nombre,precio,imagen){
    const conexion = await fetch('http://localhost:3001/products',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    const respuesta = await conexion.json();
    return respuesta;

}

async function eliminarArticulo(id) {
    const conexion = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
    });
    const respuesta = await conexion.json();
    return respuesta;

}




export const conexionApi={ 
    listarProductos, crearArticulo, eliminarArticulo
}