import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    // Check if the MONGO_URI environment variable is defined
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    // Attempt to connect to the MongoDB database
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Restorent", // Specify the database name
      useNewUrlParser: true,  // Use the new URL parser
      useUnifiedTopology: true, // Use the unified topology engine
    });

    console.log("Connected to database!");
  } catch (err) {
    console.error(`Error while connecting to the database: ${err.message}`);
  }
};
