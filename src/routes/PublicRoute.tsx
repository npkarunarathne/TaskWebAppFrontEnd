import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../store/reducers/authSlice.ts";

const PublicRoute = () => {
  const renderPublicLayout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };

  const isLoggedIn = useSelector(selectToken);
  return isLoggedIn ? <Navigate to="/" /> : renderPublicLayout();
};

export default PublicRoute;
