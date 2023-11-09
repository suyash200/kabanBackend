import { Request, Response } from "express";
import { VerifyToken, token } from "../util/jwt.js";
import { kanbanModel } from "../model/kanbanModel.js";
import { randomUUID } from "crypto";

const trial = [
  [
    {
      id: "12",
      name: "Study",
      description: "somesd",
    },
    {
      id: "45",
      name: "Wor",
      description: "some",
    },
  ],
  [
    {
      id: "34",
      name: "Studys",
      description: "somead",
    },
    {
      id: "4",
      name: "Wo2r",
      description: "some2",
    },
  ],
  [
    {
      id: "3",
      name: "Stud",
      description: "som3e",
    },
    {
      id: "5",
      name: "Wo2r3",
      description: "some32",
    },
  ],
];
export async function CreateKanban(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const data: any = VerifyToken(token);
    console.log(req.body)
    await kanbanModel
      .create({
        owner: data?.id,
        description: req.body?.description,
        kanban: {
          todo: [],
          inProgress: [],
          done: [],
        },
        name: req.body?.name,
      })
      .then((data) => {
        res.status(200).send("created kanban board");
      });
  } catch (error) {
    res.status(500).send(error);
  }
}
export default async function GetKanban(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const data: any = VerifyToken(token);

    const name = req.query.name; //this serves 2 routes simultanously depending on query availability

    const kanbanBords =
      name !== undefined
        ? await kanbanModel.find({ owner: data?.id }).where({ name: name })
        : await kanbanModel.find({ owner: data?.id });

    res.status(200).send(kanbanBords);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function UpdateKanban(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const data: any = VerifyToken(token);

    const name = req.query.name;

    const kanbanBords = await kanbanModel
      .findOneAndUpdate(
        {
          owner: data?.id,
          name: name,
        },
        {
          kanban: req.body.kanban,
        }
      )
      .then((data) => {
        res.status(204).send("updated");
      });
  } catch (error) {
    res.status(500).send(error);
  }
}
