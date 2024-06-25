import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        inspectionDoctor: {
            type: String,
            required: true
        },
        registrationNo: {
            type: String || Number,
            required: true
        },
        age: {
            type: Number || String,
            required: true
        },
        bloodGroup: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true
        },
        addmittedIN: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    }, { timestamps: true }
)

export const Patient = mongoose.model('Patient', patientSchema)