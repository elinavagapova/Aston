import { Link } from 'react-router-dom';

import { SignUpForm } from '../components/signUpForm/SignUpForm';

export function SignUp() {
  return (
    <>
      <h1>Регистрация</h1>
      <SignUpForm />
      <p>
        Уже есть аккаунт? <Link to='/signin'>Войти</Link>
      </p>
    </>
  );
}
