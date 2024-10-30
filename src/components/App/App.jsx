import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateRoute from '../../components/Routing/PrivateRoute';
import PublicRoute from '../../components/Routing/PublicRoute';
import {
  refreshUser,
  setupAxiosInterceptors,
} from '../../redux/auth/operations.js';
import {
  selectIsRefreshing,
  selectLoading,
} from '../../redux/auth/selectors.js';
import Animation from '../Animation/Animation.jsx';
import SharedLayout from '../SharedLayout/SharedLayout';
import Loader from '../ui/Loader/Loader.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx')
);
const SigninPage = lazy(() => import('../../pages/SigninPage'));
const SignupPage = lazy(() => import('../../pages/SignupPage'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectLoading);
  const hasMounted = useRef(false);

  const [showWrapper, setShowWrapper] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWrapper(true);
      setShowAnimation(false);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dispatch(refreshUser());

    if (!hasMounted.current) {
      dispatch(refreshUser());
      setupAxiosInterceptors(dispatch);
      hasMounted.current = true;
    }
  }, [dispatch]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: 'var(--primary-white)',
            color: 'var(--primary-black)',
            boxShadow: 'var(--box-shadow-blue)',
          },
          success: {
            iconTheme: {
              primary: '#407bff',
            },
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      {(isRefreshing || isLoading) && <Loader />}

      {showAnimation && <Animation />}

      <div className={`wrapper ${showWrapper ? 'show' : ''}`}>
        <Suspense>
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
      </div>
    </>
  );
};

export default App;
