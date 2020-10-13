import Router from 'express'
import { CoreController } from '../controllers/coreController'

const router = Router()
router.get('/', CoreController.home);

export { router as coreRouter };