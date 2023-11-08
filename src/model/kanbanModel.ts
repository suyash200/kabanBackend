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
    type: Array,
    require: true,
  },
});

export const kanbanModel = model("kanbanboard", kanbanSchema);
