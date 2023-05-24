import { errorHandler } from "../errorHandler.js"
import { loginService } from "../services/auth/loginService.js"

export const loginController = async (req, res) => {
  try {
    await loginService(req.body).then((userData) => {
      res.status(200).send({
        data: userData,
        status: true,
        message: "Login Success",
      })
    })
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message,
    })
  }
}
