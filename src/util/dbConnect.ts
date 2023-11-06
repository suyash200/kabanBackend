import { connect } from "mongoose";

export default async function DbConnect() {
  await connect(
    "mongodb+srv://suyashlade:TKgFObe6DRDPmS3z@kanban.vl712ho.mongodb.net/devlopment"
  )
    .then(() => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${process.env.PORT} `
      );
    })
    .catch((err) => {
      console.log(err);
    });
}
