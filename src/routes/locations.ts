import { Router } from 'express'

import { Location } from '../models'
import { create, update, destroy, findOne, findAll } from '../controllers/locations'
import validateLocation from '../middleware/validate-location'

const router: Router = Router()

router.post('/', validateLocation, create)

router.put('/:id', validateLocation, update)

router.delete('/:id', destroy)

router.get('/:id', findOne)

router.get('/', findAll)

export default router
