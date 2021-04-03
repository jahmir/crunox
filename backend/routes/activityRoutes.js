import express from 'express'
import { getActivities, createActivity, updateActivity, deleteActivity, getActivity } from '../controllers/activityControllers.js'
const router = express.Router()


router.route('/').get(getActivities).post(createActivity)
router.route('/:id').put(updateActivity).delete(deleteActivity).get(getActivity)


export default router