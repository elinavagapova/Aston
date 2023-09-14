import { Link } from 'react-router-dom';

import './appHeader.scss';

export function AppHeader() {
  return (
    <header className='app__header'>
      <h1 className='app__title'>
        <Link to='/'>
          <span>Marvel</span> comics
        </Link>
      </h1>
      <nav className='app__menu'>
        <ul>
          <li>
            <Link to='/'>Зарегистрироваться</Link>
          </li>
          /
          <li>
            <Link to='/'>Войти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
