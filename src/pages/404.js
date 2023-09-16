import { Link } from 'react-router-dom';

import { ErrorMessage } from '../components/errorMessage/ErrorMessage';

export default function Page404() {
  return (
    <div>
      <ErrorMessage />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>
        Данной страницы не существует
      </p>
      <Link
        to='/'
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 24,
          marginTop: 30,
          textDecoration: 'underline',
          color: 'red',
        }}
      >
        Вернуться на главную страницу
      </Link>
    </div>
  );
}
