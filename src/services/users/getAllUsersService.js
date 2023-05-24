import { usersModel } from "../../models/users.model.js"

export const getAllUsersService = async () => {
  return await usersModel.findAll({})
}
