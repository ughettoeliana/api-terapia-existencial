import express from "express";
import serviceController from '../controllers/service.js'
import { validateCreateService } from '../middlewares/service.js'
import { verifySession } from "../middlewares/account.js";
const route = express.Router();

//CRUD of the services

 route.post('/services', [validateCreateService], serviceController.createService)
 route.get('/services', [verifySession],serviceController.getServices)
 route.get('/service/:id', serviceController.getServiceById)
 route.put('/service/:id', serviceController.updateService)
 route.delete('/service/:id', serviceController.deleteService)


export default route;