import Utils from ".";
import { getUserIdToken } from "./session";
import cookies from "next-cookies";
const postApiCall = async (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function,
  head: string = ""
) => {
  console.log({ endPoint, params, successCallback });
  // console.log(getCookies("ctx", "access_token"));
  await Utils.constants.axios
    .post(endPoint, params, {
      headers: {
        userToken: head ? head : Utils.constants.ReadCookie("access_token"),
        // "Content-Type": "multipart/form-data",
      },
    })
    .then((response: any) => {
      successCallback(response);
      // console.log(response.message)
    })
    .catch((error: any) => {
      console.log("API Call error", error);
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (false) {
          //if user session expired
          console.log("session expired for user");
          // Utils.showAlert(2, data.message);
          setTimeout(() => {
            //   logOutApiCall();
          }, 1000);
        } else {
          console.log("res: ", error.response.data.message);
          errorCallback(error.response);
          if (error.response.status === 401) {
            console.log("fuck");
          }
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const getApiCall = async (
  endPoint: string,
  params: string = "",
  head: any = {},
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params }, head.userToken);
  await Utils.constants.axios
    .get(Utils.constants.apiUrl + endPoint + params, {
      headers: head,
      // {
      //   userToken: head.userToken,
      //   //  "Access-Control-Allow-Headers": "*",
      // },
    })
    .then((response: any) => {
      const data: any = response;
      successCallback(data);
    })
    .catch((error: any) => {
      console.log("API Call error", error);
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (false) {
          //if user session expired
          console.log("session expired for user");
          // Utils.showAlert(2, data.message);
          setTimeout(() => {
            // logOutApiCall();
          }, 1000);
        } else {
          console.log("res: ", error.response);
          errorCallback(error.response);
          if (error.response.status === 401) {
          }
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
/**
 *
 * @param endPoint api end point
 * @param params api request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
const deleteApiCall = async (
  endPoint: string,
  params: any = "",
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params });
  await Utils.constants.axios
    .delete(Utils.constants.apiUrl + endPoint + params, {
      headers: {
        userToken: Utils.constants.ReadCookie("access_token"),
      },
    })
    .then((response: any) => {
      console.log(response);
      successCallback(response);
    })
    .catch((error: any) => {
      console.log("API Call error", error);
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};

/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const putApiCall = async (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params, successCallback });
  await Utils.constants.axios
    .put(endPoint, params, {
      headers: {
        userToken: Utils.constants.ReadCookie("access_token"),
        // "Content-Type": "multipart/form-data",
      },
    })
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      console.log("API Call error", error);
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};

export default {
  postApiCall,
  getApiCall,
  deleteApiCall,
  putApiCall,
};
