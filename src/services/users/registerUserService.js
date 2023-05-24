import { generatePassword } from "../../middlewares/bcrypt.middleware.js"
import { usersModel } from "../../models/users.model.js"

const registerService = async (body) => {
  const { username, password, email } = body

  let hashedPassword = generatePassword(password)
  let payload = {
    username,
    password: hashedPassword,
    email,
  }

  await usersModel.create(payload)

  const userData = await usersModel.findOne({
    where: {
      username,
    },
    raw: true
  })

  delete userData.password

  return userData
}

export default registerService
