import Utils from "../../utils";

const signInReducer = (
  state = { email: "", password: "", loggedIn: false, backDrop: false },
  action: any
) => {
  switch (action.type) {
    case Utils.ActionName.SIGN_IN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default signInReducer;
