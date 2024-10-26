import { Formik, Form } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Gender from './GenderMark/Gender';
import Input from './Input/Input';
import Photo from './Photo/Photo';
import css from './SettingModal.module.css';
import { userInfoValidationSchema } from '../../../utils/userInfoValidationSchema';
import { updatePhoto, updateUserData } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

const SettingModal = ({ isOpen, handleClose }) => {
  const user = useSelector(selectUser);
  const [isSubmitBlocked, setIsSubmitBlocked] = useState(false);
  // const [photo, setPhoto] = useState(undefined);
  const initialValues = {
    email: user.email || '',
    name: user.name || '',
    gender: user.gender,
    photo: user.avatar || '',
    outdatedPassword: '',
    password: '',
    repeatPassword: '',
  };

  const dispatch = useDispatch();

  const handleAvatarChange = e => {
    setIsSubmitBlocked(true);
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('photo', file);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    dispatch(updatePhoto(formData)).then(() => {
      setIsSubmitBlocked(false);
    });
  };

  // const handleAvatarChange = e => {
  //   setIsSubmitBlocked(true);
  //   setTimeout(() => {
  //     setIsSubmitBlocked(false);
  //   }, 3000);
  //   const file = e.target.files[0];
  //   setPhoto(file);
  //   console.log(file);
  // };

  const onSubmit = values => {
    let userInfo = {
      name: values.name,
      email: values.email,
      gender: values.gender,
      password: values.password,
    };

    if (userInfo.password === '') {
      delete userInfo.password;
    }

    if (userInfo.name === undefined || userInfo.name === '') {
      delete userInfo.name;
    }

    console.log('User Info Object:', userInfo);
    dispatch(updateUserData(userInfo));
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
