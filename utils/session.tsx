
export const getUserIdToken = () => {
  return localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : "";
};
// export const setTokenInHeader = () => {
//   console.log("header cookies", getCookies("ctx", "access_token"));
//   return getCookies("ctx", "access_token");
// };
export const removeSession = () => {
  // clearStorage();
  // setAuthorizationToken("");
  localStorage.removeItem("access_token");
  // localStorage.clear();
};
export const setSession = (payload: any) => {
  for (var k in payload) {
    var isCurrentValObject = typeof payload[k] === "object";
    if (isCurrentValObject && payload[k] !== null) {
      //if property is object then save it as string
      localStorage.setItem(k, JSON.stringify((payload as any)[k]));
    } else {
      localStorage.setItem(k, (payload as any)[k]);
    }
  }
  // setAuthorizationToken(payload.access_token);
};
