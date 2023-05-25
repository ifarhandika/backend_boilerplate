import jwt from "jsonwebtoken"
import { errorHandler } from "../errorHandler.js"

export const authenticateUser = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" })

export const extractToken = (token, callback) => {}

export const verifyUser = (req, res, next) => {
  if (!req.headers.authorization)
    return errorHandler(res, 401, "No Authorization Token was found")

  let token = req.headers.authorization.split(" ")
  
  if (token.length === 1) {
    return errorHandler(res, 401, "Format for Authorization: Bearer [token]")
  }

  let extractToken = jwt.verify(token[1], process.env.SECRET_KEY, (err) => {
    if (err) {
      return err
    }
  })

  if (extractToken) return errorHandler(res, 401, "JWT Expired")

  next()
}
