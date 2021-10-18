import mongoose from "mongoose";

// sample schema
const AppointmentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    rollNum: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
});

export const Appointment = new mongoose.model("cc_appointments", AppointmentSchema);
