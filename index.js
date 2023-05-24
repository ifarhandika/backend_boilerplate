import * as dotenv from "dotenv"
dotenv.config()

import express from "express"
import bodyParser from "body-parser"
import multer from "multer"

import { db } from "./config/database.js"

const upload = multer()

//Import routes
import userRoutes from "./src/routes/users.route.js"
import loginRoutes from "./src/routes/auth.route.js"
import { extractToken, verifyUser } from "./src/middlewares/auth.middleware.js"

//Connect to Database
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err))

//initialize the whole app
const app = express()
const PORT = 3000

//Use JSON for the app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(upload.array())
app.use(express.static("public"))

//Routes
app.use("/users", userRoutes)
app.use("/login", loginRoutes)

// app.get("/", (req, res) => {
//   res.send("Homepage")
// })

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
