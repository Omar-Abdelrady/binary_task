import { RequestHandler } from "express";

export const welcome: RequestHandler = (req: any, res) => {
  res.status(200).json({ message: "Welcome!" });
};
