import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import css from './AuthForm.module.css';
import { userInfoValidationSchema } from '../../../utils/userInfoValidationSchema';
import AuthInputPassword from '../AuthInputPassword/AuthInputPassword';

const AuthForm = () => {
  const { pathname } = useLocation();
  const id = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>
        {pathname === '/signin' ? 'Sign In' : 'Sign Up'}
      </h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={userInfoValidationSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.wrap}>
              <label className={css.label} htmlFor={`email${id}`}>
                Email
              </label>
              <Field
                className={`${
                  errors.email && touched.email ? css.inputError : ''
                } ${css.input}`}
                type="email"
                name="email"
                id={`email${id}`}
                placeholder="Email"
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </div>
            <AuthInputPassword
              css={css}
              errors={errors}
              touched={touched}
              type={'password'}
              placeholder={'Password'}
            />
            {pathname === '/signup' && (
              <AuthInputPassword
                css={css}
                errors={errors}
                touched={touched}
                type={'repeatPassword'}
                placeholder={'Repeat password'}
              />
            )}
            <button className={css.button} type="submit">
              Sign In
            </button>
          </Form>
        )}
      </Formik>
      <NavLink className={css.link} to={'/signup'}>
        Sign up
      </NavLink>
    </div>
  );
};

export default AuthForm;
