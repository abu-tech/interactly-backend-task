import mongoose from 'mongoose'
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL)
        console.log(`CONNECTED TO DATABASE: ${conn.connection.host}`)
    } catch (error) {
        console.log(process.env.DB_URL)
        console.log(`error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB