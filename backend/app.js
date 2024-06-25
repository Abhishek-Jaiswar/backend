import express from 'express'

const app = express()

app.use(express.json())

// routes
import patientRoute from './routes/patient.route.js'
app.use('/api/v1', patientRoute)

export { app }