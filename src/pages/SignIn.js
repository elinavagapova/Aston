import { Link } from 'react-router-dom';

import { SignInForm } from '../components/signInForm/SignInForm';

export function SignIn() {
  return (
    <>
      <h1>Вход</h1>
      <SignInForm />
      <p>
        Или <Link to='/signup'>Зарегистрироваться</Link>
      </p>
    </>
  );
}
