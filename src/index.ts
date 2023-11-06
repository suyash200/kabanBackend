//library imports
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

// src imports
import userRoute from './router/userRoute.js'
import DbConnect from "./util/dbConnect.js";



dotenv.config();

const app: Express = express();
const port = process.env.PORT as string;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to Kanban");
});

app.use('/user',userRoute)
 
app.listen(port, () => {
 DbConnect()
});
