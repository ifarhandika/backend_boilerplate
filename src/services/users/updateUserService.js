import { usersModel } from "../../models/users.model.js"

export const updateUserService = async (body, params) => {
  const { username, batch } = body
  const { id } = params
  const userData = {
    username,
    batch,
  }
  await usersModel.update(userData, {
    where: {
      id,
    },
  })
  return await usersModel.findOne({
    where: {
      id,
    },
  })
}
