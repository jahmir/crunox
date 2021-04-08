import express from 'express'
import { getLoginUrl } from '../controllers/googleController.js'
const router = express.Router()

router.route('/').get(getLoginUrl)

export default router