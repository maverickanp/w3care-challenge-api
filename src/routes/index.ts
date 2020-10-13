import Router from 'express'
import { coreRouter } from './coreRouter'
import { userRouter } from './userRouter'

const appRouter = Router();
appRouter.use('/', coreRouter);
appRouter.use('/users', userRouter);

export { appRouter };