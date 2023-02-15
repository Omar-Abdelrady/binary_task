import { RequestHandler } from "express";
import { Users } from "../../models/users";
import Hash from "crypto-js/md5";
import { EmailVerificationCode } from "../../models/emailVerificationCode";
import sendEmail from "./../../helpers/helpers";
export const register: RequestHandler = async (req, res, next) => {
  try {
    const code = Math.floor(Math.random() * 999999);
    let CreateUser = await Users.create(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: Hash(req.body.password).toString(),
        email_verification_code: [{ code }],
      },
      {
        include: [EmailVerificationCode],
      }
    );
    let data = {
      to: req.body.email,
      from: "omar.abdelrady@binery.co",
      subject: "your verification code",
      text: "your verification code",
      html: "your verification code",
    };
    await sendEmail(data);
    res.status(200).json({
      message: "User created successfully but you need to verify your email",
      data: CreateUser,
    });
  } catch (err) {
    res.status(401).json({
      message: "Error creating " + err,
    });
  }
};
