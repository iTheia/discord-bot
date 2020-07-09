import express from 'express'
import { catchErrors } from '../../middlewares'
import controller from './serie.controller'

const serieRouter = express.Router()

serieRouter.route('/')
    .get(catchErrors(controller.getAll))
    .post(catchErrors(controller.create))

serieRouter.get('/next/:serie', catchErrors(controller.next))

serieRouter.route('/:id')
    .get(catchErrors(controller.getSingle))
    .put(catchErrors(controller.update))
    .delete(catchErrors(controller.delete))

export default serieRouter