import express from "express";
import userController from '../controllers/user.js'
import { validateCreateUser } from '../middlewares/user.js'
const route = express.Router();

//CRUD of the services

 route.post('/users', [validateCreateUser], userController.createUser)
 route.get('/users', userController.getUsers)
 route.get('/user/:id', userController.getUserById)
 route.put('/user/:id', userController.updateUser)
 route.delete('/user/:id', userController.deleteUser)


export default route;