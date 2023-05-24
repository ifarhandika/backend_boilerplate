import { usersModel } from "../../models/users.model.js"

const getAllUsersService = async () => {
  return await usersModel.findAll({})
}

export default getAllUsersService
