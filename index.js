import express from 'express';
import notFound from './src/middlewares/not-found.js';
const app = express();


app.use((req, res, next) =>{
    //res.json({ message: "Hola API en mantenemiento"});
    console.log(req.method);
    next();
});

app.use(notFound);

app.get("/", (req,res) =>{
    //res.send("Bienvenidos a nuestra API REST");
    res.json({ message: "Bienvenidos a nuestra API REST!!"});
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

