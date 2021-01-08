import axios from "axios";
// import SetTokenInHeader from "../components/setTokenInHeader";
import {
  getUserIdToken,
  // setTokenInHeader,
  removeSession,
  setSession,
} from "./session";
// import { getCookies } from "cookies-next";
// import Utils from ".";
import { ReadCookie, deleteCookie } from "./constFunctions";

const api_header_code = {
  alreadyEnabled2fa: 2059,
  secondTimeGoogleUser: 2054,
  alreadyWithManual: 2061,
  phoneVerification: 2071,
  providePhoneNumber: 2072,
  redirect3DSecure: 2073,
  paymentCancelledByUser: 2076,
};
const api_error_code = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 440,
  validationError: 400,
  emailNotVerified: 403,
};

const api_success_code = {
  postSuccess: 201,
  success: 200,
};

const user_type = {
  SUB_ADMIN: 2,
  ADMIN: 1,
};

const $axios = axios.create({
  // baseURL: `http://virdrobestg.appinventive.com/api/v1`,
  baseURL: 'https://reqres.in/api',
  timeout: 30000,
});
const constants = {
  axios: $axios,
  api_header_code,
  api_error_code,
  api_success_code,
  user_type,
  apiUrl: "",
  getUserIdToken,
  removeSession,
  setSession,
  ReadCookie,
  deleteCookie,
};
export default constants;
