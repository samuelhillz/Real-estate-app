import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../../redux/slice/authSlice";

const Showlogin = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return null;
};
export const ShowlogOut = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  if (!isLoggedIn) {
    return children;
  }
  return null;
};

export default Showlogin;
