# Kyruus Challenge

## Table of Contents

- [Run Service](#run-service)
- [Manage Resources With Insomnia](#manage-resourses-with-insomnia)
- [Running Test](#running-test)
- [Development Reasoning](#development-reasoning)

### Run Service

- `git clone git@github.com:diazgilberto/kyruus.git`
- `cd kyruus`
- `npm i`
- `npm run dev`

### Manage Resourses With Insomnia

Insomnia is an app that does the same thing that Postman. Download Insomnia [here](https://insomnia.rest/). In this very repo, in root dir, there is a json file with a collection of endpoints. Import the file into Insomnia for managing resources.

### Running Test

- In a new terminal window `cd /path/to/kyruus`
- `npm run test:watch`

### Development Reasoning

- Local JavaScript object for persisting data
- I'm not taking into consideration validations in the backend. In my world, it is a given that the front-end sending the correct data.
- I'm using dates as keys to avoid checking date values.
