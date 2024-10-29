import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

import css from './AuthForm.module.css';
import { login, register, getOAuthUrl, googleAuth } from '../../redux/auth/operations';
import { loginFormValidationSchema, registerFormValidationSchema } from '../../utils/userInfoValidationSchema';
import AuthFormInput from '../AuthFormInput/AuthFormInput';

const AuthForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [searchParams] = useSearchParams();

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;

    try {
      if (pathname === '/signin') {
        await dispatch(login({ email, password }))
          .unwrap()
          .then(() => {
            toast.success('Authentication successful!');
          })
          .catch(error => {
            toast.error(`Authentication failed, please try again!`);
          });
      } else if (pathname === '/signup') {
        await dispatch(register({ email, password }))
          .unwrap()
          .then(() => {
            toast.success('Registration successful!');
          })
          .catch(error => {
            toast.error(`Registration failed, please try again!`);
          });
      }

      actions.resetForm();
    } catch (error) {
      error.message;
    }
  };

  const handleGoogleAuth = async () => {
    setLoadingGoogle(true);
    try {
      const response = await getOAuthUrl();
      console.log('Google OAuth URL:', response.data.data.url);
      window.open(response.data.data.url, '_self');
    } catch (error) {
      console.error('Error fetching Google auth URL:', error.message);
    } finally {
      setLoadingGoogle(false);
    }
  };

  const chooseValidationSchema = () => {
    if (pathname === '/signin') return loginFormValidationSchema;
    else if (pathname === '/signup') return registerFormValidationSchema;
  };

  const getAuthPageTitle = () => {
    return pathname === '/signin' ? 'Sign In' : 'Sign Up';
  };

  const getGoogleButtonText = () => {
    return pathname === '/signin' ? 'Sign in with Google' : 'Sign up with Google';
  };

  useEffect(() => {
    const code = searchParams.get('code');
    console.log('OAuth Code:', code);

    if (code) {
      const handleOAuthConfirmation = async () => {
        try {
          const response = await dispatch(googleAuth(code));
          console.log(response.data.data);
          console.log('OAuth confirmation response:', response);

          if (response.data.data) {
            localStorage.setItem('accessToken', response.data.data.accessToken);
            localStorage.setItem('refreshToken', response.data.data.refreshToken);
            window.location.href = 'https://browser-battalion-3-0-dev-git-staging-yevichdmytros-projects.vercel.app/home';
          } else {
            console.error('No data received from confirmation response');
          }
        } catch (error) {
          console.error('Error during OAuth confirmation:', error.message);
        }
      };

      handleOAuthConfirmation();
    }
  }, [searchParams, dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>{getAuthPageTitle()}</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={chooseValidationSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <AuthFormInput
              errors={errors}
              touched={touched}
              type={'email'}
              placeholder={'Email'}
            />
            <AuthFormInput
              errors={errors}
              touched={touched}
              type={'password'}
              placeholder={'Password'}
            />
            {pathname === '/signup' && (
              <AuthFormInput
                errors={errors}
                touched={touched}
                type={'repeatPassword'}
                placeholder={'Repeat password'}
              />
            )}
            <button className={css.button} type="submit">
              {getAuthPageTitle()}
            </button>
            <button
              type="button"
              className={`${css.button} ${css.googleButton}`}
              onClick={handleGoogleAuth}
              disabled={loadingGoogle}
            >
              <svg>
                <use href='./auth-page/icons.svg#icon-google'></use>
              </svg>
              {loadingGoogle ? 'Loading...' : getGoogleButtonText()}
            </button>
          </Form>
        )}
      </Formik>
      <NavLink
        className={css.link}
        to={pathname === '/signin' ? '/signup' : '/signin'}
      >
        {pathname === '/signin' ? 'Sign Up' : 'Sign In'}
      </NavLink>
    </div>
  );
};

export default AuthForm;
