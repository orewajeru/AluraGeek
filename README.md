# Proyecto AluraGeek con JSON Server

Este proyecto utiliza una **fake API** creada con JSON Server para gestionar los datos. Sigue estos pasos para clonar y ejecutar el proyecto correctamente en tu máquina local.

---

## Requisitos previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (incluye npm)
- [Git](https://git-scm.com/)

---

## Instalación y configuración

1. **Clonar el repositorio**

   Clona este repositorio en tu máquina local con el siguiente comando:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git


2. **Acceder a la carpeta del proyecto**

   Cambia al directorio del proyecto con:

   ```bash
   cd tu_repositorio
   
3. **Instalar dependencias**

   Instala las dependencias necesarias para el proyecto:

   ```bash
   npm install
   
4. **Configurar JSON Server**

   Inicia JSON Server para simular una API. Usa el siguiente comando:

   ```bash
   npx json-server --watch db.json --port 3001
   
5. **Iniciar la aplicación**

   En otra terminal, inicia el servidor del frontend con:

   ```bash
   npm start
