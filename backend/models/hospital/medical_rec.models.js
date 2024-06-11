import mongoose from 'mongoose'

const medicalRecords = new mongoose.Schema(
    {
        patientName: {
            type: String,
            required: true
        },
        patientGaurdian: {
            type: String,
            required: true
        },
        dateOfAddmit: {
            type: Number,
            required: true
        },
        desease: {
            type: String,
        },
        inAddmittedHospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
        deseaseDescription: {
            type: String || Number,
            default: "No desease found.."
        },
        prescribeMedecine: {
            type: String,
            required: true
        },
        operationalDoctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        }


    }, { timestamps: true }
)

export const MedicalRecords = mongoose.model('MedicalRecords', medicalRecords)