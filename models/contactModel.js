import mongoose from 'mongoose'
const { Schema } = mongoose

const contactSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile_number: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

const Contact = mongoose.model("Contact", contactSchema)

export default Contact