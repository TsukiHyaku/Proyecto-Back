import express from 'express'
import { ProductManager } from './index.js'

const productos = new ProductManager('./files/productos.json')
const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))

app.get("/products", async (req, res) => {
  try {
    const { limit } = req.query;
    const data = await productos.getProducts();
    const products = data.slice(0, limit);
    res.send(products);
  } catch (error) {
    res.send(error);
  }
});

app.get("/products/:pId", async (req, res) => {
  const pid = req.params.pId;
  if (!pid) {
    return res.status(400).json({ error: "id no valido" });
  }
  const product = await productos.getProductById();
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  return res.send(product);
});

app.listen(PORT, err => {
  if (err) console.log(err)
  console.log(`Escuchando en el puerto ${PORT}`)
})