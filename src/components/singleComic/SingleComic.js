import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { useComicsServices } from '../../services/ComicsService';

import './singleComic.scss';

export function SingleComic() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const navigate = useNavigate();

  const { loading, error, getComic } = useComicsServices();

  const goBack = () => navigate(-1);

  const updateComic = () => {
    getComic(comicId).then(com => setComic(com));
  };

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) && (
    <div className='single-comic'>
      <img src={comic.thumbnail} alt={comic.title} className='single-comic__img' />
      <div className='single-comic__info'>
        <h2 className='single-comic__name'>{comic.title}</h2>
        <p className='single-comic__descr'>{comic.description}</p>
        <p className='single-comic__descr'>{comic.page}</p>
        <div className='single-comic__price'>{comic.price}</div>
      </div>
      <button type='button' className='single-comic__back' onClick={goBack}>
        Вернуться назад
      </button>
    </div>
  );

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
}
