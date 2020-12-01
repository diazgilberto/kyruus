const { Doctors } = require('../api/doctors')
const { Appointments } = require('../api/appointments')

describe('Doctors', () => {
  const expectedAllDoctors = [{"id": "8343aa41-34bd-4b76-8a56-da0bebf8f2cf", "locations": ["7080bdd9-eba3-4371-af6e-2f0f5764804c"], "name": "Brad Pitt", "schedule": {"11": {"1": ["0900", "1000", "1100", "1300", "1400", "1500", "1600"], "2": [], "3": ["1300", "1400"], "4": ["0900", "1000", "1100", "1300", "1400", "1500", "1600"], "5": []}}}]
  const expectedSingleDoctor = {"id": "8343aa41-34bd-4b76-8a56-da0bebf8f2cf", "locations": ["7080bdd9-eba3-4371-af6e-2f0f5764804c"], "name": "Brad Pitt", "schedule": {"11": {"1": ["0900", "1000", "1100", "1300", "1400", "1500", "1600"], "2": [], "3": ["1300", "1400"], "4": ["0900", "1000", "1100", "1300", "1400", "1500", "1600"], "5": []}}}
  describe('get', () => {
    it('should get all doctors', () => {
      const doctors = Doctors.get()
      expect(doctors).toEqual(expectedAllDoctors)
    })
    it('should get single doctor', () => {
      const doctor = Doctors.get('8343aa41-34bd-4b76-8a56-da0bebf8f2cf')
      expect(doctor).toEqual(expectedSingleDoctor)
    })
  })
  describe('post', () => {
    it('should add a new doctor', () => {
      const req = { body: { name: 'Batman' } }
      Doctors.post(req)
      const doctors = Doctors.get()
      expect(doctors.length).toEqual(2)
    })
  })
})

describe('Appointments', () => {
  describe('get', () => {
    const appointments = { appointments: { '11-1-1500': true, '10-1-1500': true } }
    it('should get all docs appointments', () => {
      expect(appointments).toEqual({ appointments: { '11-1-1500': true, '10-1-1500': true } })
    })
    it('should add an appointment', () => {
      const newAppointment = { "appointment": "1607030000000" }
      Appointments.post("8343aa41-34bd-4b76-8a56-da0bebf8f2cf", newAppointment)
      const allAppointments = Appointments.get("8343aa41-34bd-4b76-8a56-da0bebf8f2cf")
      expect(allAppointments).toEqual({"appointments": {"10-1-1500": true, "11-1-1500": true, "11-4-1500": true}})
    })
    it('should not add the appointment', () => {
      const allAppointments = { appointments: { '11-1-1500': true, '10-1-1500': true } }
      const newAppointment = { "appointment": "1407022000000" }
      Appointments.post("8343aa41-34bd-4b76-8a56-da0bebf8f2cf", newAppointment)
      expect(allAppointments).toEqual({"appointments": {"10-1-1500": true, "11-1-1500": true}})
    })
  })
})
