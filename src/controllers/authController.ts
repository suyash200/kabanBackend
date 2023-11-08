import { Request, Response } from "express";
import { VerifyHash } from "../util/hash.js";
import { userModel } from "../model/userModel.js";
import { CreateToken } from "../util/jwt.js";

export async function Login(req: Request, res: Response) {
  try {
    const user = await userModel.find({ email: req.body.email });
    if (user.length === 0) {
      res.status(404).send("no user found");
    } else {
      if (VerifyHash(req.body.password, user[0].password as string)) {
        res.status(200).send({
          message: "ok",
          token: CreateToken(user[0].email as string, user[0].id),
        });
      } else {
        res.status(401).send("wrong username or password");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("wrong username password");
  }
}
