const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema(
  {
    temperature:{
      type: Number,
      required: true,
    },
    humidity:{
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

dataSchema.index({ createdAt: 1 })
const Data = mongoose.model('data', dataSchema)

module.exports = Data