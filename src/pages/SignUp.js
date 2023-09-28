import { Link } from 'react-router-dom';

import { SignUpForm } from '../components/signUpForm/SignUpForm';

export function SignUp() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Регистрация</h1>
      <SignUpForm />
      <p style={{ textAlign: 'center' }}>
        Уже есть аккаунт?{' '}
        <Link to='/signin' style={{ textDecoration: 'underline' }}>
          Войти
        </Link>
      </p>
    </>
  );
}
