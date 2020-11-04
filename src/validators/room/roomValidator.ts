import * as Joi from 'joi';

export const roomValidator = Joi.object().keys({
  label: Joi.string().min(1).max(255).trim().required(),
  password: Joi.string().min(8).max(255).trim().required()
});
