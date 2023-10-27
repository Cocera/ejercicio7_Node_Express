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
    const checkPrice = items.some(product => product.precio == req.params.num);
    if (checkPrice) {
        res.status(200).send(items.filter(product => product.precio == req.params.num));
    }else {
        res.status(404).send(`There's no products with price ${req.params.precio}`)
    }
})

app.get('/products/50-250/', (req, res) => {
    const found = items.some(product => product.precio > 50 && product.precio < 250);
    if (found) {
        res.status(200).send(items.filter(product => product.precio > 50 && product.precio < 250))
    } else {
        res.status(404).send(`There's no products with price between 50 and 250`)
    }
})

app.get('/products/find_price/', (req, res) => {
    const found = items.some(product => product.precio == req.body.precio);
    if (found) {
        res.status(200).send(items.filter(product => product.precio == req.body.precio))
    } else {
        res.status(404).send(`There's no products with price ${req.body.precio}`)
    }
})

app.get('/products/find_name/', (req, res) => {
    const found = items.some(products => products.nombre == req.body.nombre);
    if (found) {
        res.status(200).send(items.filter(products => products.nombre == req.body.nombre))
    } else {
        res.status(404).send(`There's no products with price ${req.body.nombre}`)
    }
})



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));