import { Router } from "express";

const router = Router();

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


router.get("/", (req,res) =>{
    //res.send("Bienvenidos a nuestra API REST");
    res.json({ message: "Bienvenidos a nuestra API REST!!"});
});


router.get("/products", (req, res) =>{
    const { category } = req.query;

    if(category){
        const productsFiltered = products.filter((item) => item.categorias.includes(category)); 

        return res.json(productsFiltered);
    }

    res.json(products);
});

//buscador


router.get("/products/search",(req, res) =>{
    const { name } = req.query;

    if(!name){
        return res.status(404).json({error: "El nombre es requerido"});
    };

    const productsFiltered = products.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));

    if(productsFiltered == 0){
        return res.status(404).json({error: "No se encontraron productos"});
    };

    res.json(productsFiltered);
});


router.get("/products/:id", (req, res) =>{
    const id = parseInt(req.params.id);

    const product = products.find((item) => item.id == id);

    if(!product){
        res.status(404).json({error: "No existe el producto"});
    }

    res.json(product);
});


export default router;