import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/userSlice';

import { useAuth } from '../../hooks/useAuth';

import './appHeader.scss';

export function AppHeader() {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const header = isAuth ? (
    <>
      <li>
        <Link to='/'>Избранное</Link>
      </li>
      /
      <li>
        <Link to='/'>История</Link>
      </li>
      /
      <li>
        <button type='button' onClick={dispatch(removeUser())}>
          Выход
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to='/signup'>Зарегистрироваться</Link>
      </li>
      /
      <li>
        <Link to='/signin'>Войти</Link>
      </li>
    </>
  );

  return (
    <header className='app__header'>
      <h1 className='app__title'>
        <Link to='/'>
          <span>Marvel</span> comics
        </Link>
      </h1>
      <nav className='app__menu'>
        <ul>{header}</ul>
      </nav>
    </header>
  );
}
