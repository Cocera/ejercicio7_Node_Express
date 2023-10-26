const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());



const items = [
    { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
    { id: 2, nombre: 'FIFA 23 PS5' , precio: 1000},
    { id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
    { id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
    { id: 5,  nombre: 'Skin Valorant' , precio: 120},
    { id: 6, nombre: 'Taza de Star Wars' , precio: 220}
];



app.get("/products", (req, res) => {
    res.status(200).send({description:'Products', items:items});
});



app.post("/products", (req, res) => {
    const newProduct = {
        id: items.length+1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    items.push(newProduct);
    res.status(201).send(items)
});



// No me funciona
app.put("/products/:id", (req, res) => {
    const found = items.some((product) => product.id == req.params.id);
    if (found) {
        items.forEach(product => {
            if (product.id == req.params.id) {
                product.name = req.body.name;
                product.price = req.body.price;
            };
        });
        res.status(200).send(items)
    } else {
        res.status(404).send(`Something went wrong with id ${req.params.id}`);
    };
});



app.delete("/products/:id", (req, res) => {
    const found = items.some((product) => product.id == req.params.id);
    if (found) {
        res.status(200).send(items.filter((product) => product.id != req.params.id));
    } else {
        res.status(404).send(`Something went wrong with id ${req.params.id}`);
  };
});



app.get("/precio/:num", (req,res) => {
    const checkPrice = items.some((product) => product.price == req.params.num);
    if (checkPrice) {
        res.status(200).send(items.filter((product) => product.price == req.params.num));
    }
})



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));