import { Router } from "express";
import { Createuser } from "../controllers/userController.js";



const router =Router()

router.post('/create',Createuser)

export default router