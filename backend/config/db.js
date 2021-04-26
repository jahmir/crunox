import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export const connectDBProd = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI_PROD, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`Prod MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}