import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { Users } from "../models/users";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const SECRET_KEY: Secret = "jwt_secret";
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await Users.findOne({ where: { id: Object(decoded).id } });
    if (!user?.email_is_verified) {
      res.status(401).json({ message: "please verify your email" });
    }
    (req as CustomRequest).token = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Please authenticate" });
  }
};
