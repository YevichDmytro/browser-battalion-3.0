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
  password: Yup.string().min(8, 'Too short').max(64, 'Too long').nullable(), // Make it nullable to allow empty values
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .nullable(),
});

export const WaterRateValidationSchema = Yup.object({
  waterRate: Yup.string()
    .required('Water rate is required')
    .min(1, 'Please, add you water rate!')
    .max(15000, 'You drank too much water!!'),
});

export const WaterNotesValidationSchema = Yup.object({
  waterVolume: Yup.string()
    .required('Water volume is required')
    .min(1, 'Please, add you water volume!')
    .max(15000, 'You drank too much water!!'),
  date: Yup.string().required('Date is required').typeError('Incorrect date'),
});
