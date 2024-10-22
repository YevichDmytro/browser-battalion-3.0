import { Formik, Form } from 'formik';
import { useState } from 'react';

import Gender from './GenderMark/Gender';
import Input from './Input/Input';
import Photo from './Photo/Photo';
import css from './SettingModal.module.css';
import { userInfoValidationSchema } from '../../../utils/userInfoValidationSchema';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

const SettingModal = ({ isOpen, handleClose }) => {
  const user = {};
  const [isSubmitBlocked, setIsSubmitBlocked] = useState(false);

  const initialValues = {
    email: user.email || '',
    userName: user.name || '',
    gender: user.gender,
    photo: user.avatar || '',
    oldPassword: '',
    password: '',
    repeatPassword: '',
  };

  /// можливо знадобиться цей код в роботі, він працює для оновлення аватару
  // const dispatch = useDispatch();

  // const handleAvatarChange = e => {
  //   setIsSubmitBlocked(true);
  //   const file = e.target.files[0];

  //   /// для створення нового ключа FormData для відправки файлу
  //   const formData = new FormData();
  //   formData.append('photo', file);

  //   // для відправки аватару на сервер
  //   dispatch(updateUserData(formData)).then(() => {
  //     setIsSubmitBlocked(false);
  //   });
  // };

  const handleAvatarChange = e => {
    setIsSubmitBlocked(true);
    setTimeout(() => {
      setIsSubmitBlocked(false);
    }, 3000);
    const file = e.target.files[0];
    console.log(file);
  };

  const onSubmit = values => {
    const userInfo = {
      userName: values.name,
      email: values.email,
      gender: values.gender,
      photo: values.avatar,
      oldPassword: values.outdatedPassword,
      password: values.password,
      repeatPassword: values.repeatPassword,
    };
    console.log('User Info Object:', userInfo);
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleClose}>
      <div className={css.settingModal}>
        <h2 className={css.settingTitle}>Setting</h2>
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
                      classNameTitle={'bigTitle'}
                    />
                    <Input
                      isError={errors.email && touched.email}
                      label="E-mail"
                      placeholder="Enter your email"
                      name="email"
                      type="email"
                      classNameTitle={'bigTitle'}
                    />
                  </div>
                </div>
                <div className={css.PasswordGroup}>
                  <h3 className={css.subtitle}>Password</h3>
                  <Input
                    isError={
                      errors.outdatedPassword && touched.outdatedPassword
                    }
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
                    classNameTitle={'smallTitle'}
                  />
                  <Input
                    isError={errors.repeatPassword && touched.repeatPassword}
                    label="Repeat new password:"
                    placeholder="Password"
                    name="repeatPassword"
                    type="password"
                    classNameTitle={css.smallTitle}
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
    </ModalWrapper>
  );
};

export default SettingModal;
