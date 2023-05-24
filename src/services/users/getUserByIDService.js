import { usersModel } from "../../models/users.model.js"

const getUserByIDService = async (body) => {
  const { id } = body

  return await usersModel.findOne({
    where: {
      id,
    },
  })
}

export default getUserByIDService
