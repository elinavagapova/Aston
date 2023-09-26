import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchComic } from '../../store/singleComicSlice';

import { Spinner } from '../spinner/Spinner';
import { ErrorMessage } from '../errorMessage/ErrorMessage';

import './singleComic.scss';

export function SingleComic() {
  const { isLoading, isError, comic } = useSelector(state => state.singleComic);
  const dispatch = useDispatch();
  const { comicId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchComic(comicId));
  }, [comicId]);

  const errorMessage = isError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || isError || !comic) && (
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
