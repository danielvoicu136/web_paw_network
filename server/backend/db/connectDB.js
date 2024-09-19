import mongoose from 'mongoose'


export const connectDB = async () => { 

    try {
        console.log('mongo_uri: ',process.env.MONGO_URI)
        const DBC = await mongoose.connect(process.env.MONGO_URI)  
        console.log(`MongoDB is connected : ${DBC.connection.host}`) 
    } catch (error) {
        console.log("Error connection to MongoDB: ",error.message)
        process.exit(1)   // 0 is success , 1 is failure 
    }

}