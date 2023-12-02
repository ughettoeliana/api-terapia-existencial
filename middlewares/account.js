import { AccountSchema } from "../schemas/account.js";
//import accountServices from '../services/account.js'

export function validateCreateAccount(req, res, next) {
  console.log('llegue a ValidateCreateAccount')
  AccountSchema.validate(req.body, {
    stripUnknown: true,
    abortEarly: false
  })
    .then(async function (data) {
      req.body = data
      next()
    })
    .catch(function (err) {
      res.status(400).json(err)
    })

}