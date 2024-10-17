import css from "./SettingModal.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Photo from "./Photo/Photo";
import { useState } from "react";
import Gender from "./GenderMark/Gender";
import Input from "./Input/Input";

const SettingModal = () => {
  const user = {};
  const [isSubmitBlocked, setIsSubmitBlocked] = useState(false);

  const initialValues = {
    email: user.email || "",
    name: user.name || "",
    gender: user.gender,
    avatar: user.avatar || "",
    outdatedPassword: "",
    password: "",
    repeatPassword: "",
  };

  const userInfoValidationSchema = Yup.object({
    name: Yup.string().max(32, "Too long"),
    email: Yup.string().email("Invalid email address"),
    outdatedPassword: Yup.string()
      .min(8, "Too short")
      .max(64, "Too long")
      .test("outdated-password-filled", "Required", function (value) {
        const { password, repeatPassword } = this.parent;
        if ((password || repeatPassword) && !value) {
          return false;
        }
        return true;
      }),
    password: Yup.string()
      .min(8, "Too short")
      .max(64, "Too long")
      .test("password-filled", "Required", function (value) {
        const { outdatedPassword, repeatPassword } = this.parent;
        if ((outdatedPassword || repeatPassword) && !value) {
          return false;
        }
        return true;
      }),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .test("repeat-password-filled", "Required", function (value) {
        const { outdatedPassword, password } = this.parent;
        if ((outdatedPassword || password) && !value) {
          return false;
        }
        return true;
      }),
  });

  const handleAvatarChange = (e) => {
    setIsSubmitBlocked(true);
    setTimeout(() => {
      setIsSubmitBlocked(false);
    }, 3000);
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      // dispatch()
      //   .then(() => {
      //
      //   })
      //   .catch(() => {
      //
      //   });
    }
  };

  const onSubmit = (values) => {
    const userInfo = {
      name: values.name,
      email: values.email,
      gender: values.gender,
      avatar: values.avatar,
      outdatedPassword: values.outdatedPassword,
      password: values.password,
      repeatPassword: values.repeatPassword,
    };

    // Виводимо об'єкт в консоль
    console.log("User Info Object:", userInfo);
  };

  return (
    <div className={css.settingModal}>
      <h2 className={css.settingTittle}>Setting</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={userInfoValidationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className={css.form}>
            <Photo
              avatar={user.avatar}
              isSubmitBlocked={isSubmitBlocked}
              handleAvatarChange={handleAvatarChange}
            />
            <div className={css.formsContainer}>
              <div>
                <Gender />

                <div className={css.infoGroup}>
                  <Input
                    isError={errors.name && touched.name}
                    label="Your Name"
                    placeholder="Enter your name"
                    name="name"
                    type="text"
                    classNameTitle={"bigTitle"}
                  />
                  <Input
                    isError={errors.email && touched.email}
                    label="E-mail"
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    classNameTitle={"bigTitle"}
                  />
                </div>
              </div>
              <div className={css.PasswordGroup}>
                <h3 className={css.subtitle}>Password</h3>
                <Input
                  isError={errors.outdatedPassword && touched.outdatedPassword}
                  label="Outdated password:"
                  placeholder="Password"
                  name="outdatedPassword"
                  type="password"
                  classNameTitle={css.smallTitle}
                />
                <Input
                  isError={errors.password && touched.password}
                  label="New password:"
                  placeholder="Password"
                  name="password"
                  type="password"
                  classNameTitle={"smallTitle"}
                />
                <Input
                  isError={errors.repeatPassword && touched.repeatPassword}
                  label="Repeat new password:"
                  placeholder="Password"
                  name="repeatPassword"
                  type="repeatPassword"
                  classNameTitle={"smallTitle"}
                />
                <div className={css.buttonGroup}>
                  <button type="submit" className={css.saveButton}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SettingModal;
