import express, { Request, Response } from "express"
import cors from "cors"
import {v4 as generatorId} from "uuid"
import { Product, products } from "./data"

//Ex 1
const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Server port: 3003"))

app.get("/test", (req, res) => {
  res.send("API (v)")
})

// Ex. 3/7


app.post("/products", (req: Request, res: Response) => {
  try {
    const name = req.body.name
    const price = req.body.price

    if (!name || !price) {
      throw new Error("Um ou os dois campos está faltando: 'name', 'price'")
    }

    if (typeof name !== "string") {
      throw new Error("O campo 'name' não é uma string, por favor, coloque uma string")
    }

    if (typeof price !== "number" || price <= 0) {
      throw new Error("O campo 'price' deve ser um numero maior que 0")
    }

    const newProduct: Product = {
      id: generatorId(),
      name,
      price
    }

    products.push(newProduct)

    res.send(products)

  } catch (error: any) {
    switch (error.message) {
      case "Um ou os dois campos está faltando: 'name', 'price'":
        res.status(422)
        break
      case "O campo 'name' não é uma string, por favor, coloque uma string":
        res.status(422)
        break
      case "O campo 'price' deve ser um numero maior que 0":
        res.status(422)
        break
      default:
        res.status(500)
    }

    res.send(error.message || "Erro inesperado")
  }
})

// Ex 4

app.get("/products", (req: Request, res: Response) => {
  try {
    res.send(products)

  } catch (error: any) {
    res.send(error.message || "Erro")
  }
})

// Ex 5/8

app.put("/products/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const novoPreco = req.body.price

    if (!novoPreco && novoPreco !== 0) {
      throw new Error("Path param faltando: 'price'")
    }

    if (typeof novoPreco !== "number" || novoPreco <= 0) {
      throw new Error("O path param 'price' deve ser um number e maior que zero")
    }

    let isProductFound = false

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products[i].price = novoPreco
        isProductFound = true
      }
    }

    if (!isProductFound) {
      throw new Error("Produto não encontrado")
    }

    res.send(products)

  } catch (error: any) {
    switch (error.message) {
      case "Path param faltando: 'price'":
        res.status(422)
        break
      case "O path param 'price' deve ser um number maior que zero":
        res.status(422)
        break
      case "Produto não encontrado":
        res.status(404)
        break
      default:
        res.status(500)
    }

    res.send(error.message || "Erro inesperado")
  }
})

// Exercícios 6 e 9
//Deletar produto 
app.delete("/products/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id

    let isProductFound = false

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1)
        isProductFound = true
      }
    }

    if (!isProductFound) {
      throw new Error("Produto não encontrado")
    }

    res.send(products)

  } catch (error: any) {
    switch (error.message) {
      case "Produto não encontrado":
        res.status(404)
        break
      default:
        res.status(500)
    }

    res.send(error.message || "Erro inesperado")
  }
})