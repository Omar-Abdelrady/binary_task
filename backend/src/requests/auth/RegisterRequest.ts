import * as Joi from "joi";

export const RegisterRequest = (data: object) => {
  const schema = Joi.object().keys({
    home: Joi.string().required(),
  });
  return schema.validate(data);
};

// export const RegisterRequest = Joi.object({
//   user_name: Joi.string().alphanum().min(3).max(30).required(),
// });

// module.exports = { RegisterRequest };
