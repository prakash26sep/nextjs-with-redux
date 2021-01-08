import * as Yup from "yup";

const LoginScheema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .trim()
      .required("Please enter your email"),
    password: Yup.string()
      .matches(/^\S*$/, "There should be no spaces")
      // .matches(/^(?=.*[a-z])/, "There should be at least one letter")
      // .matches(/^(?=.*[A-Z])/, "There should be at least one capital letter")
      .matches(/^(?=.*[0-9])/, "There should be at least eight characters")
      // .matches(
      //   /^(?=.*[!@#$%^&*])/,
      //   "There should be at least one special character"
      // )
      // .matches(/^(?=.{8,})/, "There should be at least one digit")
      // .min(8, "Password is too short")
      .trim()
      .required("Password is required"),
  });
};

export default {
  LoginScheema,
};
