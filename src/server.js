import express from "express"
import { routes } from "./routes.js"

const app = express()

app.use(express.json())
 
app.use(routes)
 
app.listen(3031, ()=>{
    console.log('servidor rodando')
})

// Thunder client - permite-nos criar requisições dentro do vscode