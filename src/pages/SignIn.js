import { Link } from 'react-router-dom';

import { SignInForm } from '../components/signInForm/SignInForm';

export function SignIn() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Вход</h1>
      <SignInForm />
      <p style={{ textAlign: 'center' }}>
        Или{' '}
        <Link to='/signup' style={{ textDecoration: 'underline' }}>
          Зарегистрироваться
        </Link>
      </p>
    </>
  );
}
