import express, { Application, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const mongoUrl: string = process.env.MONGO_URL as string;

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Mongo DB connected"))
  .catch((error) => console.log(error));

app.get("/", (_, res: Response) => {
  res.send("Hello");
});

const port = 8800;
app.listen(port, () => console.log(`Server running at port ${port}`));
