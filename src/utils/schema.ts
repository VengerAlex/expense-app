import * as yup from "yup";

export const resetSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const signInSchema = yup.object().shape({
  username: yup.string().required().min(8).max(30),
  password: yup.string().required().min(8).max(30),
});

export const signUpSchema = signInSchema.shape({
  fullName: yup.string().required().min(5).max(30),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  isConfirmed: yup
    .bool()
    .oneOf([true], "You must accept the terms and conditions"),
});
