import { Route, Routes } from "react-router-dom";
import SignIn from "../modules/auth/sign-in/SignIn.tsx";
import { useEffect } from "react";
import PrivateRoute from "./PrivateRoute.tsx";
import PublicRoute from "./PublicRoute.tsx";
import TaskList from "../modules/task/TaskList.tsx";
import SignUp from "../modules/auth/sign-up/SignUp.tsx";
import MainLayout from "../modules/ui/main/MainLayout.tsx";

const Router = () => {
  useEffect(() => {
    console.log("Hello world");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<TaskList />} />
          </Route>
          {/*<Route index path="/" element={<MainLayout />} />*/}
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
