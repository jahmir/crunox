import express from 'express'
import { getPhotos, createPhoto } from '../controllers/photoControllers.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').get(protect, getPhotos).post(protect, createPhoto)

export default router