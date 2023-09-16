import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { useComicsServices } from '../../services/ComicsService';

import './singleComic.scss';

export function SingleComic() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

  const { loading, error, getComic } = useComicsServices();

  const updateComic = () => {
    getComic(comicId).then(com => setComic(com));
  };

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
}

function View({ comic }) {
  const { title, description, thumbnail, page, price } = comic;

  return (
    <div className='single-comic'>
      <img src={thumbnail} alt={title} className='single-comic__img' />
      <div className='single-comic__info'>
        <h2 className='single-comic__name'>{title}</h2>
        <p className='single-comic__descr'>{description}</p>
        <p className='single-comic__descr'>{page}</p>
        <div className='single-comic__price'>{price}</div>
      </div>
      <Link to='/' className='single-comic__back'>
        Вернуться назад
      </Link>
    </div>
  );
}

View.propTypes = {
  comic: PropTypes.objectOf(PropTypes.string).isRequired,
};
