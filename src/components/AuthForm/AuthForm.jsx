import * as Yup from "yup";
import { useId, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";

import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

import css from "./AuthForm.module.css";

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const id = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const addContactSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign In</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={addContactSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.wrap}>
              <label className={css.label} htmlFor={`email${id}`}>
                Email
              </label>
              <Field
                className={`${
                  errors.email && touched.email ? css.inputError : ""
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
            <div className={css.wrap}>
              <label className={css.label} htmlFor={`password${id}`}>
                Password
              </label>
              <Field
                className={`${
                  errors.password && touched.password ? css.inputError : ""
                } ${css.input}`}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                id={`password${id}`}
              />
              <ErrorMessage
                className={css.error}
                name="password"
                component="span"
              />
              <button
                type="button"
                className={css.hidePwdBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <HiOutlineEye size={16} />
                ) : (
                  <HiOutlineEyeOff size={16} />
                )}
              </button>
            </div>
            <button className={css.button} type="submit">
              Sign In
            </button>
          </Form>
        )}
      </Formik>
      <NavLink className={css.link} to={"/signup"}>
        Sign up
      </NavLink>
    </div>
  );
};

export default AuthForm;
