import express from "express"

import { loginController } from "../controllers/auth.controller.js"

const router = express.Router()

router.get("/", loginController)
// router.get("/:id", getUserByID)
// router.post("/", createUser)
// router.put("/:id", updateUser)
// router.patch("/:id", deleteUser)

export default router
