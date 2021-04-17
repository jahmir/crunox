import mongoose from 'mongoose'

const photoSchema = mongoose.Schema({

    url: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true
})

const Photo = mongoose.model('Photo', photoSchema)

export default Photo