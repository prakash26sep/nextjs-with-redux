import { makeStyles, createStyles, Button } from "@material-ui/core";
import { wrapper } from "../../store";
import getData from "./action";
import { useSelector, useDispatch } from "react-redux";
import cookies from "next-cookies";
import { ReducersModal } from "../../modal";
import Utils from "../../utils";
import { useEffect, useState } from "react";
/* global localStorage */

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundColor: "white",
      padding: "1px 20px 20px",
      marginTop: 10,
      "& h1": {
        textAlign: "center",
      },
    },
  })
);

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


const Checking = () => {
  const classes = styles();
  const cart = useSelector((state: any) => state.cartReducer);

  const { data } = useSelector((state: any) => state.checkReducer);
  // console.log("email: "+data);

  const dispatch= useDispatch();

  const [email, setEmail]= useState("");

  useEffect(()=>{
    setEmail(getCookie("access_token"));
  },[]);

  return (
      <div className={classes.container}>
        {/* {cart.data ? (
          cart.data.map((i) => <SingleItem key={i} />)
        ) : (
          <h1>NO DATA YET! {data}</h1>
          
        )} */}
        {/* <div onClick={()=>{dispatch(getDataOfCart("123"))}}>click here</div> */}
        {data}
        Welcome {email}
      </div>
   
  );
};
export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const access_token = cookies(ctx).access_token;
  await ctx.store.dispatch(getData(access_token));

    if(process.browser){
      localStorage.setItem("token", "1234");
      console.log(localStorage.getItem("token"));
    }

});
export default Checking;
