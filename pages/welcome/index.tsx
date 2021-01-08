import { makeStyles, createStyles, Button } from "@material-ui/core";
import { wrapper } from "../../store";
import getData from "./action";
import { useSelector, useDispatch } from "react-redux";
import cookies from "next-cookies";
import { ReducersModal } from "../../modal";

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
const Cart = () => {
  const classes = styles();
  const cart = useSelector((state: any) => state.cartReducer);

  const { data } = useSelector((state: any) => state.checkReducer);
  // console.log("email: "+data);

  const dispatch= useDispatch();

  return (
      <div className={classes.container}>
        {/* {cart.data ? (
          cart.data.map((i) => <SingleItem key={i} />)
        ) : (
          <h1>NO DATA YET! {data}</h1>
          
        )} */}
        {/* <div onClick={()=>{dispatch(getDataOfCart("123"))}}>click here</div> */}
        {data}
      </div>
   
  );
};
export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const access_token = cookies(ctx).access_token;
  await ctx.store.dispatch(getData(access_token));
});
export default Cart;
