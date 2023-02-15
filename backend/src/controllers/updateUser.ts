import { RequestHandler } from "express";
import { Users } from "../models/users";
import Hash from "crypto-js/md5";

export const resetPassword: RequestHandler = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        id: Object(req).token.id,
        password: Hash(req.body.password).toString(),
      },
    });
    if (!user) return res.status(401).json({ message: "Invalid old password" });
    await Users.update(
      {
        password: Hash(req.body.newPassword).toString(),
      },
      { where: { id: Object(req).token.id } }
    );
    return res.status(200).json({ message: "password updated successfully" });
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};
