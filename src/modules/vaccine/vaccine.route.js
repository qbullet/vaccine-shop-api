const express = require('express')
const vaccineController = require('./controllers/vaccine.controller')
const router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log(`NOW -> ${new Date()}`)
  next()
})

router.get('/', vaccineController.getVaccines)
router.get('/:id', vaccineController.getVaccineById)
router.post('/', vaccineController.createVaccine)
router.put('/', vaccineController.updateVaccine)
router.delete('/', vaccineController.deleteVaccine)

module.exports = router
