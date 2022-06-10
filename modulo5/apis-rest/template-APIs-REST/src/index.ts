import express from 'express'
import cors from 'cors'
import { getUsers, getUsersType,  getUserName, postUser  } from './ex/ex'



const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', getUsers)
app.get('/users-type', getUsersType)
app.get('/users-name', getUserName)
app.post('/users', postUser)




app.listen(3003, () => console.log('Server online!')) 