const express = require('express')
const cors = require('cors')

const vaccineRouter = require('./src/modules/vaccine/vaccine.route')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/vaccine', vaccineRouter)

app.get('/', (req, res) => {
  res.send('Vaccine-Store service is running')
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`Vaccine-Store service is running on port [${PORT}] ...`)
})

module.exports = app
