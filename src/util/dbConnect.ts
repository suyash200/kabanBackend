import { connect } from "mongoose";

export default async function DbConnect() {
  await connect(
    `${process.env.Db_Url}` )
    .then(() => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${process.env.PORT} `
      );
    })
    .catch((err) => {
      console.log(err);
    });
}
