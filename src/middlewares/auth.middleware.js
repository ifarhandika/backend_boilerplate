import jwt from "jsonwebtoken"
import { errorHandler } from "../errorHandler.js"

export const authenticateUser = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" })

export const extractToken = (token) => jwt.verify(token, process.env.SECRET_KEY)

export const verifyUser = (req, res, next) => {
  if (!req.headers.authorization)
    errorHandler(res, 401, "No Authorization Token was found")
  let token = req.headers.authorization.split(" ")
  if (token.length === 1) {
    errorHandler(res, 401, "Format for Authorization: Bearer [token]")
  }

  extractToken(token[1])

  next()
}
