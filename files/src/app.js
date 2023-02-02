import express from 'express'
import { ProductManager } from './index.js'

const productos = new ProductManager('./files/productos.json')
const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))

app.get("/products", async (req, res)=>{
  const {limit} = req.query
  try {
      const data = await productos.getProducts()
      limit ? res.send(data.slice(0, limit)) : res.send(data)
  } catch (error) {
      console.log(error)
  }
})

app.get("/products/:pId", async (req, res)=>{
  const pid = req.params.pId
  if (!pid){
      console.log({error:'id no encontrado'})
  } else {
      const data = await productos.getProducts()
      pid ? res.send(data.find(product => product.id == pid)) : res.send(data)
  }
})

app.listen(PORT, err => {
  if (err) console.log(err)
  console.log(`Escuchando en el puerto ${PORT}`)
})