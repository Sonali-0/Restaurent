import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

//router.post("/send", send_reservation);
router.post("/send", (req, res, next) => {
    console.log("Route hit:", req.body);
    next();
}, send_reservation);


export default router;