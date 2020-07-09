import express from 'express'
import { serieRouter } from './api/series'
import { utilRouter } from './api/utils'

const router = express.Router()

router.use('/utils', utilRouter)

router.use('/series', serieRouter)

export default router