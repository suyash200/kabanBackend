import { Request, Response } from "express";
import { userModel } from "../model/userModel.js";

interface Userbody {
  firstName: string;
  lastName: string;
  email: string;
}
export async function Createuser(req: Request, res: Response) {
  try {
    const userFinder = await userModel.find().where({ email: req.body.email });
   
    if (userFinder.length !== 0) {
      res.status(409).send("email already exits");
    }
    await userModel.create(req.body).then(() => {
      res.status(201).send("user created");
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
