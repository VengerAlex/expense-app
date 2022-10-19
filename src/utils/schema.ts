import * as yup from "yup";

export const resetSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const signInSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^(.*)?\S+(.*)?$/, "can't be empty")
    .required()
    .min(5)
    .max(30),
  password: yup
    .string()
    .matches(/^(.*)?\S+(.*)?$/, "can't be empty")
    .required()
    .min(8)
    .max(30),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(/^(.*)?\S+(.*)?$/, "can't be empty")
    .required()
    .min(8)
    .max(30),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const signUpSchema = resetPasswordSchema.shape({
  username: yup
    .string()
    .matches(/^(.*)?\S+(.*)?$/, "can't be empty")
    .required()
    .min(5)
    .max(30),
  fullName: yup
    .string()
    .matches(/^(.*)?\S+(.*)?$/, "can't be empty")
    .required()
    .min(5)
    .max(30),
  isConfirmed: yup.bool().required().oneOf([true]),
});

export const extendedSettingsSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^(.*)?\S+(.*)?$/, "can't be empty")
    .required()
    .min(5)
    .max(30),
  displayName: yup
    .string()
    .matches(/^(.*)?\S+(.*)?$/, "can't be empty")
    .required()
    .min(5)
    .max(30),
});

export const profileSettingsSchema = resetPasswordSchema.shape({
  oldPassword: yup
    .string()
    .matches(/^(.*)?\S+(.*)?$/, "")
    .required()
    .min(8)
    .max(30),
});
