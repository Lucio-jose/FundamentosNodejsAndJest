import { Router } from "express";

const routes = Router()

const Database = []

routes.get('/users', (request, response)=>{
 return response.status(200).json({Database})
})

routes.post('/user', (request, response)=>{
    const {nome , descricao} = request.body
    Database.push(nome, descricao)
    return response.status(201).json({message: "Usuário salvo com sucesso!"})
   })

export {routes}