import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import css from './AuthForm.module.css';
import {
  loginFormValidationSchema,
  registerFormValidationSchema,
} from '../../../utils/userInfoValidationSchema';
import { register } from '../../redux/auth/operations';
import AuthFormInput from '../AuthFormInput/AuthFormInput';

const AuthForm = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (pathname === '/signin') console.log(values);
    else if (pathname === '/signup') dispatch(register(values));
    actions.resetForm();
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
        {getAuthPageTitle()}
      </NavLink>
    </div>
  );
};

export default AuthForm;
