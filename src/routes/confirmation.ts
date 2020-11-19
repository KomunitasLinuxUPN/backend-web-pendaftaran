import express from 'express'
import * as confirmationController from '../controllers/confirmation'

const router = express.Router()

router.post('/confirm-registration', confirmationController.confirmRegistration)

export default router
