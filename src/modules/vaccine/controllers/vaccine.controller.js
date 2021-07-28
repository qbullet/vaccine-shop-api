const humps = require('humps')

const vaccines = [
  {
    id: '001',
    name: 'Sinovac',
    responsibility: 30
  },
  {
    id: '002',
    name: 'Aztrazeneca',
    responsibility: 45
  },
  {
    id: '003',
    name: 'Moderna',
    responsibility: 90
  },
  {
    id: '004',
    name: 'Sinopharm',
    responsibility: 70
  },
  {
    id: '005',
    name: 'Pfizer',
    responsibility: 95
  }
]

const vaccineController = {
  getVaccine (req, res) {
    const responsibility = req?.query?.responsibility || 0
    const found = vaccines.filter((vaccine) => vaccine.responsibility >= +responsibility)

    res.json({
      success: true,
      data: found
    }).status(200)
  },
  getVaccineById (req, res) {
    const { id } = req.params
    const found = vaccines.find((vaccine) => vaccine.id === id)

    res.json({
      success: true,
      data: found
    }).status(200)
  },
  createVaccine (req, res) {
    const { id, name, responsibility } = req.body
    vaccines.push({ id, name, responsibility })

    res.json({
      succes: true,
      data: vaccines
    }).status(201)
  }
}

module.exports = vaccineController
