import mongoose from 'mongoose'

export const vaccinationSchema = new mongoose.Schema(
  {
    vaccineId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    petId: {
      type: String,
      required: true,
      trim: true,
    },
    vaccineName: {
      type: String,
      required: true,
      trim: true,
    },
    dateGiven: {
      type: String,
      required: true,
      trim: true,
    },
    nextDueDate: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: 'vaccination_data',
  }
)
