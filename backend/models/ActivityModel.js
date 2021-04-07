import mongoose from 'mongoose'

const activitySchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true
})

const Activity = mongoose.model('Activity', activitySchema)

export default Activity