const express = require('express')
const vaccineController = require('./controllers/vaccine.controller')
const router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log(`NOW -> ${new Date()}`)
  next()
})

router.get('/', vaccineController.getVaccine)
router.get('/:id', vaccineController.getVaccineById)
router.post('/', vaccineController.createVaccine)

module.exports = router
