import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../store/reducers/authSlice.ts";

const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectToken);
  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
