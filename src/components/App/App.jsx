import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const SigninPage = lazy(() => import("../../pages/SigninPage"));
const SignupPage = lazy(() => import("../../pages/SignupPage"));
const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));

import style from "./App.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // in future when will be redux to make private routing

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={null}>
      <div className={style}>
        <SharedLayout />
      </div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {isAuthenticated && <Route path="/welcome" element={<HomePage />} />}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
