import express from 'express'
import { getActivities, createActivity, updateActivity, deleteActivity, getActivity } from '../controllers/activityControllers.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()


router.route('/').get(protect, getActivities).post(protect, createActivity)
router.route('/:id').put(protect, updateActivity).delete(protect, deleteActivity).get(protect, getActivity)


export default router