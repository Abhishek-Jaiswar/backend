import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        registrationNo: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        specializatedIn: [
            {
                type: String,
                required: true
            }
        ]

    }, { timestamps: true }
)

export const Hospital = mongoose.model('Hospital', hospitalSchema)