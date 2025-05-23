import mongoose from "mongoose";
export function dbConnection() {
  mongoose
    .connect("mongodb://localhost:27017/EcommerceSystem")
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection error:", err));
}
