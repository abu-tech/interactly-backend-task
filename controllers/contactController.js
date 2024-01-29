import Contact from '../models/contactModel.js'
import asyncHandler from 'express-async-handler'

//@desc create contact
//@route POST /api/contacts
const createContact = asyncHandler(async (req, res) => {
    try {
        const { first_name, last_name, email, mobile_number } = req.body
        const newContact = await Contact.create({
            first_name,
            last_name,
            email,
            mobile_number
        })

        res.status(201).json({
            data: newContact
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        throw new Error("Internal Server Error")
    }
})

//@desc get contact by ID
//@route get /api/contacts/:id
const getContactById = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id)

        res.status(200).json({
            data: contact
        })
    } catch (error) {
        console.log(error)
        res.status(404)
        throw new Error("Contact Not Found")
    }
})


//@desc update contact by ID
//@route put /api/contacts/:id
const updateContactById = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!contact) {
            throw new Error("Contact Not Found")
        }

        res.status(200).json({
            data: contact
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        throw new Error("Internal Server Error")
    }
})


//@desc delete contact by ID
//@route delete /api/contacts/:id
const deleteContactById = asyncHandler(async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: "Contact Removed"
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        throw new Error("Internal Server Error")
    }
})

export {
    createContact,
    updateContactById,
    getContactById,
    deleteContactById
}