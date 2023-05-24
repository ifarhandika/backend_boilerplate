import { usersModel } from "../../models/users.model.js"

export const getUserByIDService = async (body) => {
  const { id } = body

  return await usersModel.findOne({
    where: {
      id,
    },
  })
}
