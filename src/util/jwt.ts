import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

configDotenv();
const privateKey = process.env.Private_Key as string;

export type token = {
  email: string;
  id: string;
  iat: string;
};

export function CreateToken(email: string, id: string) {
  return jwt.sign({ email: email, id: id }, privateKey);
}

export function VerifyToken(token: string) {
  const data = jwt.verify(token.split(" ")[1], privateKey);
  return data;
}
