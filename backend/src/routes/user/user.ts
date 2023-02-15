import { Router } from "express";
import { auth } from "../../middleware/auth";
import { resetPassword } from "../../controllers/updateUser";

const router = Router();

router.post("/update-password", auth, resetPassword);

export default router;
