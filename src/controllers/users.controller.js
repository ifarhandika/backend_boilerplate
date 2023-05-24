import userService from "../services/users/index.js"

const {
  registerService,
  getAllUsersService,
  getUserByIDService,
  updateUserService,
  deleteUserService,
} = userService

export const registerUserController = async (req, res) => {
  try {
    await registerService(req.body).then((user) => {
      res.status(200).send({
        data: user,
        status: true,
        message: "Register User Success",
      })
    })
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message,
    })
  }
}

export const getAllUserController = async (req, res) => {
  try {
    await getAllUsersService().then((user) => {
      res.status(200).send({
        data: user,
        status: true,
        message: "Get All Users Success",
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
