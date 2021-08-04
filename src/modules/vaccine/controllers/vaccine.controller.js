const humps = require('humps')
const VaccineService = require('../services/vaccine.service')

const vaccineController = {
  async test (req, res) {

    res.json({
      success: true,
      data: 'It\'s Worked'
    }).status(200)
  },
  async getVaccines (req, res) {
    const { quality, quantity } = humps.camelizeKeys(req.query)
    const query = {
      quality: quality || { $ne: null },
      quantity: quantity || { $ne: null }
    }

    const found = await VaccineService.getAll(query)

    res.json({
      success: true,
      data: found
    }).status(200)
  },
  async getVaccineById (req, res) {
    const { id } = req.params
    const found = await VaccineService.getOneById(id)

    res.json({
      success: true,
      data: found
    }).status(200)
  },
  async createVaccine (req, res) {
    const { name, quantity, quality } = humps.camelizeKeys(req.body)
    const created = await VaccineService.create({ name, quantity, quality })

    res.json({
      succes: true,
      data: created
    }).status(201)
  },
  async updateVaccine (req, res) {
    const { id } = req.params
    const { name, quantity, quality } = humps.camelizeKeys(req.body)
    const updated = await VaccineService.updateById(id, { name, quantity, quality })

    res.json({
      succes: true,
      data: updated
    }).status(200)
  },
  async deleteVaccine (req, res) {
    const { id } = req.params
    const deleted = await VaccineService.deleteById(id)
    
    res.json({
      succes: true,
      data: deleted
    }).status(200)
  }
}

module.exports = vaccineController
