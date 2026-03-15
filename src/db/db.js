const mongoose=require("mongoose")

async function connectDB() {
    
    await mongoose.connect("mongodb+srv://user1:GWC6Di9sjeLcglK2@cluster0.qx9fdvq.mongodb.net/newdb")

    console.log("connected to db")
}

module.exports={ connectDB }