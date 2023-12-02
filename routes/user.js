import express from "express";
import userController from '../controllers/user.js'
import { validateCreateUser } from '../middlewares/user.js'
//import userSchema from "../schemas/user.js";
const route = express.Router();

//CRUD of the users

 route.post('/users', [validateCreateUser], userController.createUser)
 route.get('/users', userController.getUsers)
 route.get('/user/:id', userController.getUserById)
 route.put('/user/:id', userController.updateUser)
 route.delete('/user/:id', userController.deleteUser)



 //Example of how the routes kinda works

// route.post("/user", (req, res) => {
//   const user = userSchema(req.body);
//   user
//     .save()
//     .then((data) => res.status(200).json({ data }))
//     .catch((error) => res.json({ msg: error })); 
// });

export default route;
