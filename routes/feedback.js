import express from "express";
import feedbackController from '../controllers/feedback.js'
import { validateCreateFeedback } from '../middlewares/feedback.js'
const route = express.Router();

//CRUD of the feedback

 route.post('/feedbacks', [validateCreateFeedback], feedbackController.createFeedback)
 route.get('/feedbacks', feedbackController.getFeedbacks)
 route.get('/feedback/:id', feedbackController.getFeedbackById)
 route.put('/feedback/:id', feedbackController.updateFeedback)
 route.delete('/feedback/:id', feedbackController.deleteFeedback)


export default route;