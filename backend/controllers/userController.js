import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'
import generateToken from '../utils/generateToken.js'

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
            name: user.name,
            token: generateToken(user._id)
        })

        console.log('auth');
    } else {
        res.status(401)
        throw new Error('Wrong Credentials')
    }
})

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { email, name, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        email,
        name,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


const glogin = asyncHandler(async (req, res) => {
    const { email, name } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(201).json({
            _id: userExists._id,
            email: userExists.email,
            name: userExists.name,
            isAdmin: userExists.isAdmin,
            token: generateToken(userExists._id)
        })
    } else {

        const user = await User.create({
            email,
            name,
            password: '1234'
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                email: user.email,
                name: user.name,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        }
    }
})

export { loginUser, registerUser, glogin }