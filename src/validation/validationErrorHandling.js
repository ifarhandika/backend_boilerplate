import { validationResult } from "express-validator"

export const validationErrorHandling =
  (statusCode = 400) =>
  (req, res, next) => {
    const error = validationResult(req)

    if (!error.isEmpty()) {
      return res
        .status(statusCode)
        .json({ message: error.array(), status: false })
    }
    
    next()
  }
