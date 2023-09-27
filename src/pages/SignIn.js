import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <>
      <h1>Вход</h1>
      <p>
        Или <Link to='/signup'>Зарегистрироваться</Link>
      </p>
    </>
  );
}
