import { RequestHandler } from "express";
import { Users } from "../../models/users";
import { EmailVerificationCode } from "../../models/emailVerificationCode";
import { where } from "sequelize";

export const verificationEmail: RequestHandler = async (req, res, _next) => {
  const verificationCode = req.body.verificationCode;
  try {
    const code = await EmailVerificationCode.findOne({
      where: { code: verificationCode },
      include: Users,
    });
    await Users.update(
      { email_is_verified: true },
      { where: { id: Object(code?.user).id } }
    );
    code?.destroy();
    res.status(200).json({ message: "your email verified successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Invalid email verification code" });
  }
};
