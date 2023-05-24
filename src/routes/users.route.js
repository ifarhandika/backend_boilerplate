import express from "express"

import {
  deleteUserController,
  getAllUserController,
  getUserByIDController,
  updateUserController,
} from "../controllers/users.controller.js"
import { verifyUser } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.get("/", verifyUser, getAllUserController)
router.get("/:id", getUserByIDController)
// router.post("/", createUser)
router.put("/:id", updateUserController)
router.patch("/:id", deleteUserController)

export default router
