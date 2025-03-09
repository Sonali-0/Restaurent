import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRouter.js";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config({ path: "./config/config.env" }); // Load environment variables

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Use FRONTEND_URL from .env
    methods: ["POST"], // Allowed HTTP methods
    credentials: true, // Allow credentials (e.g., cookies)
  })
);
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

app.use("/api/v1/reservation", reservationRouter); // Define API route
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

dbConnection(); // Connect to the database

app.use(errorMiddleware); // Use custom error middleware

export default app;
