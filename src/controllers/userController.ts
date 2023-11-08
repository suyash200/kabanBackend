import { Request, Response } from "express";
import { userModel } from "../model/userModel.js";
import { GenHash } from "../util/hash.js";

interface Userbody {
  firstName: string;
  lastName: string;
  email: string;
}
export async function Createuser(req: Request, res: Response) {
  try {
    const userFinder = await userModel.find().where({ email: req.body.email });

    if (userFinder.length === 0) {
      const password = req.body.password as string;
      req.body.password = GenHash(password);
      await userModel.create(req.body).then(() => {
        res.status(201).send("user created");
      });
    }
    res.status(409).send("email already exits");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
