import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Comics({ data }) {
  return (
    <ul className='comics__grid'>
      {data.map(({ title, thumbnail, price, id }) => (
        <li className='comics__item' key={id}>
          <Link to={`/comic/${id}`}>
            <img src={thumbnail} alt={title} className='comics__item-img' />
            <div className='comics__item-name'>{title}</div>
            <div className='comics__item-price'>{price}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

Comics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  ).isRequired,
};
