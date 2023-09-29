import { useContext } from 'react';
import { Link } from 'react-router-dom';

import dataContext from '../../context/context';

import './Suggest.scss';

export function Suggest() {
  const context = useContext(dataContext);

  return (
    <ul className='suggest__list'>
      {!!context.length &&
        context.map(({ title, id }) => (
          <li key={id} className='suggest__item'>
            <Link to={`/comic/${id}`}>{title}</Link>
          </li>
        ))}
      {!context.length && <li>Ничего не найдено</li>}
    </ul>
  );
}
