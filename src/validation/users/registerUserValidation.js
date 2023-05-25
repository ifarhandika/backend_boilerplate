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
  body("password")
    .custom((password) => {
      const regexPattern = new RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      )
      if (!regexPattern.test(password)) return false
      return true
    })
    .withMessage(
      "Password must contain at least one uppercase, one lowercase, one digit, one special character and minimum eight characters in length"
    ),
  body("email").isEmail().withMessage("Please enter a valid e-mail address"),
  validationErrorHandling(),
]

export default registerUserValidation
