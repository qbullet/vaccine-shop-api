const StatusEnum = require('../../../common/status.enum')
const VaccineDocument = require('../models/vaccine.schema')

const VaccineService = {
  create(payload) {
    return new VaccineDocument(payload).save()
  },
  getAll(query) {
    return VaccineDocument.find({ ...query, status: StatusEnum.ACTIVE })
  },
  getOneById(id) {
    return VaccineDocument.findOne({ _id: id })
  },
  updateById(id, payload) {
    return VaccineDocument.findOneAndUpdate({ _id: id }, payload)
  },
  deleteById(id) {
    return VaccineDocument.findOneAndUpdate({ _id: id }, { status: StatusEnum.DELETED })
  }
}

module.exports = VaccineService