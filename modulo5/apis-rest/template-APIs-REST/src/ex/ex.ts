
import { Request, Response } from 'express'
import { users, Users, USER_TYPE } from './data'


// Exercício 1

export const getUsers = (req: Request, res: Response) => {
    let errorCode = 500

    try {
        if(!users) {
            errorCode = 404
            throw new Error('Nenhum usuário cadastrado')
        }



       res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
}

// Exercício 2

export const getUsersType = (req: Request, res: Response) => {
    let errorCode = 500

    try {
        if(!users) {
            errorCode = 404
            throw new Error('Nenhum usuário cadastrado')
        }

        const type = req.query.type

        if(!type) {
            errorCode = 422
            throw new Error('Falta o parâmetro de busca')
        }

        if (type != USER_TYPE.NORMAL && type != USER_TYPE.ADMIN) {
            errorCode = 422
            throw new Error("Inserir query de type válido: 'NORMAL' ou 'ADMIN'")
          }

        const userType = users.filter(u => u.type === type)

        if(!userType.length) {
            errorCode = 404
            throw new Error('Tipo não encontrado')
        }

        res.status(200).send(userType)


    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

// Exercício 3

export const getUserName = (req: Request, res: Response) => {
    let errorCode = 500

    try {
        if(!users) {
            errorCode = 404
            throw new Error('Nenhum usuário cadastrado')
        }

        const name = req.query.name as string

        if(!name) {
            errorCode = 422
            throw new Error('Falta o parâmetro de busca')
        }

        const userName = users.filter(u => u.name.toLowerCase() === name.toLowerCase())


        if (!userName.length) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(userName)

    } catch(error: any) {
        res.status(errorCode).send(error.message)
    }
} 

// Exercício 4


export const postUser = (req: Request, res:Response) => {
    let errorCode = 500

    try{
        const { name, email, type, age } = req.body

        if(!name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Faltam parâmetros a serem passados pelo body')
        }

        if(type !== USER_TYPE.ADMIN && type !== USER_TYPE.NORMAL) {
            errorCode = 422
            throw new Error('Inserir type de usuário válido')
        }

        const newUser: Users = {
            id: users.length + 1,
            name,
            email,
            type,
            age
        }

        users.push(newUser)
        res.status(202).send(users)

    } catch(error: any) {
        res.status(errorCode).send(error.message)
    }
} 