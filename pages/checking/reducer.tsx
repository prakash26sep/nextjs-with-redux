import Utils from "../../utils";
// import {checkDataModal} from "../../modal/index";
export default function checkReducer(state = { data: ""},
action: any) {
  switch (action.type) {
    case Utils.ActionName.CHECK:{
      // debugger;
      console.log("heyyyyy")
      console.log(action);
      return { ...state, data: action.payload};}
    default:
      return state;
  }
}
