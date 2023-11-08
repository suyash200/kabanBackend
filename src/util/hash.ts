import { genSaltSync, hashSync } from "bcrypt-ts";
import { compareSync } from "bcrypt-ts";
const salt = process.env.Private_Key as string;
export function GenHash(content: string) {
  return hashSync(content, salt);
}

export function VerifyHash(content: string,hash:string) {
  return compareSync(content,hash);
}
