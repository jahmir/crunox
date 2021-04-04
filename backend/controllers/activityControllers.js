import Activity from '../models/ActivityModel.js'
import asyncHandler from 'express-async-handler'


//get all activities controller
const getActivities = asyncHandler(async (req, res) => {
    const activities = await Activity.find()
    res.status(200).json(activities)
})

//get single activity
const getActivity = asyncHandler(async (req, res) => {
    const activity = await Activity.findById(req.params.id)
    res.status(200).json(activity)
})


//create activity controller
const createActivity = asyncHandler(async (req, res) => {

    const activity = new Activity({
        name: req.body.name,
        description: req.body.description
    })

    try {

        const createdActivity = await activity.save()
        if (createdActivity) {
            res.status(201).json(createdActivity)
        }

    } catch (error) {

    }

})

//create activity controller
const updateActivity = asyncHandler(async (req, res) => {

    const activity = await Activity.findById(req.params.id)

    activity.name = req.body.name
    activity.description = req.body.description

    try {

        const updatedActivity = await activity.save()
        res.status(201).json(updatedActivity)


    } catch (error) {

    }

})

//delete activity
const deleteActivity = asyncHandler(async (req, res) => {

    const activity = await Activity.findById(req.params.id)

    if (activity) {
        await activity.remove()
        res.json('Activity removed')
    } else {
        res.status(404)
        throw new Error('Activity not found')
    }
})

export { getActivities, createActivity, updateActivity, deleteActivity, getActivity }