import mongoose from "mongoose"

mongoose.connect(`mongodb+srv://utkarsh:${process.env.DB_PASS}@cluster0.brpvn.mongodb.net/test`)