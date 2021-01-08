
import { Formik, Form, Field } from "formik";
import { makeStyles, createStyles, TextField, FormControl, InputAdornment, Tooltip, Button, Box } from "@material-ui/core";
import theme from "../../src/theme";
import Link from "next/link";
import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Schema from "../../schema/index";
import { ReducersModal } from "../../modal";
import { useDispatch, useSelector } from "react-redux";
import Utils from "../../utils";
// import SetTokenInHeader from "../../components/setTokenInHeader";
import onSubmitLogin, { OnSubmit } from "./action";
import { useRouter } from "next/router";
import { Visibility, VisibilityOff } from "@material-ui/icons";
// import IsAlreadyLoggedIn from "../../components/layouts/wrapperForcheckLoginOrNot";
const styles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      marginBottom: "30px",
    },
    innerContainer: {
      src: `
      local('ProximaNova'),
      url('/public/fonts/ProximaNova-Regular.otf')`,
      fontFamily: "ProximaNova !important",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "22px 0",
    },
    or: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& div": {
        "&:nth-child(1)": {
          borderTop: "dotted 1px #c7c7c7",
          width: "45%",
        },
        "&:nth-child(2)": {
          width: "10%",
          padding: "0 5px",
          textAlign: "center",
        },
        "&:nth-child(3)": {
          borderTop: "dotted 1px #c7c7c7",
          width: "45%",
        },
      },
    },
    formContainer: {
      marginTop: 15,
      display: "flex",
      flexDirection: "column",
    },
    inputField: {
      margin: "7px 0",
    },
    rememberMe: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& div": {
        display: "flex",
        alignItems: "center",
        "& span": {
          padding: "0",
          // marginLeft:'-5px',
          marginBottom: "1px",
        },
        "& p": {
          marginLeft: "8px",
          color: "#4a4a4a",
          fontSie: "14px",
        },
        "& a": {
          fontSize: "14px",
          color: "#4a4a4a",
        },
      },
    },
    backToLogin: {
      paddingBottom: 15,
    },
    passwordIcon: {
      cursor: 'pointer',
  },
  form: {
    width: '25%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '70%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    }
  },
  loginText: {
    textAlign: 'center',
    marginTop: '150px'
  }
  })
);
const Login = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log(<SetTokenInHeader />, "SetTokenInHeader");
  // const [, setChecked] = React.useState(false);
  const { email, password, loggedIn, backDrop } = useSelector(
    (state: any) => state.signInReducer
  );
  // const pageRouter = () => {
  //   Router.push("/fashionesta/home");
  // };
  // const handleChange = (event: any) => {
  //   dispatch({
  //     payload: { loggedIn: event.target.checked },
  //     type: Utils.ActionName.SIGN_IN,
  //   });
  // };

  const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

  // React.useEffect(() => {
  //   localStorage.setItem("access_token", 'dsafafs')
  // });
  // getCookies("ctx", "access_token") !== undefined &&
  //   console.log(getCookies("ctx", "access_token")),
  return (
    <div className={classes.form}>

      <div className={classes.loginText}>Login to next js portal</div>

    <Formik
    
    initialValues={{
        email,
        password,
    }}
    validationSchema={Schema.LoginScheema}
    onSubmit={(values, { setSubmitting }) => {
        dispatch(OnSubmit(values, setSubmitting, router));
    }}
>
    {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
    }) => (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    placeholder="Email"
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                    size="small"
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    placeholder="Password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    variant="outlined"
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {showPassword ? (
                                    <Tooltip title={'Hide Password'} placement={'top'}>
                                        <VisibilityOff
                                            className={classes.passwordIcon}
                                            onClick={togglePassword}
                                        />
                                    </Tooltip>
                                ) : (
                                    <Tooltip title={'Show Password'} placement={'top'}>
                                        <Visibility
                                            className={classes.passwordIcon}
                                            onClick={togglePassword}
                                        />
                                    </Tooltip>
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>

            <Box mt={2}>
                <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    {/* {buttonTitle} */}
                    {isSubmitting ? 'Logging in...' : "Login"}
                </Button>
            </Box>
        </form>
    )}
</Formik>
     </div>
  );
};
export default Login;
