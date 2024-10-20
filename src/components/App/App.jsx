import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateRoute from '../../components/Routing/PrivateRoute';
import PublicRoute from '../../components/Routing/PublicRoute';
import Loading from '../Loading/Loading.jsx';
import SharedLayout from '../SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx')
);
const SigninPage = lazy(() => import('../../pages/SigninPage'));
const SignupPage = lazy(() => import('../../pages/SignupPage'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Navigate to="/welcome" />
              </PublicRoute>
            }
          />
          <Route
            path="welcome"
            element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route
            path="signin"
            element={
              <PublicRoute>
                <SigninPage />
              </PublicRoute>
            }
          />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
