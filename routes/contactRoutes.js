import express from 'express'
const router = express.Router()
import { createContact, getContactById, updateContactById, deleteContactById } from '../controllers/contactController.js'


router.route('/')
    .post(createContact)

router.route('/:id')
    .get(getContactById)
    .put(updateContactById)
    .delete(deleteContactById)


export default router