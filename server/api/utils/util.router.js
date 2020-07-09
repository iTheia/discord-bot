import express from 'express'
import { catchErrors } from '../../middlewares'
import controller from './util.controller'

const utilRouter = express.Router()

utilRouter.route('/current-serie')
    .get(catchErrors(controller.getCurrentSerie))
    .post(catchErrors(controller.createCurrentSerie))


export default utilRouter