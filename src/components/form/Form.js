import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './form.scss';

export function FormUser({ title, handleSubmit }) {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Неправильный email адрес').required('Обязательное поле!'),
        password: Yup.string()
          .min(5, 'Минимум 5 символов для заполнения')
          .required('Обязательное поле!'),
      })}
      onSubmit={values => handleSubmit(values.email, values.password)}
    >
      <Form className='form'>
        <Field type='email' name='email' autoComplete='off' placeholder='Введите email' />
        <ErrorMessage className='error' name='email' component='div' />
        <Field type='password' name='password' autoComplete='off' placeholder='Введите пароль' />
        <ErrorMessage className='error' name='password' component='div' />
        <button type='submit' className='button button__main'>
          <div className='inner'>{title}</div>
        </button>
      </Form>
    </Formik>
  );
}

FormUser.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
