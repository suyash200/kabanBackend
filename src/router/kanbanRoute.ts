import { Router } from "express";
import GetKanban, { CreateKanban, UpdateKanban } from "../controllers/kanbanController.js";

const router = Router();

router.post("/", CreateKanban);
router.get("/get", GetKanban);
router.patch('/update',UpdateKanban)


export default router;
