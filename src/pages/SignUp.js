import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <>
      <h1>Регистрация</h1>
      <p>
        Уже есть аккаунт? <Link to='/signin'>Войти</Link>
      </p>
    </>
  );
}
