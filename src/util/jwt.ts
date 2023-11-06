import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();
const privateKey = process.env.Private_Key as string;

export function CreateToken(email: string, id: string) {
  return jwt.sign({ email: email, id: id }, privateKey);
}

export function VerifyToken(token: string) {
  return jwt.verify(token, privateKey);
}
