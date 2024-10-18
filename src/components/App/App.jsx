import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// const HomePage = lazy(() => import("../../pages/HomePage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const SigninPage = lazy(() => import("../../pages/SigninPage"));
const SignupPage = lazy(() => import("../../pages/SignupPage"));
const WelcomePage = lazy(() => import("../../pages/WelcomePage"));

import SharedLayout from "../SharedLayout/SharedLayout";
// import { useSelector } from "react-redux";

const App = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // in future when will be redux to make private routing

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          {/* {isAuthenticated && <Route path="welcome" element={<HomePage />} />} */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
