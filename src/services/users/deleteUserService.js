import { usersModel } from "../../models/users.model.js"

const deleteUserService = async (params) => {
  const { id } = params

  await usersModel.update(
    {
      active_status: "-1",
    },
    {
      where: {
        id,
      },
    }
  )
  return await usersModel.findOne({
    where: {
      id,
    },
  })
}

export default deleteUserService
