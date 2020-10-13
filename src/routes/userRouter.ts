import Router from 'express'
import { UserController } from '../controllers'

const controller = new UserController();

const router = Router()
router.get('/', controller.list.bind(controller));
router.post('/', controller.create.bind(controller));
router.get('/:id', controller.read.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.delete('/:id', controller.delete.bind(controller));

export { router as userRouter };