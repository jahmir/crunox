import express from 'express'
import { glogin, loginUser, registerUser } from '../controllers/userController.js'
const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/glogin').post(glogin)

export default router