import { Router } from "express";
import { register } from "../../controllers/auth/register";
import { login } from "../../controllers/auth/login";
import { verificationEmail } from "../../controllers/auth/verificationEmail";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/verify", verificationEmail);

export default router;
