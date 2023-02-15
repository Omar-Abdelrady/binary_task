import sgMail from "@sendgrid/mail";
interface data {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}
const sendEmail = async (data: data) => {
  const apiSecretKey: any = process.env.SENDGRID_API_KEY;
  sgMail.setApiKey(apiSecretKey);
  await sgMail.send(data);
};

export default sendEmail;
