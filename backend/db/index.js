import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js';

const connectToDb = async () => {
    try {
        const connectionIns = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log(`Database is connected successfully: host: ${connectionIns.connection.host}`);
    } catch (error) {
        console.log("Connection failed while connecting to database: ", error);
        process.exit(1)
    }
}

export default connectToDb