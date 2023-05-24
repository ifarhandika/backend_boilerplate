import express from "express"

import {
  deleteUserController,
  getAllUserController,
  getUserByIDController,
  registerUserController,
  updateUserController,
} from "../controllers/users.controller.js"
import { verifyUser } from "../middlewares/auth.middleware.js"
import userValidation from "../validation/users/index.js"

const { registerUserValidation } = userValidation
const router = express.Router()

router.get("/", verifyUser, getAllUserController)
router.get("/:id", getUserByIDController)
router.post("/", registerUserValidation, registerUserController)
router.put("/:id", updateUserController)
router.patch("/:id", deleteUserController)

export default router
