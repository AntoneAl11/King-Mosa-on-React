const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost', // o la IP de tu servidor de base de datos
    user: 'root',
    password: 'Antone11',
    database: 'king_mosa'
});

// Conectar a la base de datos
connection.connect(error => {
    if (error) throw error;
    console.log("Conexión exitosa a la base de datos.");
});

// Crear un endpoint para obtener los productos
app.get('/productos', (req, res) => {
    connection.query('SELECT * FROM Productos', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});