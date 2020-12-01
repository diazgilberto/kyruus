const data = require('../data/data').Data

const UuidV4 = require('uuid').v4

const Doctors = {
  post: function(req) {
    req.body.id = UuidV4()
    data.doctors.push(req.body)
  },
  get: function(id) {
    if(id === undefined) {
      return data.doctors
    } else {
      return data.doctors.find(doctor => id === doctor.id)
    }
  },
  put: function(req) {
    const currentDoctor = data.doctors.find(doctor => req.params.id === doctor.id)
    const doctor = Object.assign(currentDoctor, req.body)
    return doctor
  },
  delete: function(id) {
    const currentDoctorIndex = data.doctors.findIndex(doctor => id === doctor.id)
    if(currentDoctorIndex !== -1) {
      return data.doctors.splice(currentDoctorIndex, 1)
    }
  }
}

module.exports = { Doctors }
