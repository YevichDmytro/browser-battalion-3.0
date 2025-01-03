import { Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import css from './AuthForm.module.css';
import { login, register } from '../../redux/auth/operations';
import {
  loginFormValidationSchema,
  registerFormValidationSchema,
} from '../../utils/userInfoValidationSchema.js';
import AuthFormInput from '../AuthFormInput/AuthFormInput';

const AuthForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

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

  const chooseValidationSchema = () => {
    if (pathname === '/signin') return loginFormValidationSchema;
    else if (pathname === '/signup') return registerFormValidationSchema;
  };

  const getAuthPageTitle = () => {
    return pathname === '/signin' ? 'Sign In' : 'Sign Up';
  };

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
