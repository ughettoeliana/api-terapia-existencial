import express from "express";
import therapistController from '../controllers/therapist.js'
import { register, login } from "../controllers/therapistAuth.js"; 
//import { validateCreateTherapist } from '../middlewares/therapist.js'
const route = express.Router();

//CRUD of the therapists

//  route.post('/therapists', [validateCreateTherapist], therapistController.createTherapist)
 route.post('/therapists/register', register)
 route.post('/therapists/login', login)
 route.get('/therapists', therapistController.getTherapists)
 route.get('/therapist/:id', therapistController.getTherapistById)
 route.put('/therapist/:id', therapistController.updateTherapist)
 route.delete('/therapist/:id', therapistController.deleteTherapist)


export default route;