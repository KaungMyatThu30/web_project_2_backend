import mongoose from 'mongoose'
import { petSchema } from '../models/Pet.js'
import { vaccinationSchema } from '../models/Vaccination.js'

let petConnectionPromise

export async function getPetDatabaseConnection() {
  if (!petConnectionPromise) {
    const mongoUri = process.env.PETS_MONGODB_URI || process.env.MONGODB_URI
    if (!mongoUri) {
      throw new Error('PETS_MONGODB_URI or MONGODB_URI is not set in environment variables')
    }

    petConnectionPromise = mongoose
      .createConnection(mongoUri)
      .asPromise()
      .then((connection) => {
        console.log('Pet MongoDB connected')
        return connection
      })
  }

  return petConnectionPromise
}

export async function getPetModel() {
  const connection = await getPetDatabaseConnection()
  return connection.models.Pet || connection.model('Pet', petSchema)
}

export async function getVaccinationModel() {
  const connection = await getPetDatabaseConnection()
  return connection.models.Vaccination || connection.model('Vaccination', vaccinationSchema)
}
