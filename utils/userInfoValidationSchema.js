import * as Yup from 'yup';

export const registerFormValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short!')
    .max(64, 'Your password is too long!'),
  repeatPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short!')
    .max(64, 'Your password is too long!')
    .test('passwords-match', 'Passwords do not match', function (value) {
      const { password } = this.parent;
      return value === password;
    }),
});

export const loginFormValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short!')
    .max(64, 'Your password is too long!'),
});

export const userInfoValidationSchema = Yup.object({
  name: Yup.string().max(32, 'Too long'),
  email: Yup.string().email('Invalid email address'),
  outdatedPassword: Yup.string()
    .min(8, 'Too short')
    .max(64, 'Too long')
    .test('outdated-password-filled', 'Required', function (value) {
      const { password, repeatPassword } = this.parent;
      if ((password || repeatPassword) && !value) {
        return false;
      }
      return true;
    }),
  password: Yup.string()
    .min(8, 'Too short')
    .max(64, 'Too long')
    .test('password-filled', 'Required', function (value) {
      const { outdatedPassword, repeatPassword } = this.parent;
      if ((outdatedPassword || repeatPassword) && !value) {
        return false;
      }
      return true;
    }),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .test('repeat-password-filled', 'Required', function (value) {
      const { outdatedPassword, password } = this.parent;
      if ((outdatedPassword || password) && !value) {
        return false;
      }
      return true;
    }),
});
