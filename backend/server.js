import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { errorHandler } from './middlewares/errorMiddleware.js'
import connectDB from './config/db.js'
import activityRoutes from './routes/activityRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()



app.use(express.json())

// mount routes
app.use('/api/activities', activityRoutes)
app.use('/api/users', userRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} {
    app.get('/', (req, res) => {
        res.send('API is running ...')
    })
}

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))