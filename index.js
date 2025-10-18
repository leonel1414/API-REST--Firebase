import express from 'express';
import notFound from './src/middlewares/not-found.js';
const app = express();

//Array de productos;

const product =[
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
]


/*
app.use((req, res, next) =>{
    //res.json({ message: "Hola API en mantenemiento"});
    console.log(req.method);
    next();
});
*/
app.use(notFound);

app.get("/", (req,res) =>{
    //res.send("Bienvenidos a nuestra API REST");
    res.json({ message: "Bienvenidos a nuestra API REST!!"});
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

