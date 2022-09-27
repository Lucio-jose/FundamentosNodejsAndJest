import { Router } from "express";
import { userController } from "./controllers/userController.js";

const routes = Router()

routes.get('/users', userController.Pegar)
 
routes.post('/user', userController.Criar)

export {routes}