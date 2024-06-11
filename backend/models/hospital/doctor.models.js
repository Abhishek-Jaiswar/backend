import mongoose from 'mongoose'

const hospitalHours = new mongoose.Schema(
    {
        inHospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
        NoOfHours: {
            type: Number,
            default: 1
        }

    }
)

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: String,
        },
        salary: {
            type: String,
            required: true
        },
        qualification: {
            type: String,
            required: true
        },
        experience: {
            type: Number,
            default: 0
        },
        worksInHospital: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital'
            },
            {
                hospitalHours
            }
        ],

    }, { timestamps: true }
)

export const Doctor = mongoose.model('Doctor', doctorSchema)