const UuidV4 = require('uuid').v4
const data = require('../data/data').Data
const { Doctors } = require('./doctors')

const Appointments = {

  get: function(doc) {
    return this.findAppointments(doc)
  },
  post: function(doc, app) {
    const doctor = Doctors.get(doc)
    const appointments = this.findAppointments(doc)
    if(appointments !== undefined) {
      const schedule = doctor.schedule
      const appointmentDate = new Date(parseInt(app.appointment))
      const month = appointmentDate.getMonth()
      const day = appointmentDate.getDay()
      const hour = appointmentDate.getHours() + '00'
      if(schedule[month] !== undefined) {
        if(schedule[month][day] !== undefined) {
          if(schedule[month][day].includes(hour)) {
            const time = `${appointmentDate.getMonth()}-${appointmentDate.getDay()}-${appointmentDate.getHours()}00`
            appointments.appointments[time] = true
          }
        }
      }
    }
  },
  findAppointments: id => {
    const doctor = Doctors.get(id)
    if(doctor !== undefined) {
      return data.appointments[id]
    }
  }
}

module.exports = { Appointments }
