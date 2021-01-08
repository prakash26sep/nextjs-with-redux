import Utils from "../../utils";
const getData = (token: string, page: any = 1) => {
  return async (dispatch) => {
    const params = `?page=${page}`;
    await Utils.Api.getApiCall(
      Utils.endPoints.USER_2,
      params,
      {
        userToken: "",
      },
      (respData: any) => {
        
        let { data } = respData;
        // console.log(data.data.email)
        // if (data.statusCode === 200) {
          dispatch({
            type: Utils.ActionName.CHECK,
            payload:  data.data.email+ " "+ token,
          });
        // }
      },
      (error: any) => {
        let { data } = error;
      }
    );
  };
};
export default getData;

// export const addToCart = (id: any, size: any) => {
//   return async (dispatch) => {
//     // const params = `?page=${page}`;
//     const dataToSend = {
//       apparels: [
//         {
//           id: id,
//           size: size,
//         },
//       ],
//     };
//     await Utils.Api.postApiCall(
//       Utils.endPoints.FAS_ADD_TO_CART,
//       dataToSend,
//       (respData: any) => {
//         let { data } = respData;
//         if (data.statusCode === 200) {
//           Utils.Alert(1, data.message);
//         }
//       },
//       (error: any) => {
//         let { data } = error;
//         Utils.Alert(2, data.message);
//       }
//     );
//   };
// };
