import { Patient } from "../models/hospital/patient.models.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const patient = asyncHandler(async (req, res) => {
    const { name, diagnosedWith, registrationNo, age, bloodGroup, gender, admittedIn } = req.body

    // Check if any required field is missing or empty
    if (
        [name, diagnosedWith, registrationNo, age, bloodGroup, gender, admittedIn].some((field) => 
            field?.trim() === ""
        )
    ) {
        return res.status(400).json({ error: "Fields cannot be empty, please verify them!" });
    }

    // Check if a patient with the same name or registration number already exists
    const checkExistingPatient = await Patient.findOne({
        $or: [{ name }, { registrationNo }]
    })

    if (checkExistingPatient) {
        return res.status(409).json({ error: "Patient already exists with this name or registration number" });
    }

    // Create a new patient
    const newPatient = await Patient.create({
        name,
        diagnosedWith,
        registrationNo,
        age,
        bloodGroup,
        gender,
        admittedIn
    });

    if (!newPatient) {
        return res.status(500).json({ error: "Patient not created" });
    }

    // Respond with success message and created patient data
    res.status(201).json({
        message: "Patient registered successfully",
        patient: newPatient
    })
})

export { patient }
