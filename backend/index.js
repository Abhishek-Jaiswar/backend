import dotenv from 'dotenv';
import { app } from './app.js';
import connectToDb from './db/index.js';

dotenv.config();

const startServer = async () => {
  try {
    await connectToDb() ;
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error while connecting to the database:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer();
