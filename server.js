import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import errorHandler from './middleware/errorMiddleware.js'
import contactRoutes from './routes/contactRoutes.js'


dotenv.config()
const app = express()
connectDB()

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/contacts', contactRoutes)

app.get("/", (req, res) => {
    res.json({ message: "API is Running!" })
})

app.get("*", (req, res) => {
    res.json({ message: "Route Not Found" })
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})