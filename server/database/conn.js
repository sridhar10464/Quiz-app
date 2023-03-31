import mongoose from "mongoose";

export default async function connect() {
    mongoose.set('strictQuery', false)
   await mongoose.connect(process.env.MONGO_URL)
    console.log("Database Connected")
}


