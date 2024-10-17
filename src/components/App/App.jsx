import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Routing/PrivateRoute";
import PublicRoute from "../Routing/PublicRoute";
import SharedLayout from "../SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const SigninPage = lazy(() => import("../../pages/SigninPage"));
const SignupPage = lazy(() => import("../../pages/SignupPage"));
const WelcomePage = lazy(() => import("../../pages/WelcomePage"));

const App = () => {
  const isAuthenticated = false;

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<SharedLayout isAuthenticated={isAuthenticated} />} />
        <Route
          path="/"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <WelcomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <SigninPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
