import { Router } from "express";
import { patient } from "../controllers/patient.controller.js";

const router = Router()

router.route('/patient').post(patient)

export default router