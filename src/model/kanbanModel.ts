import mongoose, { Schema, model } from "mongoose";

type tasks = [{ id: string; name: string; description: string }];

const kanbanSchema = new Schema({
  owner: {
    type: Schema.ObjectId,
    ref: "user",
    require: true,
  },
  name: String,
  description: String,
  kanban: {
    todo: [
      {
        id: String,
        name: String,
        description: String,
      },
    ],
    inProgress: [
      {
        id: String,
        name: String,
        description: String,
      },
    ],
    done: [
      {
        id: String,
        name: String,
        description: String,
      },
    ],
  },
});

export const kanbanModel = model("kanbanboard", kanbanSchema);
