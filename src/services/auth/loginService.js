import { authenticateUser } from "../../middlewares/auth.middleware.js"

export const loginService = async (body) => {
  const { username } = body

  const accessToken = authenticateUser({ data: username })

  return {
    accessToken,
  }
}

