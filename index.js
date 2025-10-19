import express from 'express';
import notFound from './src/middlewares/not-found.js';
import productsRouter from './src/routers/products.router.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

/*
app.use((req, res, next) =>{
    //res.json({ message: "Hola API en mantenemiento"});
    console.log(req.method);
    next();
});
*/

app.use(productsRouter);


const PORT = 3000;

// El middleware notFound debe ir AL FINAL de todas las rutas
app.use(notFound);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
