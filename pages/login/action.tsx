import Utils from "../../utils";
const getData = (token: string, page: any = 1, setSubmitting: any) => {
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
            payload:  data.data.email,
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

export const OnSubmit = (values: any, setSubmitting: any, history: any) => {
  return (dispatch: Function) => {
      if (!navigator.onLine) {
          //check if user is online or not
          // Utils.showAlert(1, 'Please check your internet connection!');
          setSubmitting(false);
          return;
      }

      const { email, password } = values;
      const dataToSend = {
          email,
          password,
      };
      Utils.Api.postApiCall(
          // Utils.endPoints.login,
          "/login",
          dataToSend,
          (respData: any) => {
              let { data } = respData;

              if (data.statusCode === Utils.constants.api_success_code.success || 201) {
                  // dispatch({
                  //     type: Utils.ActionName.SIGN_IN,
                  //     payload: {
                  //         // socialNumberVerify: false,
                  //         email: dataToSend.email,
                  //         password: dataToSend.password,
                  //         apiError: '',
                  //     },
                  // });
                  document.cookie =
                    "access_token=" +
                    data.token +
                    ";email="+ email+
                    ";expires=Fri, 31 Dec 9999 23:59:59 GMT;  Path=/";
                  console.log(data.token);

                  setSubmitting(false);
                  history.push("/checking");
                  // sessionStorage.setItem('header_code', data.headerCode);

                  // Utils.showAlert(1, 'Successfully logged in!');
                  // sessionStorage.setItem('access_token', data.data.token);
                  // sessionStorage.setItem('access_token', data.data.access_token);
                  // sessionStorage.setItem('refresh_token', data.data.refresh_token);
                  // sessionStorage.setItem('user_type', data.data.user_type);
                  // sessionStorage.setItem('email_id', data.data.email);
                  // Utils.constants.setAuthorizationToken(data.data.access_token);

                  // history.push(Utils.constants.paths.DASHBOARD);
              } else {
                  setSubmitting(false);
                  // Utils.showAlert(1, data.message);
              }
          },
          (error: any) => {
              setSubmitting(false);
              let { data } = error;

              // Utils.showAlert(1, data.message);
          },
      );
  };
};
