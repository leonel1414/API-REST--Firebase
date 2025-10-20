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


export const getAllProducts = () =>{
    return products;
}

export const getProductById = () =>{
    return products.find((item) => item.id == id);
}