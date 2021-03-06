const express = require('express')
const vaccineController = require('./controllers/vaccine.controller')
const router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log(`NOW -> ${new Date()}`)
  next()
})

router.get('/test', vaccineController.test)
router.get('/', vaccineController.getVaccines)
router.get('/:id', vaccineController.getVaccineById)
router.post('/', vaccineController.createVaccine)
router.put('/:id', vaccineController.updateVaccine)
router.delete('/:id', vaccineController.deleteVaccine)

module.exports = router
