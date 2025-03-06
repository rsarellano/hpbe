import express from'express'
const router = express.Router();
import createUser from '../../controllers/users/Users.js'

router.post("/createUsers", createUser)

export default router