import { deleteUserService } from "../services/users/deleteUserService.js"
import { getAllUsersService } from "../services/users/getAllUsersService.js"
import { getUserByIDService } from "../services/users/getUserByIDService.js"
import { updateUserService } from "../services/users/updateUserService.js"

export const getAllUserController = async (req, res) => {
  try {
    await getAllUsersService().then((user) => {
      res.status(200).send({
        data: user,
        status: true,
        message: "Get User Success",
      })
    })
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message,
    })
  }
}

export const getUserByIDController = async (req, res) => {
  try {
    await getUserByIDService(req.params).then((user) => {
      res.status(200).send({
        data: user,
        status: true,
        message: "Get User By ID Success",
      })
    })
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message,
    })
  }
}

// export const createUser = async (req, res) => {
//   try {
//     await createUsers(req.body).then((user) => {
//       res.status(200).send({
//         data: user,
//         status: true,
//         message: "Create User Success",
//       })
//     })
//   } catch (error) {
//     res.status(500).send({
//       status: false,
//       message: error.message,
//     })
//   }
// }

export const updateUserController = async (req, res) => {
  try {
    await updateUserService(req.body, req.params).then((user) => {
      res.status(200).send({
        data: user,
        status: true,
        message: "Update User Success",
      })
    })
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message,
    })
  }
}

export const deleteUserController = async (req, res) => {
  try {
    await deleteUserService(req.params).then((user) => {
      res.status(200).send({
        data: user,
        status: true,
        message: "Update User Success",
      })
    })
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message,
    })
  }
}
