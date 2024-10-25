import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import {
  loginFormValidationSchema,
  registerFormValidationSchema,
} from '../../../utils/userInfoValidationSchema';
import { login, register } from '../../redux/auth/operations';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import css from './AuthForm.module.css';

const AuthForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;

    try {
      let response;
      if (pathname === '/signin') {
        response = await dispatch(login({ email, password })).unwrap();
      } else if (pathname === '/signup') {
        response = await dispatch(register({ email, password })).unwrap();
      }

      if (response && response.redirectUrl) {
        navigate(response.redirectUrl);
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
