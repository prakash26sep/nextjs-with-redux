import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const commonErr = "OOPS! something went wrong!";

const showAlert = (type: number, message: string = commonErr) => {
//   debugger;
  if (toast.error === undefined) {
    toast.configure({
      autoClose: 3000,
      draggable: false,
      newestOnTop: true,
      position: "bottom-left",
    });
  }
  switch (type) {
    case 1:
      toast.success(message);
      break;
    case 2:
      toast.error(message);
      break;
    case 3:
      toast.info(message);
      break;
  }
};

export default showAlert;
