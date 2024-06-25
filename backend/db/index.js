import mongoose from 'mongoose'
import { DB_NAME } from '../constant';
import dotenv from 'dotenv'
dotenv.config()

const connectToDb = async () => {
    try {
        const connectionIns = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log(`Database is connected successfully: host: ${connectionIns.connection.hostw}`);
    } catch (error) {
        console.log("Connection failed while connecting to database: ", error);
        process.exit(1)
    }
}

export { connectToDb }