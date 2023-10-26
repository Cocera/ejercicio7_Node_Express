const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.status(200).send("Bienvenido!");
});

app.get("/productos", (req, res) => {
    res.status(200).send("Listado de productos");
});

app.post("/productos", (req, res) => {
    res.status(201).send("Crear un producto");
});

app.put("/productos", (req, res) => {
    res.status(200).send("Actualizar un producto");
});

app.delete("/productos", (req, res) => {
    res.status(200).send("Borrar un producto");
});

app.get("/usuarios", (req, res) => {
    res.status(200).send("Listado de usuarios");
});

app.post("/usuarios", (req, res) => {
    res.status(201).send("Crear usuario");
});

app.put("/usuarios", (req, res) => {
    res.status(200).send("Actualizar un usuario");
});

app.delete("/usuarios", (req, res) => {
    res.status(200).send("Borrar usuario");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});