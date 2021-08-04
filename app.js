const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const vaccineRouter = require('./src/modules/vaccine/vaccine.route')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })

app.use('/vaccine', vaccineRouter)

app.get('/', (req, res) => {
  res.send('Vaccine-Store service is running')
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`Vaccine-Store service is running on port [${PORT}] ...`)
})

module.exports = app
