import { body } from "express-validator"
import { validationErrorHandling } from "../validationErrorHandling.js"
import { usersModel } from "../../models/users.model.js"

const registerUserValidation = [
  body("username")
    .isLength({
      min: 3,
      max: 15,
    })
    .withMessage("Username must be of 3 to 15 characters")
    .custom(async (username) => {
      const existedUsername = await usersModel.findOne({
        where: {
          username,
        },
        raw: true,
      })

      if (existedUsername) return Promise.reject()

      return true
    })
    .withMessage("Username already exists"),
  validationErrorHandling(),
]

export default registerUserValidation
