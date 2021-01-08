class SignupModal {
  fullName: string = "";
  email: string = "";
  phoneno: string = "";
  password: any = "";
  checked: boolean = false;
}
class SignInModal {
  email: string = "";
  password: any = "";
  loggedIn: boolean = false;
}

class ReducersModal {
  signupReducer: SignupModal = new SignupModal();
  signInReducer: SignInModal = new SignInModal();
  // signUpRetailer: RetailerSignupModal = new RetailerSignupModal();
}
export {
  ReducersModal,
  SignupModal,
  SignInModal,
};
