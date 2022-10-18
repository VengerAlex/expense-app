import * as yup from "yup";
import { phoneRegExp } from "./helpers";

export const resetSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const signInSchema = yup.object().shape({
  username: yup.string().required().min(5).max(30),
  password: yup.string().required().min(8).max(30),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().required().min(8).max(30),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const signUpSchema = resetPasswordSchema.shape({
  username: yup.string().required().min(5).max(30),
  fullName: yup.string().required().min(5).max(30),
  isConfirmed: yup.bool().required().oneOf([true]),
});

export const extendedSettingsSchema = yup.object().shape({
  fullName: yup.string().required().min(5).max(30),
  userName: yup.string().required().min(5).max(30),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export const profileSettingsSchema = resetPasswordSchema.shape({
  oldPassword: yup.string().required().min(8).max(30),
});
