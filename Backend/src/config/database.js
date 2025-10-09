import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

export async function connectDB() {
    if(!process.env.DB_CONNECTION) {
        console.error(`Falta DB_CONNECTION en .env: ${error}`);
        process.exit(1);
    }

    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        const { host, name } = mongoose.connection;

        console.log(`Conexion a MongoDB establecida -> ${host}/${name}`);
    } catch (error) {
        console.error(`Error conectando a MongoDb: ${error}`);
        process.exit(1);
    }
}

export default connectDB;