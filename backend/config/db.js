import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kashish:1610816108@cluster0.ual9v.mongodb.net/food').then(()=>{
        console.log("Connected to database");
    });
}