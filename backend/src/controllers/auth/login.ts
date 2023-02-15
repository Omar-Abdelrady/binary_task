import { RequestHandler } from "express";
import { Users } from "../../models/users";
import Hash from "crypto-js/md5";
import jwt from "jsonwebtoken";
export const login: RequestHandler = async (req, res, next) => {
  const jwt_secret: any = process.env.JWT_SECRET;
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
        password: Hash(req.body.password).toString(),
      },
    });
    if (!user)
      return res.status(401).json({ message: "email or password incorrect" });
    if (!user?.email_is_verified)
      return res.status(403).json({ message: "your email is not verified" });
    const accessToken = jwt.sign(
      {
        id: user?.id,
      },
      jwt_secret,
      { expiresIn: "3d" }
    );
    return res.status(200).json({ ...user?.dataValues, accessToken });
  } catch (err) {
    return res.status(401).json({ message: "err " + err });
  }
};
