import * as Model from "../models/Product.js";


//Inicio
export const InicioPrincipal = (req,res) =>{
    //res.send("Bienvenidos a nuestra API REST");
    res.json({ message: "Bienvenidos a nuestra API REST!!"});
};

//todos los productos
export const getAllProducts = (req, res) =>{
    const { category } = req.query;

    const products = Model.getAllProducts();

    if(category){
        const productsFiltered = products.filter((item) => item.categorias.includes(category)); 

        return res.json(productsFiltered);
    }

    res.json(products);
};

//Buscador
export const searchProducts = (req, res) =>{
    const { name } = req.query;

    if(!name){
        return res.status(404).json({error: "El nombre es requerido"});
    };

    const products = Model.getAllProducts();

    const productsFiltered = products.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));

    if(productsFiltered == 0){
        return res.status(404).json({error: "No se encontraron productos"});
    };

    res.json(productsFiltered);
};

//Id
export const getProductById = (req, res) =>{
    const id = parseInt(req.params.id);

    const product = Model.getProductById(id);

    if(!product){
        res.status(404).json({error: "No existe el producto"});
    }

    res.json(product);
};