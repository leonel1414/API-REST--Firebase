import express from 'express';
import notFound from './src/middlewares/not-found.js';
const app = express();

// Middleware para parsear JSON
app.use(express.json());

//Array de productos;

const products =[
    {
        id:1,
        name:"Camisetas Deportiva",
        price: 150,
        categorias: ["ropa","deportes"],
    },
    {
        id:2,
        name:"Zapatos Running",
        price: 1200,
        categorias: ["calzados","deportes"],
    },
    {
        id:3,
        name:"Mochila Escolar",
        price: 1500,
        categorias: ["mochila","escolar"],
    },
        {
        id:4,
        name:"Auriculares Bluetooth",
        price: 800,
        categorias: ["tecnología","audio"],
    },
    {
        id:5,
        name:"Botella Térmica",
        price: 220,
        categorias: ["hogar","accesorios"],
    },
];

/*
app.use((req, res, next) =>{
    //res.json({ message: "Hola API en mantenemiento"});
    console.log(req.method);
    next();
});
*/

app.get("/", (req,res) =>{
    //res.send("Bienvenidos a nuestra API REST");
    res.json({ message: "Bienvenidos a nuestra API REST!!"});
});

app.get("/products", (req, res) =>{
    const { category } = req.query;

    if(category){
        const productsFiltered = products.filter((item) => item.categorias.includes(category)); 

        return res.json(productsFiltered);
    }

    res.json(products);
});

app.get("/products/:id", (req, res) =>{
    const id = parseInt(req.params.id);

    const product = products.find((item) => item.id == id);

    if(!product){
        res.status(404).json({error: "No existe el producto"});
    }

    res.json(product);
});

const PORT = 3000;

// El middleware notFound debe ir AL FINAL de todas las rutas
app.use(notFound);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
