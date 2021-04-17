import Photo from '../models/PhotoModel.js'
import asyncHandler from 'express-async-handler'

//get all activities controller
const getPhotos = asyncHandler(async (req, res) => {
    const photos = await Photo.find({ user: req.user._id })
    res.status(200).json(photos)
})

//create Photo controller
const createPhoto = asyncHandler(async (req, res) => {

    const photo = new Photo({
        url: req.body.url,
        user: req.user._id
    })

    try {

        const createdPhoto = await photo.save()
        if (createdPhoto) {
            res.status(201).json(createdPhoto)
        }

    } catch (error) {

    }

})

export { getPhotos, createPhoto }