import express from "express";
import { Appointment } from "./models.js";

const Router = express.Router();

Router.post("/book_appointment", async (req, res) => {
    const appointmentData = req.body;

    try {
        const appointment = new Appointment(appointmentData);
        appointment.save()
            .then(() => res.status(201).send())
            .catch(() => res.status(400).send())
    } catch (err) { res.status(500).send() };
});

export default Router;