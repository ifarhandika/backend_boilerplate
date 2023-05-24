import { authenticateUser } from "../../middlewares/auth.middleware.js"

const loginService = async (body) => {
  const { username } = body

  const accessToken = authenticateUser({ data: username })

  return {
    accessToken,
  }
}

export default loginService

