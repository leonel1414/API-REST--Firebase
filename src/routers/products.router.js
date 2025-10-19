import { Router } from "express";
import { InicioPrincipal, getAllProducts, searchProducts, getProductById } from "../controllers/products.controller.js";

const router = Router();

router.get("/", InicioPrincipal);

//Todo los productos
router.get("/products", getAllProducts);

//buscador
router.get("/products/search", searchProducts);

//Id
router.get("/products/:id", getProductById);


export default router;