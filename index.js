const express = require('express');
const path = require('path');
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
