import { Database } from "../database.js"

const userController={
   Criar(request, response){
        const {nome , descricao} = request.body
    
        if(nome.length < 1){
            return response.status(403).json({message: "Não pode cadastrar usuários sem"})
        }
    
        Database.push(nome, descricao)
        return response.status(201).json({message: "Usuário salvo com sucesso!"})
       },
       
       Pegar(request, response){
        return response.status(200).json({Database})
       }
}


export {userController}

