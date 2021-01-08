import { makeStyles, createStyles } from "@material-ui/core";
// import SelectUserType from "./fashioninsta/selectusertype/index";
// import IsAlreadyLoggedIn from "../components/layouts/wrapperForcheckLoginOrNot";
const styles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      background: "#eee",
      // minHeight: "100vh",
      "& h1, h2": {
        margin: "0px",
        textAlign: "center",
        paddingTop: 30,
      },
    },
  })
);
export default function Home() {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      {/* <IsAlreadyLoggedIn> */}
        {/* <SelectUserType /> */}
      {/* </IsAlreadyLoggedIn> */}
    </div>
  );
}
