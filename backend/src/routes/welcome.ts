import { Router } from "express";
import { welcome } from "../controllers/welcom";
import { auth } from "../middleware/auth";
const router = Router();

router.get("/", auth, welcome);

export default router;
