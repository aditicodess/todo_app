import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-a3laoaa-shard-00-00.ftyz5s9.mongodb.net:27017,ac-a3laoaa-shard-00-01.ftyz5s9.mongodb.net:27017,ac-a3laoaa-shard-00-02.ftyz5s9.mongodb.net:27017/?ssl=true&replicaSet=atlas-116vwt-shard-0&authSource=admin&retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected Successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database ", error.message);
  });
};

export default Connection;
