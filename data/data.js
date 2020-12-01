const Data = {
  doctors: [
    {
      id: "8343aa41-34bd-4b76-8a56-da0bebf8f2cf",
      name: "Brad Pitt",
      locations: ["7080bdd9-eba3-4371-af6e-2f0f5764804c"],
      schedule: {
        11: {
          1: ["0900", "1000", "1100", "1300", "1400", "1500", "1600"],
          2: [],
          3: ["1300", "1400"],
          4: ["0900", "1000", "1100", "1300", "1400", "1500", "1600"],
          5: []
        }
      }
    }
  ],
  appointments: {
    "8343aa41-34bd-4b76-8a56-da0bebf8f2cf": {
      appointments: {
        "11-1-1500": true,
        "10-1-1500": true
      }
    }
  },
  locations: [
    {
      id: "fa8f3a47-3d42-4f0a-93c7-a4b49d38c398",
      address: "123 Main St, City, ST, 12345"
    },
    {
      id: "79529bf8-849f-427e-885b-426a47541225",
      address: "456 Back St, City, ST, 12345"
    },
    {
      id: "7080bdd9-eba3-4371-af6e-2f0f5764804c",
      address: "987 Front Dr, City, ST, 12345"
    }
  ]
}

module.exports = { Data }
