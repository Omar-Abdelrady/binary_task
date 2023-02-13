import { RequestHandler } from "express";
import { Users } from "../../models/users";
import Hash from "crypto-js/md5";
export const register: RequestHandler = async (req, res, next) => {
  req.body.password = Hash(req.body.password).toString();
  let user = await Users.create({ ...req.body })
    .then((userData) => {
      res.status(200).json({
        message: "User created successfully",
        data: userData,
      });
    })
    .catch((error) => {
      res.status(401).json({
        message: "Error creating " + error,
      });
    });
};
