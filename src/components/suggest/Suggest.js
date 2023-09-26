import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Suggest.scss';

export function Suggest({ data }) {
  return (
    <ul className='suggest__list'>
      {!!data.length &&
        data.map(({ title, id }) => (
          <li key={id} className='suggest__item'>
            <Link to={`/comic/${id}`}>{title}</Link>
          </li>
        ))}
      {!data.length && <li>Ничего не найдено</li>}
    </ul>
  );
}

Suggest.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};
