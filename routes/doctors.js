var express = require('express');
var router = express.Router();
const UuidV4 = require('uuid').v4

// const Data = require('../data/data').Data
const { Doctors } = require('../api/doctors')
const { Appointments } = require('../api/appointments')

/* Doctors Routes */
router.get('/', function(req, res, next) {
  res.send({ status: 200, data: Doctors.get() });
});

router.get('/:id', (req, res, next) => {
  const doctor = Doctors.get(req.params.id)
  if(doctor === undefined) {
    res.sendStatus(204)
  } else {
    res.json({ status: 200, data: doctor })
  }
})

router.post('/', (req, res, next) => {
  Doctors.post(req)
  res.send(201)
})

router.put('/:id', (req, res, next) => {
  const doctor = Doctors.put(req)
  res.send({ status: 200, data: doctor })
})

router.delete('/:id', (req, res, next) => {
  const deletedDoctor = Doctors.delete(req.params.id)
  if(deletedDoctor === undefined) {
    res.sendStatus(204)
  } else {
    res.send({ status: 200, data: deletedDoctor })
  }
})

/* Appoitments Route */

router.get('/:id/appointments', (req, res, next) => {
  const appointments = Appointments.get(req.params.id)  
  if(appointments === undefined) {
    res.sendStatus(204)
  } else {
    appointments.uuid = req.params.id
    res.send({ status: 200, data: appointments })
  }
})

router.post('/:id/appointments', (req, res, next) => {
  Appointments.post(req.params.id, req.body)
  res.send(201)
})

module.exports = router;
